"use client";
import React from 'react';
import { motion } from 'framer-motion';
import CustomButton from './CustomButton';
import Image from 'next/image';
import Link from 'next/link';

const ProductAI = () => {
  const handleScroll = () => {};

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="productai">
      <div className="flex-1 pt-44 padding-x">
        <div className="flex flex-col sm:flex-row gap-5 relative z-0 max-w-[1440px] mx-auto">
          <motion.div
            className="w-full sm:w-1/2 pr-4"
            variants={animationVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="product__title text-4xl sm:text-5xl font-extrabold">
              Откройте мир выгодных покупок - быстро и легко
            </h1>
            <p className="product__subtitle text-xl sm:text-2xl text-black-100 font-light mt-5">
              Экономьте время и деньги, исследуя дешевые позиции с различных супермаркетов прямо у нас!
            </p>

            <Link href="./sign">
              <CustomButton
                title="Перейти к поиску"
                containerStyles="px-4 py-1 mt-4 text-sm bg-orange-500 rounded-full text-white mt-10"
                handleClick={handleScroll}
              />
            </Link>
          </motion.div>
          <motion.div
            className="w-full sm:w-1/2 relative"
            variants={animationVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="product__image">
              <Image
                src="/product2.jpg"
                alt="product"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="object-contain"
              />
              <div className="product__image-overlay"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductAI;
