import { PRODUCTS } from "../../products";
import Product from "./product";
import "./shop.css";

function Shop() {
  console.log(PRODUCTS);
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Tech Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
