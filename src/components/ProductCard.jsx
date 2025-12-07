// ProductCard.jsx  ←  FINAL WORKING VERSION
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  // If product is missing → show skeleton (no crash)
  if (!product) {
    return (
      <div className="animate-pulse">
        <div className="aspect-[3/4] bg-gray-200 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded mx-auto w-24"></div>
      </div>
    );
  }

  // THIS IS THE FIX — Vite gives you an object { default: "url" }
  const imageSrc = typeof product.image === "object" && product.image !== null
    ? product.image.default || product.image
    : product.image || "https://via.placeholder.com/600x800/f8f8f8/999?text=No+Image";

  const title = product.title || "No title";
  const price = Number(product.price) || 0;
  const id = product.id || 1;

  return (
    <Link
      to={`/product/${id}`}
      className="group block cursor-pointer transition-all duration-300 hover:-translate-y-2"
    >
      <div className="relative overflow-hidden aspect-[3/4] w-full shadow-sm mb-1 bg-gray-50">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 "
          loading="lazy"
        />
      </div>

      <div className="text-center px-2 pb-1">
        <h3
          className="font-bold text-sm leading-tight line-clamp-2"
          style={{ fontFamily: "Nunito, sans-serif" }}
          title={title}
        >
          {title}
        </h3>
        <p className="text-gray-800 font-semibold text-sm mt-1" style={{ fontFamily: "Nunito, sans-serif" }}>
          ${price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;