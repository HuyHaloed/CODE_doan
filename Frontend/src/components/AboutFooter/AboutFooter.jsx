import React from "react";
import "./AboutFooter.scss";
import { Icon } from "@iconify/react";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import styles from "../Navbar/Navbar.module.css";

const AboutFooter = () => {
  return (
    <footer className="about-footer">
      <div className="footer1">
        <div className="about-footer__container">
          <div className="footer-logo">
            <div className="logoandcontact">
              <a href="/about">
                <Icon className={styles.logo} icon="noto:leafy-green" />
              </a>{" "}
              <p className={styles.shopName}>GreenFood</p>
              <span className={styles.shopName}>THEO DÕI CHÚNG TÔI</span>
              <div
                className="about-footer-contact"
                style={{ display: "flex", gap: "15px", fontSize: "24px" }}
              >
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook style={{ color: "#4267B2" }} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram style={{ color: "#E1306C" }} />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok style={{ color: "#000000" }} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube style={{ color: "#FF0000" }} />
                </a>
              </div>
            </div>

            <div className="link-diff">
              <span className={styles.shopName}>GreenFood Career</span>
              <a href="/about" className="return">
                Trang chủ
              </a>
              <a href="/about/intro" className="return">
                Về GreenFood
              </a>
              <a href="/about/why-greenfood" className="return">
                Tại sao nên chọn GreenFood
              </a>
              <a href="/about/career" className="return">
                Liên hệ
              </a>
              <a href="/about/event" className="return">
                Sự kiện
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              Copyright © 2024 GreenFood. Trademarks belong to their respective
              owners. All rights reserved.
            </p>
            <a href="/about/terms-of-service">Điều khoản sử dung</a>
            <a href="/about/privacy-policy">Chính sách bảo mật</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default AboutFooter;
