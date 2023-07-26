import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>; 
    btnType?: "button" | "submit";
}


export interface ProductCardProps{
    _id: string;
    title:string
    price:string
    image:string
    product_url:string
    onAddToCart:any
    showButton:any
    isCartPage:boolean
}

export interface SidebarProps{
    products: string[];
    onProductClick: any;
}
