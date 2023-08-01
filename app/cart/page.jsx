"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "@/components/ProductCard";
import Loading from '@/components/Loading';
import Cross from "@/components/Cross";


const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const accessToken = localStorage.getItem("token");
  
        const config = {
          headers: {
            "Authorization": `Bearer ${accessToken}`,
          },
        };
        console.log("Token:", accessToken);

        const response = await axios.get(
          "http://localhost:8000/cart/get_cart/",
          config
          );
        console.log(response.data);
        setCartItems(response.data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
        setCartItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);
    // Function to handle the deletion of a product
    const handleDeleteProduct = async (productId) => {
      try {
        const accessToken = localStorage.getItem("token");
  
        const config = {
          headers: {
            "Authorization": `Bearer ${accessToken}`,
          },
        };
  
        // Make the API call to delete the product
        await axios.delete(`http://localhost:8000/cart/delete_product/${productId}`, config);
  
        // Remove the product from the state
        setCartItems((prevCartItems) => prevCartItems.filter(item => item._id !== productId));
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    };

  console.log("Cart Items:", cartItems);
  if (loading) return <Loading></Loading>

  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price.replace(/[^\d.]/g, "")), 0).toFixed(2);


    return (
<div className="flex flex-wrap justify-center mb-40">
  <div className="w-full md:w-1/2  px-6 md:px-12 pt-20">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cartItems.map((item, index) => (
        <ProductCard
          key={index}
          _id={item._id}
          title={item.title}
          price={item.price}
          image={item.image}
          showButton={false}
          product_url={item.product_url}
          isCartPage={true}
          onDelete={handleDeleteProduct} // Pass the delete function to the ProductCard component
        />
      ))}
    </div>
  </div>
  <div className="w-full md:w-1/4 px-6 md:px-12 pt-20">
    <div className="rounded-lg border bg-white p-6 shadow-md">
      <div className="mb-2 flex justify-between">
        <p className="text-gray-700">Общая сумма</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <div className="">
          <p className="mb-1 text-lg font-bold">{totalPrice}₸</p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};
    
export default CartPage;
