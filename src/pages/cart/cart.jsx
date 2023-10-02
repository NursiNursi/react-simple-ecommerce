import { PRODUCTS } from "../../products";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] > 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shoping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <>
          <h1>Your cart is empty</h1>
          <div className="checkout" style={{ margin: "auto" }}>
            <button onClick={() => navigate("/")}>Continue Shoping</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
