"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./ButtonPrimary";
import ButtonOutline from "./ButtonOutline.";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import Link from "next/link";
const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14">
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">

        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h1
              variants={scrollAnimation}
              className=" text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black-600 leading-relaxed w-9/12 sm:w-6/12  mx-auto">
             Обширная база данных с лучшими предложениями  от известных супермаркетов {" "}
            </motion.h1>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <motion.div className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap" variants={scrollAnimation}>
              <img
                src="/assets/Icon/arbuz.png"
                className="h-40 w-auto mt-2 lg:mt-2"
                alt=""
              />
              <img
                src="/assets/Icon/galmart.png"
                className="h-20 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/small.png"
                className="h-20 w-auto mt-2 lg:mt-0"
                alt=""
              />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="flex flex-col w-full mt-8">
          <ScrollAnimationWrapper className="relative w-full">
            <motion.div variants={scrollAnimation} custom={{duration: 3}}>
            <div className=" rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h1 className="text-2xl lg:text-4xl sm:text-3xl font-extrabold">
                    Зарегистрируйся сейчас <br /> Открой новые возможности!
                  </h1>
                  <p className="mt-4 text-medium lg:text-xl sm:text-medium">Присоединись к нам и окунись в мир увлекательных открытий!</p>
                </div>
                <Link href='/sign'>
                <ButtonOutline> Начни сейчас!</ButtonOutline>
                </Link>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
                ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
