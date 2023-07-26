"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '@/components/Sidebar';
import ProductCard from '@/components/ProductCard';
import Loading from '@/components/Loading';

const CategoryPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState([]); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const name = urlSearchParams.get('name');
        let body = new Object();
        body.name = name;
        console.log(JSON.stringify(body));
        const response = await axios.post('http://localhost:8000/posts/ingredients/', body);
        console.log(response.data)
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = async (productName) => {
    try {
      const response = await axios.post('http://localhost:8000/posts/products/find', {
        product_name: productName,
      });
      // console.log(response.data)
      setSelectedProduct(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
      setSelectedProduct([]);
    }
  };

  if (loading) return <Loading></Loading>

  return (
    <div className="category-page-container">
    <div className="flex">
    <div className="w-1/6">
      <Sidebar products={products} onProductClick={handleProductClick} />
    </div>
    <div className="w-3/4 mt-40">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {selectedProduct.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            image={product.image_url}
            product_url={product.product_url}
            _id={product._id}
            showButton={true}
          />
        ))}
      </div>
    </div>
  </div>
  </div>  
  );
};

export default CategoryPage;
