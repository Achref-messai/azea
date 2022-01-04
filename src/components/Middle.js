import React from "react";
import "./home.css";
const Midlle = () => {
  return (
    <>
      <section className="mid">
        <div className="searchbar">
          <input type="text" placeholder="search for artist songs and.." />
          <i className="fad fa-search" style={{ fontSize: "20px" }} />
        </div>
        <h5>whats hot ?</h5>
        <i>🔥</i>
        <div className="headlines">
          <h2>trending</h2>
          <span>more &gt;</span>
        </div>
        <div className="card">
          <p>artist</p>
          <h3>
            on top
            <br />
            of the world
          </h3>
          <br />
          <button style={{ backgroundColor: "black", color: "white" }}>
            play
          </button>
          <button
            style={{
              backgroundColor: "white",
              color: "black",
              width: "4.5rem",
            }}
          >
            follow
          </button>
        </div>
        <br />
        <div className="playlist">
          <div className="headline">
            <h2>my playlist</h2>
            <span>show all</span>
          </div>
          <br />
          <div className="songscontainer">
            <div className="songcontainer">
              <p>#1</p>
              <p>title</p>
              <p>artist</p>
              <p>time</p>
              <p>album</p>
            </div>
            <div className="songcontainer">
              <p>#1</p>
              <p>title</p>
              <p>artist</p>
              <p>time</p>
              <p>album</p>
            </div>
            <div className="songcontainer">
              <p>#2</p>
              <p>title</p>
              <p>artist</p>
              <p>time</p>
              <p>album</p>
            </div>
            <div className="songcontainer">
              <p>#3</p>
              <p>title</p>
              <p>artist</p>
              <p>time</p>
              <p>album</p>
            </div>
            <div className="songcontainer">
              <p>#4</p>
              <p>title</p>
              <p>artist</p>
              <p>time</p>
              <p>album</p>
            </div>
            <div className="songcontainer">
              <p>#5</p>
              <p>title</p>
              <p>artist</p>
              <p>time</p>
              <p>album</p>
            </div>
          </div>
          <div className="controlpannel">
            <div className="controlbtns">
              <i className="fa-regular fa-heart" style={{ fontSize: "20px" }} />
              <div className="playnextpre">
                <i
                  className="fas fa-fast-backward"
                  style={{ fontSize: "35px" }}
                />
                <i
                  className="fas fa-pause-circle"
                  style={{ fontSize: "35px" }}
                />
                <i
                  className="fas fa-fast-forward"
                  style={{ fontSize: "35px" }}
                />
              </div>
              <div className="volume">
                <i className="fal fa-volume" style={{ fontSize: "20px" }} />
                <input
                  type="range"
                  id="points"
                  name="points"
                  min={0}
                  max={10}
                  className="volumerange"
                />
              </div>
            </div>
            <div className="timecontainer">
              <span>3:20</span>
              <input
                type="range"
                id="points"
                name="points"
                min={0}
                max={10}
                className="songtime"
              />
              <span>20</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Midlle;
