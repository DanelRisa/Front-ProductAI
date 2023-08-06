import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";



const Footer = () => (

  <footer className="pt-0 flex flex-col text-black-100 border-t border-gray-200">
    <div className="px-4 sm:px-2 bg-gray-100 pt-20 pb-14">
      <div className=" max-w-screen-xl w-full mx-auto flex justify-between">
        <div className="flex flex-col items-start ">
          <div className="flex justify-center items-center">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="logo"
                width={64}
                height={15}
                className="object-contain"
              />
            </Link>
            <span className="sm:inline hidden orange_gradient font-extrabold ml-2 text-xl">ProductAI</span>
          </div>
          <p className="text-gray-400  pt-2 lg:pt-4 sm:pt-2">©{new Date().getFullYear()} - ProductAI</p>
        </div>

        <div className="flex flex-row">
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              <Link href="/">Прайс</Link>
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              <Link href="/">Блог</Link>
            </li>
          </ul>
        </div>
        <div className=" flex flex-row">
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              <Link href="/">Политика </Link>
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              <Link href="/">Условия</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;