import React from "react";
import { getStoredCart } from "../utils/fakeDB";

const Cart = () => {
  const cart = getStoredCart();
  console.log(cart);
  return <div></div>;
};

export default Cart;
