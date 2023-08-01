"use client";
import React, { useState } from 'react';
import { List, ListItem } from "@material-tailwind/react";
import { SidebarProps } from '@/types';
import MenuIcon from './MenuIcon';

const Sidebar = ({ products, onProductClick, isSidebarOpen, setIsSidebarOpen }: SidebarProps) => {


  const toggleSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>

      <div className="">
        {/* <MenuIcon onClick={toggleSidebar}/> */}
        
        <div className={`fixed lg:relative lg:sticky top-0 left-0 h-screen bg-white p-4 shadow-[5px_0_15px_0_rgba(0,0,0,0.1)] z-40 w-full lg:w-[14vw] lg:max-w-[14vw] rounded-r-lg lg:block  ${isSidebarOpen ? 'block' : 'hidden'}`}>
          <button onClick={toggleSidebar} className='lg:hidden'>
            <MenuIcon/>
          </button>
          <div className="mb-6 p-2">
            <List>
              {products.map((product, index) => (
                <ListItem key={index} onClick={() => onProductClick(product)}>
                  <p className="pt-2 font-semibold text-black text-lg  whitespace-normal sm:whitespace-nowrap">{product}</p>
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </div>
    </>

  );
};

export default Sidebar;

