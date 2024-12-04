// src/components/ProductDetail/ProductDetail.jsx
import React from "react";
import styles from "./ProductInfo.module.css";
import { Icon } from "@iconify/react";

const ProductInfo = ({
  image,
  name,
  price,
  quantity = 1,
  onQuantityChange,
  onRemove,
  checked = false,
  onCheck,
  shopName,
  onShopCheck,
  isShopChecked,
  category = "Sale",
  showShopInfo,
}) => {
  const formattedPrice = price.toLocaleString();
  const formattedTotal = (price * quantity).toLocaleString();

  const handleIncrease = () => {
    onQuantityChange(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && (value === "" || Number(value) >= 1)) {
      onQuantityChange(value === "" ? 1 : Number(value));
    }
  };

  return (
    <>
      {showShopInfo && (
        <div className={styles.shopInfo}>
          <input
            type="checkbox"
            checked={isShopChecked}
            onChange={() => onShopCheck(shopName)}
            className={styles.shopCheckbox}
          />
          <button className={styles.shopCategory}>{category}</button>
          <span>
            <p>{shopName}</p>
          </span>
          <Icon icon="ph:chat-text-fill" className={styles.iconify} />
        </div>
      )}
      <div className={styles.productDetail}>
        <div>
          <input
            type="checkbox"
            checked={checked}
            onChange={onCheck}
            className={styles.productCheckbox}
          />
        </div>
        <div className={styles.productName}>
          <img
            src={image}
            alt={`Hình ảnh ${name}`}
            className={styles.productImage}
          />
          <span>{name}</span>
        </div>
        <div className={styles.productPrice}>{formattedPrice} VNĐ</div>
        <div className={styles.productQuantity}>
          <button onClick={handleDecrease} className={styles.subButton}>
            -
          </button>
          <input
            type="text"
            value={quantity}
            onChange={handleInputChange}
            className={styles.quantityInput}
          />
          <button onClick={handleIncrease} className={styles.plusButton}>
            +
          </button>
        </div>
        <div className={styles.productTotal}>{formattedTotal} VNĐ</div>
        <div className={styles.productActions}>
          <button className={styles.actionButton} onClick={onRemove}>
            Xóa
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
