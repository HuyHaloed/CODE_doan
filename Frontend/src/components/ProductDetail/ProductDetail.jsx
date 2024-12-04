import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";
import { FaFacebook, FaShare, FaFacebookMessenger } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { FaPhone, FaMessage, FaStore } from "react-icons/fa6";
import axios from 'axios';
import Cookies from 'js-cookie';
import { getUserData } from '../../apis/getAPIs';
import "./ProductDetail.scss";

const ProductDetail = () => {
  const { id } = useParams();
  const { products, addToCart } = useProducts();
  const product = products.find((prod) => prod.id.toString() === id);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUserData();
        setUserData(data);
        console.log(data);
        
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [])
  const handleAddToCart = async () => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
// cart/add
    try {
      if (isLoggedIn) {
        addToCart({ ...product, quantity });
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 1000);
      }
      // navigate('/cart');
    } catch (error) {
      navigate('/login');
    }
  };

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  if (!product) {
    return <h1>Không tìm thấy sản phẩm</h1>;
  }

  const images = product.image.split(",");

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    let shareUrl;

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "messenger":
        shareUrl = `https://www.messenger.com/share?link=${encodeURIComponent(
          url
        )}`;
        break;
      case "zalo":
        shareUrl = `https://zalo.me/share?link=${encodeURIComponent(url)}`;
        break;
      default:
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank");
    }
  };

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert("Đã sao chép liên kết vào clipboard!");
    });
  };

  const handleMessageClick = (seller) => {
    alert(`Gửi tin nhắn tới ${seller.name}`);
  };

  const comments = [
    {
      id: 1,
      userImage: "https://via.placeholder.com/100",
      userName: "Nguyễn Văn A",
      voteTime: "14/10/2024",
      rating: 5,
      content: "Sản phẩm tuyệt vời, đáng đồng tiền",
    },
    {
      id: 2,
      userImage: "https://via.placeholder.com/100",
      userName: "Trần Thị B",
      voteTime: "3 giờ trước",
      rating: 4,
      content: "Chất lượng tốt, giao hàng nhanh",
    },
    {
      id: 3,
      userImage: "https://via.placeholder.com/100",
      userName: "Lê Văn C",
      voteTime: "5 giờ trước",
      rating: 3,
      content: "Tạm ổn, cần cải thiện",
    },
  ];

  const cmtsPerPage = 10;
  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const currentcmts = comments.slice(
    (currentPage - 1) * cmtsPerPage,
    currentPage * cmtsPerPage
  );

  const totalPages = Math.ceil(comments.length / cmtsPerPage);

  return (
    <div className="product-detail-container">
      {/* Phần ảnh sản phẩm */}
      <div className="product-image-section">
        <img
          src={images[currentImageIndex]}
          alt="Ảnh sản phẩm chính"
          className="product-main-image"
        />
        <div className="product-thumbnail-container">
          <button className="thumbnail-nav prev" onClick={handlePrevClick}>
            ◀
          </button>
          {images.slice(0, 5).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Ảnh nhỏ ${index + 1}`}
              className={`product-thumbnail ${
                index === currentImageIndex ? "selected" : ""
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
          <button className="thumbnail-nav next" onClick={handleNextClick}>
            ▶
          </button>
        </div>
      </div>

      {/* Thông tin sản phẩm */}
      <div className="product-info-section">
        <h2 className="product-title">{product.name}</h2>
        <div className="product-rating">
          <span className="star-rating">⭐4.7 {product.rating}</span>
          <span>({product.comments} bình luận)</span>
          <span>Đã bán {product.sold}</span>
        </div>
        <div className="product-price">{product.price} VNĐ</div>
        <div className="quantity-section">
          <span>Số lượng:</span>
          <input
            type="number"
            value={quantity}
            min={1}
            onChange={handleQuantityChange}
            className="quantity-input"
          />
          <span className="available-stock">Kho: {product.availableStock}</span>
        </div>
        <div className="button-area">
          <button className="buy-now-button">Mua ngay</button>
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Thêm vào giỏ hàng
          </button>
        </div>

        {/* Chia sẻ sản phẩm */}
        <div className="share-buttons">
          <h3>Chia sẻ:</h3>
          <button
            className="share-button"
            onClick={() => handleShare("facebook")}
          >
            <FaFacebook size={32} style={{ color: "#006AFF" }} />
          </button>
          <button
            className="share-button"
            onClick={() => handleShare("messenger")}
          >
            <FaFacebookMessenger size={32} style={{ color: "#006AFF" }} />
          </button>
          <button className="share-button" onClick={() => handleShare("zalo")}>
            <SiZalo size={32} style={{ color: "#00B2FF" }} />
          </button>
          <button className="copy-link-button" onClick={handleCopyLink}>
            Sao chép liên kết
          </button>
        </div>

        {/* Liên hệ với người bán */}
        <div className="contact-seller">
          <h3>Liên hệ người bán:</h3>
          <button
            className="contact-button"
            onClick={() => handleMessageClick(product.seller)}
          >
            <FaMessage />
            Gửi tin nhắn
          </button>
        </div>
      </div>

      {/* Popup thông báo thêm vào giỏ hàng */}
      {showPopup && (
        <div className="popup">
          <p>Đã thêm sản phẩm vào giỏ hàng!</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;