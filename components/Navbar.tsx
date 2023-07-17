 import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className='w-full absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <div className='flex justify-center items-center'>
        <Link href='/'>
            <Image
              src='/logo.svg'
              alt='logo'
              width={45}
              height={10}
              className='object-contain'
            />
        </Link>
        <span className='orange_gradient'>ProductAI</span>
      </div>
      <CustomButton
        title='Вход'
        btnType='button'
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
      />
    </nav>
  </header>
);



export default NavBar;