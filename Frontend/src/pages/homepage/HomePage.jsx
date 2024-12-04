import React, { useState } from "react";
import Menu from "../../components/Menu/Menu";
import Location from "../../components/Location/Location";
import BestSelling from "../../components/BestSeller/BestSeller";
import FeaturedProducts from "../../components/FeaturedProduct/FeaturedProduct";
import { useProducts } from "../../contexts/ProductContext";

const HomePage = () => {
  const [setSelectedProduct] = useState(null);

  const { products } = useProducts();

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
  return (
    <div>
      <Menu />
      <Location />
      <BestSelling products={products} onProductClick={handleProductClick} />
      <FeaturedProducts
        products={products}
        onProductClick={handleProductClick}
      />
    </div>
  );
};

export default HomePage;
