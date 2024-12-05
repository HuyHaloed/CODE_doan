import CartSummary from "../../components/CartSummary/CartSummary";
import ModalBox from "../../components/ModalBox/ModalBox";
import axios from "axios";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState} from "react";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import { mockVouchers } from "../../apis/mock-data";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import { useProducts } from "../../contexts/ProductContext";
import { getUserData } from "../../apis/getAPIs";

function Cart() {
  const { cart, updateCart } = useProducts();
  const [products, setProducts] = useState(cart);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const checkLoginStatus = () => {
      const isLoggedIn = sessionStorage.getItem("isLoggedIn");
      if (isLoggedIn) {

        const fetchUserData = async () => {
          try {

            const response = await getUserData();
            setUserData(response);

            console.log(response.id);
            const fetchCart = async () => {
              const cartResponse = await axios.post('http://localhost:8000/api/cart/products', {
                buyer_id: response.id
              });
              setProducts(cartResponse.data);
            };
            fetchCart();
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        };

        fetchUserData();
      } else {
        setProducts([]); 
      }
    };

    checkLoginStatus();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleQuantityChange = async (id, newQuantity) => {
    try {
      const response = await axios.put('http://localhost:8000/api/cart/update-quantity', {
        buyer_id: userData.id,
        product_id: id,
        quantity: newQuantity
      });
      if (response.status === 200) {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === id ? { ...product, quantity: newQuantity } : product
          )
        );
      } else {
        console.error("Failed to update quantity:", response.data);
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };
  

  useEffect(() => {
    updateCart(products);
  }, [products, updateCart]);

  const handleRemove = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const handleCheck = async (id) => {
    try {
      const response = await axios.post('http://localhost:8000/api/cart/checked', {
        buyer_id: userData.id,
        product_id: id,     
      });
  
      if (response.status === 200) {
        const { checked } = response.data;
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === id ? { ...product, checked } : product
          )
        );
      } else {
        console.error('Failed to toggle checked status:', response.data);
      }
    } catch (error) {
      console.error('Error toggling checked status:', error);
    }
  };

  const handleShopCheck = (shopName) => {
    const shopProducts = products.filter((product) => product.shopName === shopName);
    shopProducts.forEach((product) => {
      if (!product.checked) {
        handleCheck(product.id);  
      }
    });
  };
  
  const handleCheckAll = (event) => {
    const isChecked = event.target.checked;
    products.forEach((product) => {
      if (product.checked !== isChecked) {
        handleCheck(product.id); 
      }
    });
  };
  
  
  
  

  const totalPrice = products ?  products.reduce(
    (total, product) =>
      total + (product.checked ? product.price * product.quantity : 0),
    0
  ) : 0;
  const shippingFee = 30000;

  const handleCheckout = () => {
    alert("Thanh toán thành công!");
  };
  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <h2 className={styles.title}>GIỎ HÀNG</h2>
        <p className={styles.nav}>
          <Link to="/">Home</Link> / Giỏ hàng
        </p>
      </section>

      {products.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <section className={styles.product}>
            <div className={styles.productInfo}>
              <div>
                <input
                  type="checkbox"
                  onChange={handleCheckAll}
                  checked={products.every((product) => product.checked)}
                  className={styles.selectAllCheckbox}
                />
              </div>
              <div>Sản phẩm </div>
              <div>Đơn giá</div>
              <div>Số lượng</div>
              <div>Số tiền</div>
              <div>Thao tác</div>
            </div>
            {(() => {
              const shopSet = new Set();
              return products.map((product) => {
                const isFirstProductOfShop = !shopSet.has(product.shopName);
                if (isFirstProductOfShop) {
                  shopSet.add(product.shopName);
                }
                return (
                  <ProductInfo
                    key={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    quantity={product.quantity}
                    checked={product.checked}
                    onCheck={() => handleCheck(product.id)}
                    onQuantityChange={(newQuantity) =>
                      handleQuantityChange(product.id, newQuantity)
                    }
                    onRemove={() => handleRemove(product.id)}
                    shopName={product.shopName}
                    category={product.category}
                    onShopCheck={handleShopCheck}
                    isShopChecked={products
                      .filter((item) => item.shopId === product.shopId)
                      .every((item) => item.checked)}
                    showShopInfo={isFirstProductOfShop}
                  />
                );
              });
            })()}
          </section>
          <section className={styles.coupon}>
            <div className={styles.voucherGroup}>
              <div className={styles.icon}>
                <span class="material-symbols-rounded">
                  confirmation_number
                </span>
              </div>
              <div className={styles.voucher}>GreenFood voucher</div>
            </div>
            <button className={styles.voucherButton} onClick={handleOpenModal}>
              Chọn hoặc nhập mã
            </button>
            <ModalBox
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              vouchers={mockVouchers}
            >
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  placeholder="Mã GreenFood Voucher"
                  className={styles.input}
                />
                <button className={styles.applyButton}>ÁP DỤNG</button>
              </div>
              <div className={styles.voucherList}>
                {mockVouchers.map((voucher) => (
                  <div key={voucher.id} className={styles.voucherItem}>
                    <div className={styles.voucherCode}>{voucher.code}</div>
                    <div className={styles.voucherDescription}>
                      {voucher.description}
                    </div>
                  </div>
                ))}
              </div>
            </ModalBox>
          </section>
          <CartSummary
            totalPrice={totalPrice}
            onCheckout={handleCheckout}
            shippingFee={shippingFee}
            products={products}
          />
        </>
      )}
    </div>
  );
}

export default Cart;
