import React from "react";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import tik from "../../assets/images/tik-tok.png";
import "./Footer.scss";

const Footer = () => {
  const images = [
    "https://down-vn.img.susercontent.com/file/vn-11134258-7ras8-m20rc1wk8926cf",
    "https://down-vn.img.susercontent.com/file/vn-50009109-64f0b242486a67a3d29fd4bcf024a8c6",
    "https://down-vn.img.susercontent.com/file/59270fb2f3fbb7cbc92fca3877edde3f",
    "https://down-vn.img.susercontent.com/file/957f4eec32b963115f952835c779cd2c",
    "https://down-vn.img.susercontent.com/file/0d349e22ca8d4337d11c9b134cf9fe63",
    "https://down-vn.img.susercontent.com/file/3900aefbf52b1c180ba66e5ec91190e5",
    "https://down-vn.img.susercontent.com/file/6e3be504f08f88a15a28a9a447d94d3d",
    "https://down-vn.img.susercontent.com/file/0b3014da32de48c03340a4e4154328f6",
    "https://down-vn.img.susercontent.com/file/vn-50009109-ec3ae587db6309b791b78eb8af6793fd"
  ];


  return (
      <div>
        <footer className="main-footer">
          <div className="footer-container">
            <div className="footer-item contact-info">
              <h3>Liên hệ với chúng tôi</h3>
              <p>Địa chỉ: 123 Đường ABC, Thành phố XYZ</p>
              <p>Điện thoại: (012) 345-6789</p>
              <p>Email: info@company.com</p>
            </div>
            <div className="footer-item quick-links">
              <h3>Liên kết nhanh</h3>
              <ul>
                <li><a href="/about" className="quick-link">Giới thiệu</a></li>
                <li><a href="/privacy" className="quick-link">Chính sách bảo mật</a></li>
                <li><a href="/returns" className="quick-link">Chính sách hoàn trả</a></li>
                <li><a href="/faq" className="quick-link">Câu hỏi thường gặp</a></li>
              </ul>
            </div>

            <div className="footer-item social-media">
              <h3>Kết nối với chúng tôi</h3>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img src={facebook} alt="Facebook" className="social-icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src={instagram} alt="Instagram" className="social-icon" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="Tiktok">
                <img src={tik} alt="Tiktok" className="social-icon" />
              </a>
            </div>

            <div className="footer-item payment">
              <h3>Payment</h3>
              <div className="image-payment">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOb6EMk5jzdZwdMcTKt3w0YDXcNjlINoOVFA&s" alt="Zalopay" className="payment-icon"/>
                <img src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png" alt="Momo" className="payment-icon"/>
                <img src="https://image.bnews.vn/MediaUpload/Org/2022/04/26/logo-bidv-20220426071253.jpg" alt="BIDV" className="payment-icon"/>
                <img src="https://inkythuatso.com/uploads/images/2021/09/logo-vietinbank-inkythuatso-10-13-22-06.jpg" alt="Viettinbank" className="payment-icon"/>
                <img src="https://static.wixstatic.com/media/9d8ed5_810e9e3b7fad40eca3ec5087da674662~mv2.png/v1/fit/w_500,h_500,q_90/file.png" alt="VCB " className="payment-icon" style={{ backgroundColor: 'white' }} />
              </div>
            </div>


            <div className="footer-item logistic">
            <h3>Logistic</h3>
              <div className="image-grid">
                {images.map((src, index) => (
                    <div key={index} className="image-item">
                      <img src={src} alt={`Logistic ${index + 1}`} />
                    </div>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-bottom-main">
            <p>© Copyright 2024. Pi314. All rights reserved.</p>
          </div>
        </footer>
      </div>
  );
};

export default Footer;
