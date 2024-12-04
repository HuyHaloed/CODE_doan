import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BestSeller.scss";
import { Icon } from "@iconify/react";

const BestSelling = ({ products }) => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const productsPerRow = 6;
  const totalRows = 2;

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalRows - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalRows - 1 ? 0 : prev + 1));
  };

  const productRows = Array.from({ length: totalRows }, (_, rowIndex) => {
    const startIndex = rowIndex * productsPerRow;
    return products.slice(startIndex, startIndex + productsPerRow);
  });

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="best-sellers-carousel">
      <p className="carousel-title">Sản phẩm bán chạy</p>

      <button className="carousel-btn left-btn" onClick={prevSlide}>
        <Icon icon="icon-park-solid:left-c" width="40" height="40hh" />
      </button>

      <button className="carousel-btn right-btn" onClick={nextSlide}>
        <Icon icon="icon-park-solid:right-c" width="40" height="40" />
      </button>

      <div className="product-container">
        {productRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`product-slide ${
              rowIndex === currentSlide ? "active" : ""
            }`}
            style={{ display: rowIndex === currentSlide ? "flex" : "none" }}
          >
            {row.map((product) => (
              <div
                key={product.id}
                className="product-item"
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={product.image.split(",")[0]}
                  alt={product.name}
                  className="product-image"
                />
                <p className="product-name">{product.name}</p>
                <p className="product-price-seller">{product.price} VNĐ</p>
                <button
                  className="buy-now"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`payment/${product.id}`, { state: { product } });
                  }}
                >
                  Mua ngay
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
