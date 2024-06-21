import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Basic from "../../fun";
import AppNavbar from "./Navbar";

import axios from "axios";
import SingleCard from "./SingleCard";
import { useCart } from "../context/AppContext";

function Home() {
  const navigate = useNavigate();

  const { productsLength } = useCart();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (!savedUser) return navigate("/login");

    async function getProducts() {
      await axios
        .get("http://localhost:4545/products")
        .then((res) => {
          setProducts(res.data);

          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    getProducts();
  }, []);

  return (
    <>
      <AppNavbar />
      <div className="container">
        <h1 className="text-center my-4">
          Aaiye aapka, intezar tha!!! 🙏 {productsLength}
        </h1>

        <div className="card flex-row">
          {products.map((val) => (
            <div>
              <SingleCard
                // key={val}
                title={val.title}
                imageUrl={val.imageUrl}
                price={val.price}
                info={val.info}
              />
            </div>
          ))}
        </div>

        <Basic />
      </div>
    </>
  );
}

export default Home;
