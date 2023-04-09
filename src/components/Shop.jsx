import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./Cards/ProductCard";
import { addToDB } from "../utils/fakeDB";

const Shop = () => {
  const productData = useLoaderData();

  //   Button add to cart
  const handleAddToCart = (id) => {
    addToDB(id);
  };

  return (
    <div className="product-container">
      {productData.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default Shop;
