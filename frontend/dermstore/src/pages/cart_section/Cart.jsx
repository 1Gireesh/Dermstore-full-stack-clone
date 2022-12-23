import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarts } from "../../redux/Cart/cart.action";
import "../../css/Cart/Cart.css";
import CartItem from "./CartItem";

export function Cart() {
  const dispatch = useDispatch();
  const { cartItems, price } = useSelector((store) => store.cart);

  React.useEffect(() => {
    dispatch(getCarts(localStorage.getItem("token")));
  }, []);

  return (
    <div className="cart">

      <h2>Total items {cartItems.length} Total price ${price.toFixed(2)}</h2>
      <div className="cartItems">
        <div className="thead">
          <span className="td">Items</span>
          <span>delete</span>
          <span className="price">price</span>
          <span>quantity</span>
          <span>subtoatal</span>
        </div>
        <div className="cartItems">
          {cartItems && cartItems.map((e, i) => <CartItem key={i} cart={e}></CartItem>)}
        </div>

      </div>
    </div>
  );
}
