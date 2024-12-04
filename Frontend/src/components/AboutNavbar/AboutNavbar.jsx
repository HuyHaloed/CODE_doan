import { Link, useNavigate, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import React, { useState, useEffect } from "react";
import "./AboutNavbar.scss";
import styles from "../Navbar/Navbar.module.css";

const AboutNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [visitedLink, setVisitedLink] = useState(null);

  const handleLinkClick = (link) => {
    setVisitedLink(link);
  };

  useEffect(() => {
    if (location.pathname === "/about") {
      setVisitedLink(null);
    }
  }, [location.pathname]);

  return (
    <header className="header-about">
      <div className="container">
        <div className={styles.logo}>
          <button
            className={styles.logoButton}
            onClick={() => navigate("/about")}
          >
            {/* eslint-disable-next-line */}
            <a href="#">
              <Icon className={styles.logo} icon="noto:leafy-green" />
            </a>{" "}
            <p className={styles.shopName}>GreenFood Career</p>
          </button>
        </div>
        <div className="nav-content">
          <nav className="tab">
            <Link
              to="/about/intro"
              className={`nav-tab ${
                visitedLink === "intro" ? "visited-link" : ""
              }`}
              onClick={() => handleLinkClick("intro")}
            >
              Về GreenFood
            </Link>
            <Link
              to="/about/why-greenfood"
              className={`nav-tab ${
                visitedLink === "why-greenfood" ? "visited-link" : ""
              }`}
              onClick={() => handleLinkClick("why-greenfood")}
            >
              Tại sao nên chọn GreenFood
            </Link>
            <Link
              to="/about/career"
              className={`nav-tab ${
                visitedLink === "career" ? "visited-link" : ""
              }`}
              onClick={() => handleLinkClick("career")}
            >
              Việc làm
            </Link>
            <Link
              to="/about/event"
              className={`nav-tab ${
                visitedLink === "event" ? "visited-link" : ""
              }`}
              onClick={() => handleLinkClick("event")}
            >
              Sự kiện
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default AboutNavbar;
