import headImg from "../assets/head.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="p-4 bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between gap-10">
        <div className="w-1/3">
          <h1 className="text-5xl font-extrabold uppercase">Sleeping Pills</h1>
        </div>
        <div className="w-1/3 flex justify-center">
          <img src={headImg} alt="headImg" className="w-auto h-auto" />
        </div>
        <div className="w-1/3 flex items-center justify-end gap-4">
          <button className="py-3 px-4 bg-black text-base font-semibold text-white border-2 border-black hover:bg-white hover:text-black">
            (0) My Cart
          </button>
          <button className="py-3 px-4 flex items-center justify-center gap-3 bg-[#057793] text-base font-semibold text-white border-2 border-[#057793] hover:bg-white hover:text-black">
            GBP <IoIosArrowDown />
          </button>
        </div>
      </div>

      <div className="pt-3 w-full">
        <ul className="flex items-center justify-between">
          <li className="py-3 px-10 mr-2 bg-[#057793] text-white text-lg flex items-center gap-1 font-bold">
            <IoHomeOutline />
            Home
          </li>
          <li className="py-3 px-10 bg-[#057793] text-white text-lg font-bold">About Us</li>
          <li className="py-3 px-10 bg-[#057793] text-white text-lg font-bold">Products</li>
          <li className="py-3 px-10 bg-[#057793] text-white text-lg font-bold">FAQs</li>
          <li className="py-3 px-10 bg-[#057793] text-white text-lg font-bold">Testimonials</li>
          <li className="py-3 px-10 bg-[#057793] text-white text-lg font-bold">Blogs</li>
          <li className="py-3 px-10 bg-[#057793] text-white text-lg font-bold">Contact Us</li>
          <li className="py-3 px-10 bg-[#057793] text-white text-lg font-bold">Bitcoin Discount</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
