import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProtectedRoute.module.css"; // Đảm bảo có styles cho modal
import { Icon } from "@iconify/react";

const ProtectedRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = !!sessionStorage.getItem("isLoggedIn");
    
    setTimeout(() => {
      setIsLoading(false);
      if (!isLoggedIn) {
        setShowModal(true);
      }
    }, 1000);
  }, []);

  const handleLoginRedirect = () => {
    setShowModal(false);
    navigate("/login");
  };

  if (isLoading) {
    return (
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  return (
    <>
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <Icon
              icon="nonicons:not-found-16"
              className={styles.noPermission}
            />
            <p className={styles.modalTitle}>Thất bại!</p>
            <p className={styles.modalMsg}>Vui lòng đăng nhập để tiếp tục.</p>
            <button className={styles.modalBtn} onClick={handleLoginRedirect}>
              Đăng nhập ngay
            </button>
          </div>
        </div>
      )}
      {!showModal && children}{" "}
    </>
  );
};

export default ProtectedRoute;
