/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/InputField/InputField";
import SocialLogIn from "../../components/SocialLogIn/SocialLogIn";
import styles from "./LogInForm.module.css";
import loginPic from "../../assets/images/login_pic.png";
import { login } from '../../apis/postAPIs';

function LogInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({
        email: username,
        password: password
      })

      console.log(response);
      

      if (response.status === true) {
        sessionStorage.setItem("isLoggedIn", response.token);
        if (response.role === 'BUYER') {
          navigate("/");
        } else if (response.role === 'SELLER') {
          navigate("/seller");
        }
      } else {
        setError(response.message || "Đăng nhập thất bại");
      }
    } catch (err) {
      setError("Đã có lỗi xảy ra. Vui lòng thử lại.");
      console.error(err);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>GreenFood</h1>
        <h2 className={styles.title}>Đăng nhập</h2>
        <p className={styles.subTitle}>Truy cập vào tài khoản của bạn</p>

        {error && <p className={styles.error}>{error}</p>}

        <form onSubmit={handleLogin}>
          <InputField
            type="email"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="#" className={styles.forgot}>
            Quên mật khẩu?
          </a>

          <button type="submit" className={styles.button}>
            ĐĂNG NHẬP
          </button>

          <p className={styles.separator}>
            <span>HOẶC</span>
          </p>
          <SocialLogIn />
        </form>

        <p className={styles.signup}>
          Chưa có tài khoản? 
          <Link to="/signup" className={styles.link}>Đăng ký ngay</Link>
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={loginPic} alt="Login pic" className={styles.image} />
      </div>
    </div>
  );
}

export default LogInForm;
