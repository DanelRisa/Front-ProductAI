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
        // console.log("Token:", accessToken);

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

  if (loading) return <Loading></Loading>

    return (
      <div className="mx-auto justify-between md:flex md:space-x-6 xl:px-12 pt-20 md:w-1/2 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cartItems.map((item, index) => (
            <ProductCard
            _id={item._id}
              key={index}
              title={item.title} 
              price={item.price} 
              image={item.image} 
              showButton={false}
              product_url={item.product_url}
              isCartPage={true}
            />
           
          ))}

        {/* /*<div className=" h-full rounded-lg border bg-white p-6 shadow-md md:w-1/3">
          {/* <div classname="mb-2 flex justify-between">
            <p classname="text-gray-700">Общая сумма</p>
            <p classname="text-gray-700">129.99</p>
          </div> *
          
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">134.98</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
          </div> */}
      </div> 
      </div>
    );
     }
    
export default CartPage;
