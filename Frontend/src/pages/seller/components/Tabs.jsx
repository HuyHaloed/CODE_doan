// Tabs.js
import React, { useState } from "react";
import styles from "./Tabs.module.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("orderManagement");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${
            activeTab === "orderManagement" ? styles.activeTab : ""
          }`}
          onClick={() => handleTabClick("orderManagement")}
        >
          Quản Lý Đơn Hàng
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === "policyViolation" ? styles.activeTab : ""
          }`}
          onClick={() => handleTabClick("policyViolation")}
        >
          Vi phạm về đăng bán
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === "customerCare" ? styles.activeTab : ""
          }`}
          onClick={() => handleTabClick("customerCare")}
        >
          Chăm sóc khách hàng
        </button>
      </div>

      <div className={styles.content}>
        {activeTab === "orderManagement" && (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Tiêu Chí</th>
                <th>Shop của tôi</th>
                <th>Chỉ tiêu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tỉ lệ đơn không thành công</td>
                <td>-</td>
                <td>&lt;10.00%</td>
              </tr>
              <tr>
                <td>Tỷ lệ giao hàng trễ</td>
                <td>-</td>
                <td>&lt;10.00%</td>
              </tr>
              <tr>
                <td>Thời gian chuẩn bị hàng</td>
                <td>-</td>
                <td>&lt;1.50 days</td>
              </tr>
            </tbody>
          </table>
        )}
        {activeTab === "policyViolation" && (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Tiêu Chí</th>
                <th>Shop của tôi</th>
                <th>Chỉ tiêu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sản phẩm bị khoá/xoá</td>
                <td>0</td>
                <td>&lt;10.00%</td>
              </tr>
              <tr>
                <td>Tỷ lệ đặt hàng trước</td>
                <td>0.00%</td>
                <td>&lt;10.00%</td>
              </tr>
              <tr>
                <td>Các vi phạm khác</td>
                <td>0</td>
                <td>&lt;1.50 days</td>
              </tr>
            </tbody>
          </table>
        )}
        {activeTab === "customerCare" && (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Tiêu Chí</th>
                <th>Shop của tôi</th>
                <th>Chỉ tiêu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tỷ lệ phản hồi</td>
                <td>-</td>
                <td>&ge;80.00%</td>
              </tr>
              <tr>
                <td>Đánh giá shop</td>
                <td>-</td>
                <td>&ge;4.00/5</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Tabs;
