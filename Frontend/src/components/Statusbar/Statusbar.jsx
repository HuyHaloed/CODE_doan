import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Statusbar.scss";

const StatusBar = () => {
  const [activeTab, setActiveTab] = useState("Tất cả");
  const [currentOrders, setCurrentOrders] = useState([]);
  const navigate = useNavigate();

  const tabs = [
    { name: "Tất cả", path: "/all" },
    { name: "Chờ thanh toán", path: "/waitpay" },
    { name: "Vận chuyển", path: "/transfer" },
    { name: "Chờ giao hàng", path: "/waitdelivery" },
    { name: "Hoàn thành", path: "/completed" },
    { name: "Đã huỷ", path: "/canceled" },
    { name: "Trả hàng/Hoàn tiền", path: "/return-refund" },
  ];

  // Giả lập dữ liệu đơn hàng cho mỗi trạng thái
  const orders = {
    "Tất cả": [],
    "Chờ thanh toán": [],
    "Vận chuyển": [],
    "Chờ giao hàng": [],
    "Hoàn thành": [],
    "Đã huỷ": [],
    "Trả hàng/Hoàn tiền": [],
  };

  useEffect(() => {
    setCurrentOrders(orders[activeTab]);
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab.name);
    navigate(tab.path);
  };

  return (
    <div className="status-bar">
      <div className="user-profile">
        <img src="profile-placeholder.png" alt="Profile" />
        <p>trongtruong0301</p>
        <button>Sửa Hồ Sơ</button>
      </div>

      {/* Thêm vai trò tablist */}
      <div className="tabs" role="tablist" aria-label="Order Status Tabs">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            role="tab" // Vai trò tab cho các phần tử tab
            tabIndex={0} // Cho phép dùng phím tab để chọn tab
            aria-selected={activeTab === tab.name}
            className={`tab ${activeTab === tab.name ? "active" : ""}`}
            onClick={() => handleTabClick(tab)}
            onKeyDown={(e) => e.key === "Enter" && handleTabClick(tab)} // Điều hướng khi nhấn Enter
          >
            {tab.name}
          </div>
        ))}
      </div>

      <input
        type="text"
        placeholder="Bạn có thể tìm kiếm theo tên Shop, ID đơn hàng hoặc Tên Sản phẩm"
        className="search-bar"
      />

      {/* Vai trò tabpanel để chứa nội dung tương ứng với tab */}
      <div className="order-list" role="tabpanel" aria-labelledby={activeTab}>
        {currentOrders.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>ID Đơn hàng</th>
                <th>Sản phẩm</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>{/* Render các đơn hàng ở đây */}</tbody>
          </table>
        ) : (
          <div className="no-orders"> 🧾 CHƯA CÓ ĐƠN HÀNG </div>
        )}
      </div>
    </div>
  );
};

export default StatusBar;
