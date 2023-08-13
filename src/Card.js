import React, { useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";

const MAX_VISIBILITY = 1;

const Card = ({ children }) => {
  const [active, setActive] = useState(2);
  const count = children.length;

  const handleClickLeft = () => setActive((i) => i - 1);
  const handleClickRight = () => setActive((i) => i + 1);

  return (
    <div className="carousel">
      {active > 0 && (
        <button className="nav left" onClick={handleClickLeft}>
          <TiChevronLeftOutline />
        </button>
      )}

      {React.Children.map(children, (child, i) => {
        const isActive = i === active;
        const isWithinRange = Math.abs(active - i) <= MAX_VISIBILITY;

        return (
          <div
            className="card-container"
            style={{
              "--active": isActive ? 1 : 0,
              "--offset": (active - i) / 3,
              "--direction": Math.sign(active - i),
              "--abs-offset": Math.abs(active - i) / 3,
              "pointer-events": isActive ? "auto" : "none",
              opacity: isWithinRange ? "1" : "0",
              display: isWithinRange ? "block" : "none",
            }}
          >
            {child}
          </div>
        );
      })}

      {active < count - 1 && (
        <button className="nav right" onClick={handleClickRight}>
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
};

export default Card;
