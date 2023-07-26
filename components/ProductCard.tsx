  import React from "react";
  import { ProductCardProps } from "@/types";
  import axios from "axios";
  import Cross from "./Cross";

  const ProductCard = ({ _id, title, price, image, product_url, showButton, isCartPage}: ProductCardProps) => {
    const handleAddToCart = async () => {
      try {
        const accessToken = localStorage.getItem("token");
  
        const config = {
          headers: {
            "Authorization": `Bearer ${accessToken}`,
          },
        };
        // console.log("Token:", accessToken);
        // console.log("Item title:", title);
        // console.log("Item price:", price);
        // console.log("Item image:", image);
        // console.log("Item url:", product_url);
        // console.log("Item id: ", _id )

        const payload = {
          title: title, 
          price: price,
          image: image,
          product_url: product_url,
        };
        
        const response = await axios.post(
          "http://localhost:8000/cart/add_to_cart/",
          payload,
          config
        );
  
        console.log(response.data);
      } catch (error) { 
        console.error("Error adding item to cart:", error);
      }
    };

      const handleDeleteProduct = async () => {
        try {
          const accessToken = localStorage.getItem("token");
    
          const config = {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          };

          const response = await axios.delete(`http://localhost:8000/cart/delete_product/${_id}`, config);

          console.log("Product deleted successfully!");
        } catch (error) {
          console.error("Error deleting product:", error);
        }
      };
    
     
      return (
        <div className="product-card bg-base-200 p-6 rounded-3xl flex flex-col justify-center items-start text-black-100 bg-primary-blue-100 " >  
         <div className="flex justify-end w-full">
        {isCartPage && <Cross onClick={handleDeleteProduct}/>}
      </div>
          <figure >
            <img src={image} className="product-card__image w-full object-contain my-3" />
          </figure>
          <div className="product-productd__content w-full flex justify-between items-start gap-2">
            <h2 className="product-card__content-title text-2xl leading-7 font-bold capitalize">{title}</h2>
            <p className="product-card__price text-xl leading-6 font-extrabold">{price}</p>
          </div>
          {showButton && (
          <div className="card-actions justify-end mt-auto w-full">
            <button onClick={handleAddToCart} className="px-4 py-1 mt-4 text-sm bg-orange-500 rounded-full text-white">Добавить</button>
          </div>
               )}
            {product_url && (
        <div>
          <a href={product_url} target="_blank" rel="noopener noreferrer">
            View Product
          </a>
        </div>
      )}
      {!product_url && <p>Product URL not available</p>}
    </div>
      );
    };
    

  export default ProductCard;
