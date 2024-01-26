import React from "react";
import Header from "../components/header";
import "../index.scss";
import { Link } from "react-router-dom";
const img = require('../assets/space.png')

const Main = () => {
  return (
    <div className="main">
      <div className="details">
        <span>WELCOME TO EXPLOR</span>
        <h1>EXPLOR: Journey Beyond the Stars</h1>
        <p>
          Embark on an Epic Exploration of the Cosmos with EXPLOR: Ignite Your
          Curiosity, Unveil the Mysteries of the Universe, and Forge Your Path
          among the Stars.
        </p>
        <div className="btn_box">
          <Link>Explore</Link>
          <Link>what we do</Link>
        </div>
      </div>
      <div className="img">
        <img src={img} alt="" className="main_img" />
      </div>
    </div>
  );
};

export default Main;
