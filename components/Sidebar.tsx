"use client";
import React from 'react';
import { List, ListItem } from "@material-tailwind/react";
import { SidebarProps } from '@/types';

const Sidebar = ({ products, onProductClick }: SidebarProps) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-60 bg-zinc-100 p-4 drop-shadow-2xl rounded-r-lg">
      <div className="mb-6 p-2">
      </div>
      <List>
        {products.map((product, index) => (
          <ListItem key={index} onClick={() => onProductClick(product)}>
            <p className="pt-2 font-semibold text-black text-lg">{product}</p>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;

