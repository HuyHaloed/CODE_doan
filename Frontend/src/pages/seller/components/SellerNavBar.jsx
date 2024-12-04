import React from "react";
import styles from "./SellerNavBar.module.css";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

function SellerNavbar({ title }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    sessionStorage.removeItem("isLoggedIn");
    navigate("/login");
  };
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <button className={styles.logoButton} onClick={() => navigate("/")}>
          {/* eslint-disable-next-line */}
          <a href="#">
            <Icon className={styles.logo} icon="noto:leafy-green" />
          </a>{" "}
          <p className={styles.shopName}>GreenFood</p>
          <p className={styles.title}>{title}</p>
        </button>
      </div>
      <button className={styles.logoutBtn} onClick={handleLogout}>
        Đăng xuất
      </button>
    </div>
  );
}
export default SellerNavbar;
