"use client";
import React from 'react'
import CustomButton from './CustomButton'
import Image from "next/image";
import Link from "next/link"


const ProductAI = () => {
    const handleScroll = () => {

    }
  return (
    <div className='productai'>
        <div className="flex-1 pt-36 padding-x">
            <h1 className='product__title'>
                Откройте мир выгодных покупок - быстро и легко
            </h1>
            <p className='product__subtitle'>
            Экономьте время и деньги, исследуя дешевые позиции с различных супермаркетов прямо у нас!
            </p>

            <Link href='/prompt'>
            <CustomButton
              title='Перейти к поиску'
              containerStyles='bg-primary-blue text-white rounded-full mt-10'
              handleClick={handleScroll}
            />
        </Link>
        </div>
        <div className='product__image-container'>
            <div className="product__image">
                <Image src = "/product.jpg " alt="product" fill className='object-contain'  />
                <div className="product__image-overlay">
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductAI