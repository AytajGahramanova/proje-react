import React from "react";
import "../components/Stories.css";

const Stories = () => {
  return (
    <div className="container">
      <div className="stories-wrapper">
        <div className="top">
          <p>FEATURED STORIES</p>
        </div>
        <div className="bottom">
          <img
            src="https://preview.colorlib.com/theme/adopted/img/work_thumb_1.jpg.webp"
            alt=""
          />
          <img
            src="https://preview.colorlib.com/theme/adopted/img/work_thumb_2.jpg.webp"
            alt=""
          />
          <img
            src="https://preview.colorlib.com/theme/adopted/img/work_thumb_3.jpg.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Stories;
