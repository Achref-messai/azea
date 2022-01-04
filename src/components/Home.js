import React from "react";
import "./home.css";
const Home = () => {
  return (
    <>
      <nav>
        <h2>I❤️ Music</h2>
        <div className="secion1">
          <div className="option">
            <a href="# ">
              <i className="fa-regular fa-house" /> Home
            </a>
          </div>
          <div className="option">
            <a href="# ">
              <i className="fa-regular fa-chart-line-up" /> Trends
            </a>
          </div>
          <div className="option">
            <a href="# ">
              <i className="fa-light fa-compass" /> Feed
            </a>
          </div>
        </div>
        <div className="section2">
          <h4>Discover</h4>
          <div className="option">
            <i />
            <a href="# ">
              <i className="fas fa-table" /> New and Notable
            </a>
          </div>
          <div className="option">
            <i />
            <a href="# ">
              <i className="fa-light fa-calendar-days" /> Release calender
            </a>
          </div>
          <div className="option">
            <i />
            <a href="# ">
              <i className="fad fa-calendar-star" />
              Events
            </a>
          </div>
        </div>
        <div className="secion3">
          <h4>My Collection</h4>
          <div className="option">
            <i />
            <a href="# ">
              <i className="fa-regular fa-heart" /> Favorite songs
            </a>
          </div>
          <div className="option">
            <i />
            <a href="# ">
              <i className="fas fa-users" /> Artist
            </a>
          </div>
          <div className="option">
            <i />
            <a href="# ">
              <i className="far fa-star" /> Album
            </a>
          </div>
        </div>
      </nav>
      <div className="loigincontainer">
        <div className="flexino">
          <img src="photo.png" alt="" />
          <p>achref messai</p>
        </div>
        <span>&gt;</span>
      </div>
    </>
  );
};

export default Home;
