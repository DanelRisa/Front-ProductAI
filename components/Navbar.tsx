"use client";

import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";
import CartIcon from "./CartIcon";
import { useEffect, useState } from "react";
import axios from "axios";

const NavBar = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        // Fetch cart items from the server using axios or any other method
        // Set the cart items to the state
        // For example:
        const response = await axios.get("http://localhost:8000/cart/get_cart/");
        setCartItems(response.data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
        setCartItems([]);
      }
    };

    fetchCartItems();
  }, []);
  console.log("Cart items count:", cartItems.length); // Add this line to check the cart items count
  return (
  <header className='w-full absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <div className='flex justify-center items-center '>
        <Link href='/'>
            <Image
              src='/logo.svg'
              alt='logo'
              width={64}
              height={15}
              className='object-contain'
            />
        </Link>
        <span className='orange_gradient font-extrabold ml-2 text-xl '>ProductAI</span>
      </div>
      <div className="flex items-center ">
      <Link href='/sign'>
      <CustomButton
        title='Вход'
        btnType='button'
        containerStyles='px-4 py-1 mt-4 text-sm bg-orange-500 rounded-full text-white'
      />
      </Link>
      <div className='ml-12'>
      <CartIcon cartItemsCount={cartItems.length} />
      </div>
      </div>

    </nav>
  </header>
);
  };



export default NavBar;