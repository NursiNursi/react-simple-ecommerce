import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

function Product({ data }) {
  const { id, price, productImage, productName } = data;
  const { addToCart, cartItems } = useContext(ShopContext);
  return (
    <div className="product">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItems[id] > 0 && `(${cartItems[id]})`}
      </button>
    </div>
  );
}

export default Product;
