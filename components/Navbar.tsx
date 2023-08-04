"use client";

import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";
import CartIcon from "./CartIcon";
import { useEffect, useState } from "react";
import axios from "axios";
import ButtonOutline from "./ButtonOutline."

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  const [cartItemsCount, setCartItemsCount] = useState(0);
  const fetchCartItemsCount = async () => {
     try {
      const accessToken = localStorage.getItem("token");
      if (accessToken) {
        setLoggedIn(true); 
      }
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const response = await axios.get("https://fastapi-z5dp.onrender.com/cart/get_cart/", config);
      setCartItemsCount(response.data.length);
    } catch (error) {
      console.error("Error fetching cart items:", error);
      setCartItemsCount(0);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    setLoggedIn(false); 
  };

  useEffect(() => {
    fetchCartItemsCount();
    const intervalId = setInterval(fetchCartItemsCount, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <header className={
      " top-0 w-ful z-10 z-30 bg-white-500 transition-all "
    }>
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-6 px-4 py-4 bg-transparent">

        <div className="flex justify-center items-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={64}
              height={15}
              className="object-contain"
            />
          </Link>
          <span className="sm:inline hidden orange_gradient font-extrabold ml-2 text-xl">ProductAI</span>
        </div>
        <div className="flex items-center">
        {loggedIn ? ( 
            <button
              className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all pr-2"
              onClick={handleLogout}
            >
              <ButtonOutline>
                Выйти
              </ButtonOutline>
            </button>
          ) : (
          <Link href='/login'>
            <div className="col-start-10 col-end-12 font-medium flex justify-end items-center pr-8">
              <Link href="/sign">
              <p className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
                  Регистрация
                </p>
              </Link>
              <ButtonOutline>Вход</ButtonOutline>
            </div>
          </Link>
            )}
          <div className='ml-12 sm:ml-4'>
            <CartIcon cartItemsCount={cartItemsCount} />
          </div>
        </div>

      </nav>
    </header>
  );
};



export default NavBar;