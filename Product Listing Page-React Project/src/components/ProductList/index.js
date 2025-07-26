import React from 'react';
import ProductCard from '../ProductCard';
import './ProductList.css';

const ProductList = ({ products, isLoggedIn }) => {
  return (
    <div className="products-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} isLoggedIn={isLoggedIn} />
      ))}
    </div>
  );
};

export default ProductList;
