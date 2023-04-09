import React from "react";
import { useLoaderData } from "react-router-dom";
import CartItem from "./Cards/CartItem";

const Cart = () => {
  const { initialCart } = useLoaderData();
  let total = 0;
  if (initialCart.length > 0) {
    for (const product of initialCart) {
      total = total + product.price * product.quantity;
    }
  }

  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10">
        <h2 className="text-xl font-semibold">
          {initialCart.length ? "Review Cart Items" : "Cart Is Empty"}
        </h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          {initialCart.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total Amount : <span className="font-semibold">{total}$</span>
          </p>
          <p className="text-sm text-gray-400">
            Shipping cost and Tax not included
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
