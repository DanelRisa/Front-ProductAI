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
      <div className="flex-1 pt-36 padding-x">
        <div className="flex flex-col sm:flex-row gap-5 relative z-0 max-w-[1440px] mx-auto">
          <motion.div
            className="w-full sm:w-1/2 pr-4"
            variants={animationVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-2xl lg:text-5xl sm:text-4xl font-extrabold">
              Откройте мир выгодных покупок - быстро и легко
            </h1>
            <p className="text-xl sm:text-2xl text-black-100 font-light mt-5 mb-8">
              Экономьте время и деньги, исследуя дешевые позиции с различных супермаркетов прямо у нас!
            </p>

            <Link href="./sign">
              <CustomButton
                title="Перейти к поиску"
                containerStyles="text-white rounded-3xl bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-otage-600 shadow-lg shadow-orange-400/40 dark:shadow-lg dark:shadow-orange-500/50 text-center "
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
            <div className=" w-full object-contain">
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
