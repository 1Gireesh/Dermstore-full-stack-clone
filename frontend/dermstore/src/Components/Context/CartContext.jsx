import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartValue, setCartValue] = useState(0);
  const [cartPrices, setCartPrices] = useState([])


  //apply discount
  const applyDiscount = () => {
    if(cartValue != 0) {
      setCartValue((prev) => {
        return prev - Number((50 * (prev / 100)).toFixed(2))
      })
    }
  }
  return (
    <CartContext.Provider value={{cartPrices, setCartValue, setCartPrices, cartValue, applyDiscount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
