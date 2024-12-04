import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Footer from "./components/Footer/Footer";
import LogInForm from "./pages/login/LogInForm";
import SignUpForm from "./pages/signup/SignUpForm";
import Cart from "./pages/cart/Cart";
import AddProduct from "./pages/addProduct/AddProduct";
import SellerChannel from "./pages/seller/SellerChannel";
import { ProductProvider } from "./contexts/ProductContext";
import Statusbar from "./components/Statusbar/Statusbar";
import AboutNavbar from "./components/AboutNavbar/AboutNavbar";
import AboutWhy from "./components/AboutWhy/AboutWhy";
import AboutFooter from "./components/AboutFooter/AboutFooter";
import Aboutus from "./components/Aboutus/Aboutus";
import AboutIntro from "./components/AboutIntro/AboutIntro";
import AboutCareer from "./components/AboutCareer/AboutCareer";
import AboutEvent from "./components/AboutEvent/AboutEvent";
import Payment from "./components/Payment/Payment";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Outlet,
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const AppLayout = () => {
  const location = useLocation();
  const isAboutPage = location.pathname.startsWith("/about");

  return (
    <>
      {isAboutPage ? <AboutNavbar /> : <Navbar />}
      <main>
        <Outlet />
      </main>
      {isAboutPage ? <AboutFooter /> : <Footer />}
    </>
  );
};

function App() {
  return (
    <ProductProvider>
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/status" element={<Statusbar />} />
            <Route path="/all" element={<Statusbar />} />
            <Route path="/waitpay" element={<Statusbar />} />
            <Route path="/transfer" element={<Statusbar />} />
            <Route path="/waitdelivery" element={<Statusbar />} />
            <Route path="/completed" element={<Statusbar />} />
            <Route path="/canceled" element={<Statusbar />} />
            <Route path="/return-refund" element={<Statusbar />} />
            <Route path="/payment/:id" element={<Payment />} />

            <Route path="/about/intro" element={<AboutIntro />} />
            <Route path="/about/why-greenfood" element={<AboutWhy />} />
            <Route path="/about/career" element={<AboutCareer />} />
            <Route path="/about/event" element={<AboutEvent />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="/login" element={<LogInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route
            path="/seller"
            element={
              <ProtectedRoute>
                <SellerChannel />
              </ProtectedRoute>
            }
          />
          <Route
            path="/seller/add-product"
            element={
              <ProtectedRoute>
                <AddProduct />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;
