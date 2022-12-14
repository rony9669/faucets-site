import React, { useEffect, useState } from "react";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import Notice from "../Notice/Notice";
import TopNavbar from "../TopNavbar/TopNavbar";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [defaults, setDefaults] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setDefaults(data[3]);
      });
  }, []);

  return (
    <div>
      <TopNavbar
        products={products}
        defaults={defaults}
        setDefaults={setDefaults}
      />
      <Notice />
      <Content defaults={defaults} />
      <Footer />
    </div>
  );
};

export default Home;
