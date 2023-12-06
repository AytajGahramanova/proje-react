import React from "react";
import "../components/News.css";

const News = () => {
  return (
    <div style={{ background: "#F8F9FA", padding: 50 }}>
      <div className="container">
        <p style={{ fontSize: "2rem" }}>GET NEWS & UPDATES</p>
        <div className="form" style={{ padding: "2em 0" }}>
          <form action="" style={{ display: "flex" }}>
            <input className="input" type="text" placeholder="Your Name" />
            <input className="input" type="text" placeholder="Your Email" />
            <button style={{ padding: "15px 170px" }}>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default News;
