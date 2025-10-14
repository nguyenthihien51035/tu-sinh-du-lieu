import { Search } from "lucide-react";
import { LuShoppingBasket } from "react-icons/lu";
import Avt from "../assets/user_avt.png";
import { FaArrowLeft } from "react-icons/fa6";
import logo from "../assets/logo.jpg";
import { CiLocationOn } from "react-icons/ci";

function Header() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-6">
          <button className="p-2 md:hidden">
            <FaArrowLeft className="w-6 h-6 text-gray-800" />
          </button>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-end ">
              <img src={logo} className="w-10 h-10 object-contain" />
              <h1 className="text-2xl font-bold text-[#173a2e]">TazajMart</h1>
            </div>
            {/* <Location city="Abu Dhabi" /> */}
            <button className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-200">
              <CiLocationOn className="w-5 h-5 text-[#1a2828] mr-2" />

              <div className="flex flex-col items-start">
                <span className="text-xs text-[#23483b]">Delivery to</span>
                <span className="font-semibold text-lg text-[#23483b]">
                  Abu Dhabi
                </span>
              </div>
            </button>
          </div>

          <h1 className="absolute left-1/2 transform -translate-x-1/2 text-lg font-semibold text-gray-800  md:hidden">
            All products
          </h1>
        </div>

        <div className="hidden md:flex items-center border rounded-full px-4 py-2 w-1/2  bg-gray-100">
          <Search className="text-gray-500 mr-2" size={18} />
          <input
            type="text"
            placeholder="Search your products..."
            className="w-full focus:outline-none text-sm  bg-gray-100"
          />
        </div>

        <div className="flex items-center gap-2">
          <button className="relative p-2 rounded-full bg-[#093b24]">
            <LuShoppingBasket className="text-white text-2xl" />
            <span className="absolute -top-[-4px] -right-[-5px] bg-orange-500 text-white text-xs px-1 rounded-full">
              2
            </span>
          </button>
          <img
            src={Avt}
            alt="user"
            className="w-9 h-9 md:w-11 md:h-11 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;