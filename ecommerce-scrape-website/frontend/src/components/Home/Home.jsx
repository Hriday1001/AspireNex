import { useState } from "react";
import Searchbar from "../Searchbar/Searchbar";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import "./index.scss";
import Loader from "react-loaders";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="page-content">
          <p className=" introduction-text">Demo introduction text</p>

          <h1>TAGLINE TO BE INSERTED</h1>

          <p className="description">DESCRIPTIVE TEXT</p>

          <div className="carousel">
            <ProductCarousel />
          </div>

          <div className="searchbar">
            <Searchbar />
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Home;
