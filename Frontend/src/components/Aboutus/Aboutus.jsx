import "./Aboutus.scss";
import { MdSearch } from "react-icons/md";
import React from "react";

const Aboutus = () => {
  return (
    <>
      <div className="image-company">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/491/30/324/nature-landscape-green-plants-wallpaper-preview.jpg"
          alt="big-image"
          className="big-image-company"
        />

        <div className="content-overlay">
          <span>Chúng tôi cung cấp thực phẩm bảo vệ cho sức khỏe của bạn</span>

          {/* Ô tìm kiếm */}
          <div className="searchbar">
            <input
              type="text"
              className="search-box"
              placeholder="Nhập từ khóa"
            />
            <button className="search-button">
              <MdSearch />
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>

      <div className="about-content">
        <span className="slogan">
          Chúng tôi có mặt ở khắp các tỉnh thành của Việt Nam
        </span>
        <div className="oustanding">
          <div className="rate">#5</div>
          <div className="rate">2,3</div>
          <div className="rate">2</div>
          <div className="rate">$3,5</div>
        </div>

        <div className="oustanding-in4">
          <h3 className="rate-in4">Web bán hàng tốt nhất Việt Nam</h3>
          <h3 className="rate-in4">Tỷ</h3>
          <h3 className="rate-in4">Triệu</h3>
          <h3 className="rate-in4">Tỷ</h3>
        </div>

        <div className="oustanding-detail">
          <h4 className="rate-detail">
            GreenFood là web bán hàng nằm trong top 10
          </h4>
          <h4 className="rate-detail">Dơn hàng phát sinh trong vòng 1 năm</h4>
          <h4 className="rate-detail">Nhà bán hàng trên khắp cả nước</h4>
          <h4 className="rate-detail">
            Là số tiền người mua trong cả nước tiết kiệm trong một năm nhờ vào
            GreenFood
          </h4>
        </div>

        <h3 className="h3career">Cơ hội việc làm dành cho bạn</h3>

        <ul className="departments-list">
          <li className="departments-item ">
            <div className="title"> Business Development and Partnerships</div>
            <div className="count">164 Vị trí đang mở</div>
          </li>
          <li className="departments-item ">
            <div className="title">
              {" "}
              Business Intelligence and Data Analytics
            </div>
            <div className="count">69 Vị trí đang mở</div>
          </li>
          <li className="departments-item ">
            <div className="title"> Compliance</div>
            <div className="count">7 Vị trí đang mở</div>
          </li>
          <li className="departments-item ">
            <div className="title"> Cross Border eCommerce</div>
            <div className="count">24 Vị trí đang mở</div>
          </li>
          <li className="departments-item ">
            <div className="title"> Data Science</div>
            <div className="count">0 Vị trí đang mở</div>
          </li>
          <li className="departments-item ">
            <div className="title"> Design</div>
            <div className="count">6 Vị trí đang mở</div>
          </li>
          <li className="departments-item ">
            <div className="title"> Engineering and Technology</div>
            <div className="count">131 Vị trí đang mở</div>
          </li>
          <li className="departments-item ">
            <div className="title"> Finance</div>
            <div className="count">49 Vị trí đang mở</div>
          </li>
          <li className="departments-item ">
            <div className="title"> Legal and Finance</div>
            <div className="count">5 Vị trí đang mở</div>
          </li>
          <li className="departments-item ">
            <div className="title"> Marketing</div>
            <div className="count">123 Vị trí đang mở</div>
          </li>
          <li className="departments-item ">
            <div className="title"> Operations</div>
            <div className="count">842 Vị trí đang mở</div>
          </li>
          <li className="departments-item ">
            <div className="title"> People</div>
            <div className="count">64 Vị trí đang mở</div>
          </li>
          <li className="departments-item ">
            <div className="title"> Product Management</div>
            <div className="count">73 Vị trí đang mở</div>
          </li>
          <li className="departments-item ">
            <div className="title"> Risk Management</div>
            <div className="count">4 Vị trí đang mở</div>
          </li>
          <li className="departments-item ">
            <div className="title"> GreenFood & SeaMoney Programmes</div>
            <div className="count">1 Vị trí đang mở</div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Aboutus;
