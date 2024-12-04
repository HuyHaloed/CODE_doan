import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const { cart } = useProducts();
  const cartCount = new Set(cart.map((product) => product.id)).size;

  useEffect(() => {
    const loggedInStatus = sessionStorage.getItem("isLoggedIn");
    if (loggedInStatus) {
      setIsLoggedIn(true);
      setUsername(sessionStorage.getItem("username"));
      setAvatar(sessionStorage.getItem("avatar"));
    }
  }, []);
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
        </button>
      </div>

      <div className={styles.searchBar}>
        <input type="text" placeholder="Nhập từ khoá..." />
        <button className={styles.searchBtn}>
          <Icon icon="fe:search" />
        </button>
      </div>

      <div className={styles.userOptions}>
        <div className={styles.notificationIcon}>
          {/* eslint-disable-next-line */}
          <a href="#">
            <Icon
              icon="mingcute:notification-fill"
              className={styles.iconify}
            />
            <span className={styles.notificationCount}>3</span>
          </a>
        </div>

        <div className={styles.messageIcon}>
          {/* eslint-disable-next-line */}
          <a href="#" onClick={() => navigate("/status")}>
            <Icon icon="tabler:mail-filled" className={styles.iconify} />
            <span className={styles.messageCount}>10</span>
          </a>
        </div>

        <div className={styles.cart}>
          {/* eslint-disable-next-line */}
          <Link to="/cart">
            <Icon icon="mdi:cart" className={styles.iconify} />
            {cartCount > 0 && (
              <span className={styles.cartCount}>{cartCount}</span>
            )}
          </Link>
        </div>
        {isLoggedIn ? (
          <>
            <div className={styles.userAvatar}>
              <img src={avatar} alt="avatar" className={styles.avatar} />
              <span className={styles.username}>{username}</span>
            </div>
            <button className={styles.logoutBtn} onClick={handleLogout}>
              Đăng xuất
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Đăng nhập</Link>
            <Link to="/signup">Đăng ký</Link>
          </>
        )}
      </div>
    </div>
  );
}
export default Navbar;
