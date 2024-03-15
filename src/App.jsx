import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import SingleProduct from "./SingleProduct";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleCart = (p) => {
    console.log(p);
  };

  return (
    <>
      <div className="main-container">
        <div className="cards-container">
          {products.map((pd) => (
            <SingleProduct product={pd} handleCart={handleCart}></SingleProduct>
          ))}
        </div>
        <div className="cart-container">
          <h1>This is Cart</h1>
          <div className="cart-title">
            <h5>name</h5>
            <h5>Price</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
