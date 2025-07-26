import './ProductCard.css';
import React, { useState } from 'react';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

const ProductCard = ({ product }) => {
  const [loved, setLoved] = useState(false);

  const handleLove = () => {
    setLoved((prevLoved) => !prevLoved);
  };

  return (
    <article className="product-card">
      <img
        src={product.image}
        alt={`Image of ${product.title}`}
        className="product-image"
      />

      <div className="product-details">
        <h4 className="product-name">{product.title}</h4>
        <p className="product-category">{product.category}</p>
        <p className="product-price">₹{product.price.toFixed(2)}</p>
      </div>

      <button
        onClick={handleLove}
        className="love-button"
        aria-label={loved ? 'Unlike this product' : 'Like this product'}
      >
        {loved ? <FcLike size={24} /> : <FcLikePlaceholder size={24} />}
      </button>
    </article>
  );
};

export default ProductCard;
