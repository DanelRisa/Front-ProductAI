"use client";
import React from 'react'
import CustomButton from './CustomButton'
import Image from "next/image";
import Link from "next/link"


const ProductAI = () => {
    const handleScroll = () => {
    }
    return (
      <div className="productai">
        <div className="flex-1 pt-36 padding-x">
          <div className="flex">
            <div className="w-1/2">
              <h1 className="product__title">
                Откройте мир выгодных покупок - быстро и легко
              </h1>
              <p className="product__subtitle">
                Экономьте время и деньги, исследуя дешевые позиции с различных
                супермаркетов прямо у нас!
              </p>
  
              <Link href="./prompt">
                <CustomButton
                  title="Перейти к поиску"
                  containerStyles="px-4 py-1 mt-4 text-sm bg-orange-500 rounded-full text-white mt-10"
                  handleClick={handleScroll}
                />
              </Link>
            </div>
            <div className="w-1/2">
                <div className="product__image">
                  <Image
                    src="/product.jpg"
                    alt="product"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="object-contain"
                  />
                  <div className="product__image-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ProductAI