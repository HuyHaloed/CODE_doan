import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FeatureProduct.scss";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";

const FeaturedProducts = ({ products }) => {
  const navigate = useNavigate();
  const productsPerPage = 30;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleProductClick = (product) => {
    window.scrollTo(0, 0);
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const currentProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <section className="featured-products">
      <p className="featured-title">Tất Cả Sản Phẩm</p>
      <div className="product-grid" id="productGrid">
        {currentProducts.map((product) => (
          <button
            key={product.id}
            className="product"
            onClick={() => handleProductClick(product)}
          >
            <img src={product.image.split(",")[0]} alt={product.name} />
            <p className="product-name">{product.name}</p>
            <div className="price-sold">
              <p1>{product.price} VNĐ</p1>
            </div>
            <button className="add-to-cart">Mua ngay</button>
          </button>
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <TbPlayerTrackPrevFilled />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={currentPage === index + 1 ? "active" : ""}
            onClick={() => changePage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <TbPlayerTrackNextFilled />.
        </button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
