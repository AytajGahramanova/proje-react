import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../components/Header.css";


const Header = () => {
  return (
    <>
      <div className="header-wrapper">
        <div className="container">
          <div className="top-header">
            <div className="social-icons">
              <TwitterIcon className="icon" />
              <FacebookIcon className="icon" />
              <InstagramIcon className="icon" />
              <LinkedInIcon className="icon" />
            </div>
            <div className="header-right">
              <p>Sponsor</p>
              <p className="login">Login</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-header">
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <a href="" style={{ fontSize: "20px" }}>
                ADOPTED
              </a>
            </div>
            <div className="links">
              <Link to="/" >
                Home
              </Link>
              <Link to="/adoption">Adoption</Link>
              <Link to="/success">Success Stories</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
