import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi"

export interface CartIconProps{
    cartItemsCount:number
}

const CartIcon = ({cartItemsCount}:CartIconProps) => (
  <div className=' container mx-auto text-[24px] flex place-content-end '>
    <div className='relative cursor-pointer'>
      <Link className="" href="/cart">
        <div>
          <FiShoppingCart size={32}/>
          <span className='absolute -top-2 -right-2 text-[13px] bg-red-600 h-[18px] w-[18px] rounded-full grid place-items-center text-white'>
          {cartItemsCount}
          </span>
        </div>
      </Link>
    </div>
  </div>
);

export default CartIcon;
