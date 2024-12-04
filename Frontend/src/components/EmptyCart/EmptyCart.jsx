import styles from "./EmptyCart.module.css";
import { Icon } from "@iconify/react";

function EmptyCart() {
  return (
    <div className={styles.emptyCart}>
      <Icon icon="noto:shopping-bags" className={styles.bag} />
      <p>Giỏ hàng của bạn đang trống</p>
      <a href="/" className={styles.shopNowButton}>
        Tiếp tục mua sắm
      </a>
    </div>
  );
}

export default EmptyCart;
