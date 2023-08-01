"use client";
import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { FiCheckCircle } from "react-icons/fi";

const features = [
  "Поиск дешевых продуктов.",
  "Экономия времени.",
  "Быстрый рецепты.",
  "Удобство интерфейса."
]

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto pt-20 "
      id="feature">
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full " variants={scrollAnimation}>
            <div className="product__image">
            <Image
              src="/assets/Illustration2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
                objectFit="cover"
                  objectPosition="center"
                  className="object-contain"
            />
            <div className="product__image-overlay"></div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>

        <motion.div className="flex flex-col pt-24 items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <h1 className="product__title flex  leading-relaxed text-4xl sm:text-5xl font-extrabold">
          Много удобных возможностей
          </h1>
          {/* <p className="product__subtitle text-xl sm:text-2xl text-black-100 font-light mt-5">
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </p> */}
          <ul className="product__subtitle text-xl sm:text-2xl text-black-100 font-light mt-8 text-black-500 self-start list-inside ml-10">
            {features.map((feature, index) => (
              <motion.li
                className="relative circle-check custom-list"
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
                key={feature}
                whileHover={{
                scale : 1.1,
                transition: {
                  duration: .2
                }
                }}>
                  {feature}
              </motion.li>
              )
            )}
          </ul>
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
