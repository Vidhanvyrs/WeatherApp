import React, { useState } from "react";
import "./App.css";
import Card from "./Card";
import MainCard from "./MainCard";
import "./Card.css";

const CARD = 4;
const Main = (props) => {
  const [showContent, setShowContent] = useState(true);
  const updateHandler = () => {
    setShowContent(!showContent);
  };

  return showContent ? (
    <div className="flex-child info">
      <section className="section">
        <div className="masthead-image" id="master-container">
          <div className="content center">
            <h1 id="master">
              <div>Get your weather updates </div>
              <div>❄🌧🌥️☀️☔🌨🌩</div>
              <div>and travel</div>
              <div id="master-container-scroller">
                <div className="master-container-scroller_item">
                  Effortlessly.
                </div>
                <div className="master-container-scroller_item">Carefree.</div>
                <div className="master-container-scroller_item">
                  Confidently.
                </div>
                <div className="master-container-scroller_item">Easily .</div>
                <div className="master-container-scroller_item">
                  Fearlessly .
                </div>
                <div className="master-container-scroller_item">Joyfully .</div>
                <div className="master-container-scroller_item">Grandly .</div>
                <div className="master-container-scroller_item">
                  Stressfree .
                </div>
                <div className="master-container-scroller_item">
                  Wihout any remorse .
                </div>
                <div className="master-container-scroller_item">😉 .</div>
                {/* <div className='master-container-scroller_item'>
              <a className='cta-link' href='#'></a>
             </div> */}
              </div>
              <div>
                <button
                  className={props.location === "" ? "disable" : "btn2"}
                  onClick={updateHandler}
                >
                  Get updates ✌️
                </button>
              </div>
            </h1>
          </div>
        </div>
      </section>
    </div>
  ) : (
    <div className="flex-child info">
      <section className="section">
        <div className="masthead-image" id="master-container">
          <Card>
            {[...new Array(CARD)].map((_, i) => (
              <MainCard idx={i} />
            ))}
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Main;
