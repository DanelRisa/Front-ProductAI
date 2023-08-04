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
    onDelete:any,
}

export interface SidebarProps{
    products: string[];
    onProductClick: any;
    isSidebarOpen: boolean;
    setIsSidebarOpen: any;
    prompt:any
}
