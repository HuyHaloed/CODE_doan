import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Payment.scss";
import styles from "./Payment.module.css";
import { useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { useProducts } from "../../contexts/ProductContext";
import { getUserData } from '../../apis/getAPIs';

const Payment = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const { products } = useProducts();
  const product = products.find((prod) => prod.id.toString() === id);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewAddressFormOpen, setIsNewAddressFormOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newAddressDetail, setNewAddressDetail] = useState("");
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedProvinceName, setSelectedProvinceName] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedDistrictName, setSelectedDistrictName] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [selectedWardName, setSelectedWardName] = useState("");
  const [isDefault, setIsDefault] = useState(false);
  const [editingAddressIndex, setEditingAddressIndex] = useState(null);
  const [selectedFullAddress, setSelectedFullAddress] = useState(null);

  const host = "https://provinces.open-api.vn/api/";

  useEffect(() => {
    axios.get(host + "?depth=1").then((response) => {
      setProvinces(response.data);
    });
  }, []);

  useEffect(() => {
    const defaultAddress = addresses.find((address) => address.isDefault);
    if (defaultAddress) {
      setSelectedAddress(defaultAddress);
    }
  }, [addresses]);

  const handleProvinceChange = async (e) => {
    const provinceCode = e.target.value;
    if (!provinceCode) {
      setSelectedProvince("");
      setSelectedProvinceName("");
      setDistricts([]);
      setSelectedDistrict("");
      setSelectedDistrictName("");
      setWards([]);
      setSelectedWard("");
      setSelectedWardName("");
      return;
    }

    try {
      const response = await axios.get(`${host}p/${provinceCode}?depth=2`);
      const selectedProv = provinces.find(
        (p) => p.code === parseInt(provinceCode)
      );

      setSelectedProvince(provinceCode);
      setSelectedProvinceName(selectedProv ? selectedProv.name : "");
      setDistricts(response.data.districts);

      // Reset district and ward
      setSelectedDistrict("");
      setSelectedDistrictName("");
      setWards([]);
      setSelectedWard("");
      setSelectedWardName("");
    } catch (error) {
      console.error("Error fetching districts:", error);
    }
  };

  const handleDistrictChange = async (e) => {
    const districtCode = e.target.value;
    if (!districtCode) {
      setSelectedDistrict("");
      setSelectedDistrictName("");
      setWards([]);
      setSelectedWard("");
      setSelectedWardName("");
      return;
    }

    try {
      const response = await axios.get(`${host}d/${districtCode}?depth=2`);
      const selectedDist = districts.find(
        (d) => d.code === parseInt(districtCode)
      );

      setSelectedDistrict(districtCode);
      setSelectedDistrictName(selectedDist ? selectedDist.name : "");
      setWards(response.data.wards);

      // Reset ward
      setSelectedWard("");
      setSelectedWardName("");
    } catch (error) {
      console.error("Error fetching wards:", error);
    }
  };

  const handleWardChange = (e) => {
    const wardCode = e.target.value;
    if (!wardCode) {
      setSelectedWard("");
      setSelectedWardName("");
      return;
    }

    const selectedW = wards.find((w) => w.code === parseInt(wardCode));
    setSelectedWard(wardCode);
    setSelectedWardName(selectedW ? selectedW.name : "");
  };

  const handleSaveAddress = () => {
    let errorMessage = "";

    if (!newName) {
      errorMessage += "Vui lòng nhập họ tên.\n";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!newPhone || !phoneRegex.test(newPhone)) {
      errorMessage += "Vui lòng nhập số điện thoại hợp lệ (10 chữ số).\n";
    }

    if (!newAddressDetail) {
      errorMessage += "Vui lòng nhập địa chỉ chi tiết.\n";
    }

    if (errorMessage) {
      alert(errorMessage);
      return;
    }

    const fullAddress = {
      name: newName,
      phone: newPhone,
      address: `${selectedWardName}, ${selectedDistrictName}, ${selectedProvinceName}`,
      addressDetail: newAddressDetail,
      isDefault: isDefault,
      provinceCode: selectedProvince,
      districtCode: selectedDistrict,
      wardCode: selectedWard,
      provinceName: selectedProvinceName,
      districtName: selectedDistrictName,
      wardName: selectedWardName,
    };

    let updatedAddresses = [...addresses];

    if (isDefault) {
      updatedAddresses = updatedAddresses.map((address) => ({
        ...address,
        isDefault: false,
      }));
    }

    if (editingAddressIndex !== null) {
      updatedAddresses[editingAddressIndex] = fullAddress;
    } else {
      updatedAddresses.push(fullAddress);
    }

    setAddresses(updatedAddresses);
    setSelectedFullAddress(fullAddress);
    if (isDefault) {
      setSelectedAddress(fullAddress);
    }

    // Reset form
    resetForm();
    setIsNewAddressFormOpen(false);
  };

  const resetForm = () => {
    setNewName("");
    setNewPhone("");
    setNewAddressDetail("");
    setSelectedProvince("");
    setSelectedProvinceName("");
    setSelectedDistrict("");
    setSelectedDistrictName("");
    setSelectedWard("");
    setSelectedWardName("");
    setIsDefault(false);
    setEditingAddressIndex(null);
  };

  const handleOpenNewAddressForm = (index = null) => {
    if (index !== null) {
      const address = addresses[index];
      setNewName(address.name);
      setNewPhone(address.phone);
      setNewAddressDetail(address.addressDetail);
      setSelectedProvince(address.provinceCode);
      setSelectedProvinceName(address.provinceName);
      setSelectedDistrict(address.districtCode);
      setSelectedDistrictName(address.districtName);
      setSelectedWard(address.wardCode);
      setSelectedWardName(address.wardName);
      setIsDefault(address.isDefault);
      setEditingAddressIndex(index);

      // Fetch districts and wards for editing
      axios
        .get(`${host}p/${address.provinceCode}?depth=2`)
        .then((response) => {
          setDistricts(response.data.districts);
          return axios.get(`${host}d/${address.districtCode}?depth=2`);
        })
        .then((response) => {
          setWards(response.data.wards);
        })
        .catch((error) => {
          console.error("Error fetching address data:", error);
        });
    } else {
      resetForm();
    }
    setIsNewAddressFormOpen(true);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUserData();
        setUser(data);
        console.log(data);
        
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [])
  if (!user) {
    return (
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  return (
    <>
      <h2>Thanh toán</h2>
      <div className="payment-pro">
        <div className="cus-in4">
          <label>
            <FaLocationDot size={24} /> Địa chỉ nhận hàng
          </label>
          <div className="cus-in4-detail">
            {selectedAddress ? (
              <>
                <span className="np">
                  {selectedAddress.name} | {selectedAddress.phone}
                </span>
                <span>
                  Địa chỉ: {selectedAddress.addressDetail},{" "}
                  {selectedAddress.address}
                </span>
              </>
            ) : (
              <span>Chưa chọn địa chỉ mặc định</span>
            )}
            <button onClick={() => setIsModalOpen(true)}>Thay đổi</button>
          </div>
        </div>

        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <h3>Địa chỉ của tôi</h3>
              <div className="address-list">
                {addresses.map((address, index) => (
                  <div key={index} className="address-item">
                    <div className="address-item1">
                      <div className="address-info">
                        <input
                          type="radio"
                          id={`address-${index}`}
                          name="address"
                          checked={selectedFullAddress === address}
                          onChange={() => setSelectedFullAddress(address)}
                        />
                        <div>
                          {address.name} | {address.phone}
                        </div>
                      </div>
                      <button
                        className="change"
                        onClick={() => handleOpenNewAddressForm(index)}
                      >
                        Cập nhật
                      </button>
                    </div>
                    <div className="address-item2">
                      <div>{address.addressDetail}</div>
                      <div>{address.address}</div>
                      {address.isDefault && (
                        <div className="default-badge">Mặc định</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="modal-button">
                <button onClick={() => handleOpenNewAddressForm()}>
                  Thêm địa chỉ mới
                </button>
                <button onClick={() => setIsModalOpen(false)}>Thoát</button>
              </div>
            </div>
          </div>
        )}

        {isNewAddressFormOpen && (
          <div className="modal">
            <div className="modal-content">
              <h3>
                {editingAddressIndex !== null
                  ? "Cập nhật địa chỉ"
                  : "Thêm địa chỉ mới"}
              </h3>
              <div className="name-phone">
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Nhập họ tên"
                />
                <input
                  type="text"
                  value={newPhone}
                  onChange={(e) => setNewPhone(e.target.value)}
                  placeholder="Nhập số điện thoại"
                />
              </div>
              <div className="new-loca">
                <select
                  value={selectedProvince}
                  onChange={handleProvinceChange}
                >
                  <option value="">Chọn tỉnh</option>
                  {provinces.map((province) => (
                    <option key={province.code} value={province.code}>
                      {province.name}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedDistrict}
                  onChange={handleDistrictChange}
                  disabled={!selectedProvince}
                >
                  <option value="">Chọn huyện</option>
                  {districts.map((district) => (
                    <option key={district.code} value={district.code}>
                      {district.name}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedWard}
                  onChange={handleWardChange}
                  disabled={!selectedDistrict}
                >
                  <option value="">Chọn xã</option>
                  {wards.map((ward) => (
                    <option key={ward.code} value={ward.code}>
                      {ward.name}
                    </option>
                  ))}
                </select>
              </div>

              <input
                type="text"
                className="address-detail"
                value={newAddressDetail}
                onChange={(e) => setNewAddressDetail(e.target.value)}
                placeholder="Nhập địa chỉ chi tiết"
              />

              <div className="set-loca-default">
                <input
                  type="checkbox"
                  id="default"
                  checked={isDefault}
                  onChange={(e) => setIsDefault(e.target.checked)}
                />
                <label htmlFor="default">Đặt làm địa chỉ mặc định</label>
              </div>

              <div className="modal-button">
                <button onClick={handleSaveAddress}>
                  {editingAddressIndex !== null ? "Cập nhật" : "Lưu"}
                </button>
                <button
                  onClick={() => {
                    resetForm();
                    setIsNewAddressFormOpen(false);
                  }}
                >
                  Hủy
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Product Section */}
      {product && (
        <section className={styles.product}>
          <div className={styles.productInfo}>
            <div className="pay-bar">Sản phẩm</div>
            <div>Đơn giá</div>
            <div>Số lượng</div>
            <div>Số tiền</div>
          </div>
          <div className={styles.productInfo}>
            <div className={styles.productName}>
              <img
                src={product.image}
                alt={`Hình ảnh ${product.name}`}
                className={styles.productImage}
              />
              <span>{product.name}</span>
            </div>
            <div className={styles.productPrice}>{product.price} VNĐ</div>
            <div className={styles.productQuantity}>
              <span>1</span>
            </div>
            <div className={styles.productTotal}>{product.price * 1} VNĐ</div>
          </div>
        </section>
      )}
      {/* Payment Method Section */}
      <section className={styles.productInfo}>
        <p className="method">Hình thức thanh toán</p>
        <div className="paycod">
          <input
            type="radio"
            id="cod"
            name="paymentMethod"
            value="cod"
            checked={selectedPaymentMethod === "cod"}
            onChange={() => setSelectedPaymentMethod("cod")}
          />
          <label htmlFor="cod">Thanh toán khi nhận hàng (COD)</label>
        </div>
      </section>
      <div className="payment-method">
        {selectedPaymentMethod === "cod" && (
          <div className="tab-cod">
            <p>Thanh toán khi nhận hàng (COD), phí thu hộ 0.</p>
          </div>
        )}
      </div>

      <div className="bill">
        <h3>Thông tin đơn hàng</h3>
        <div className="bill-info">
          <div>
            <span>Tổng tiền hàng : </span>
            <span>{product.price} VNĐ</span>
          </div>
          <div>
            <span>Phí vận chuyển : </span>
            <span>{37000} VNĐ</span>
          </div>

          <div>
            <span>Tổng cộng Voucher giảm giá : </span>
            <span>{17000} VNĐ</span>
          </div>
          <div>
            <span>Tổng cộng : </span>
            <span>{product.price + 37000 - 17000} VNĐ</span>
          </div>
          <button>Mua hàng</button>
        </div>
      </div>
    </>
  );
};

export default Payment;
