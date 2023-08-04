import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";



const Footer = () => (

  <footer className="flex flex-col text-black-100 border-t border-gray-200">
  <div className="bg-gray-100 pt-20 pb-14">
    <div className="max-w-screen-xl w-full mx-auto  flex justify-between">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
        <Image src='/logo.svg' alt='logo' width={100} height={100} className='object-contain' />
        <p className='text-base text-gray-700'>
          <span className="orange_gradient">ProductAI 2023 <br /></span>
          Все права защищены &copy;
        </p>
          <p className="text-gray-400">©{new Date().getFullYear()} - ProductAI</p>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Продукт</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              <Link href="/">Прайс</Link>
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              <Link href="/">Блог</Link>
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Обратиться</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              <Link href="/">Политика конфиденциальности</Link>
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              <Link href="/">Условия использования</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;