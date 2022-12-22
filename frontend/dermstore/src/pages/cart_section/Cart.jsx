import React from "react";
import CartItem from "../../Components/cart_components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { getCarts } from "../../redux/Cart/cart.action";
import "../../css/Cart/Cart.css";

export function Cart() {
  const dispatch = useDispatch();
  const { cartItems, price } = useSelector((store) => store.cart);

  React.useEffect(() => {
    dispatch(getCarts("g"));
  }, []);

  return (
    <div className="cart">


      <div className="cartItems">
        <div className="thead">
          <span className="td">Items</span>
          <span className="price">price</span>
          <span>quantity</span>
          <span>subtoatal</span>
        </div>

        {cartItems && cartItems.map((e, i) => <CartItem product={e}></CartItem>)}

      </div>
    </div>
  );
}
