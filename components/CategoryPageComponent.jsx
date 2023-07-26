// "use client";
import React from 'react';

const CategoryPageComponent = ({ products }) => {

  return (
    <div className="flex">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold mb-4">Products</h1>
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
      </div>
    </div>
  );
};

export default CategoryPageComponent;
