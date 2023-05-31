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
                  <a className="cta-link" href="#">
                    Effortlessly
                  </a>
                  .
                </div>
                <div className="master-container-scroller_item">
                  <a className="cta-link" href="#">
                    Carefree
                  </a>
                  .
                </div>
                <div className="master-container-scroller_item">
                  <a className="cta-link" href="#">
                    Confidently
                  </a>
                  .
                </div>
                <div className="master-container-scroller_item">
                  <a className="cta-link" href="#">
                    Easily
                  </a>
                  .
                </div>
                <div className="master-container-scroller_item">
                  <a className="cta-link" href="#">
                    Fearlessly
                  </a>
                  .
                </div>
                <div className="master-container-scroller_item">
                  <a className="cta-link" href="#">
                    Joyfully
                  </a>
                  .
                </div>
                <div className="master-container-scroller_item">
                  <a className="cta-link" href="#">
                    Grandly
                  </a>
                  .
                </div>
                <div className="master-container-scroller_item">
                  <a className="cta-link" href="#">
                    Stressfree
                  </a>
                  .
                </div>
                <div className="master-container-scroller_item">
                  <a className="cta-link" href="#">
                    Wihout any remorse
                  </a>
                  .
                </div>
                <div className="master-container-scroller_item">
                  <a className="cta-link" href="#">
                    😉
                  </a>
                  .
                </div>
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
              <MainCard key={i} />
            ))}
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Main;
