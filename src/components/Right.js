import React from "react";
import "./home.css";
const Right = () => {
  return (
    <>
      <section className="right">
        <div className="section1">
          <h2>shortcuts</h2>
          <br />
          <div className="cont">
            <p>
              <i className="fas fa-wreath" id="chill" />
              chill hits
            </p>
            <p>
              <i className="fad fa-star" src />
              indie pop
            </p>
          </div>
          <div className="cont">
            <p>
              <i className="fad fa-guitar" id="chill2" /> accustic
            </p>
            <p>
              <i className="fas fa-piano-keyboard" id="chill3" />
              piano blues
            </p>
          </div>
          <div className="cont">
            <p>
              <i className="fad fa-saxophone" />
              jazz
            </p>
            <p>
              <i className="fad fa-saxophone" />
              hop
            </p>
          </div>
        </div>
        <div className="section2">
          <h2>fav artists</h2> <br />
          <div className="artist">
            <img src="taylor.png" alt="taylor" />
            <div className="contina">
              <p>taylor swift</p>
              <span>196 songs in library</span>
            </div>
            <button>..</button>
          </div>
          <div className="artist">
            <img src="taylor.png" alt="taylor" />
            <div className="contina">
              <p>taylor swift</p>
              <span>196 songs in library</span>
            </div>
            <button>..</button>
          </div>
          <div className="artist">
            <img src="taylor.png" alt="taylor" />
            <div className="contina">
              <p>taylor swift</p>
              <span>196 songs in library</span>
            </div>
            <button>..</button>
          </div>
          <div className="artist">
            <img src="taylor.png" alt="tay" />
            <div className="contina">
              <p>taylor swift</p>
              <span>196 songs in library</span>
            </div>
            <button>..</button>
          </div>
        </div>
        <div className="socialmedia">
          <div className="cards">
            <img src="facebook.png" alt="facebook" />
            <h4>follow us on facebook</h4>
          </div>
          <div className="cards">
            <img src="youtube.png" alt="youtube" />
            <h4>follow us on youtube</h4>
          </div>
          <div className="cards">
            <img src="instagram.png" alt="insta" />
            <h4>follow us on instagram</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Right;
