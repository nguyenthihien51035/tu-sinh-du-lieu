import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

const CategoriesBar = () => {
  return (
    <div className="hidden lg:block bg-white ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-2.5">
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 text-xs text-green-900 font-semibold bg-green-50 px-3 py-1.5 rounded-md hover:bg-green-100 transition-colors">
              Products 
              <IoIosArrowDown size={12} />
            </button>
            <button className="text-xs text-green-900 font-semibold bg-green-50 px-3 py-1.5 rounded-md hover:bg-green-100 transition-colors">
              What's new
            </button>
            <button className="text-xs text-green-900 font-semibold bg-green-50 px-3 py-1.5 rounded-md hover:bg-green-100 transition-colors">
              Delivery
            </button>
            <button className="flex items-center gap-1 text-xs text-green-900 font-semibold bg-green-50 px-3 py-1.5 rounded-md hover:bg-green-100 transition-colors">
              Deals & Offers 
              <IoIosArrowDown size={12} />
            </button>
            <button className="text-xs text-green-900 font-semibold bg-green-50 px-3 py-1.5 rounded-md hover:bg-green-100 transition-colors">
              Help & Support
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-xs text-green-900 font-semibold bg-green-50 px-3 py-1.5 rounded-md hover:bg-green-100 transition-colors">
              Returns
            </button>
            <button className="text-xs text-green-900 font-semibold bg-green-50 px-3 py-1.5 rounded-md hover:bg-green-100 transition-colors">
              FAQs
            </button>
            <button className="flex items-center gap-2 text-xs text-orange-600 font-semibold bg-orange-50 px-3 py-1.5 rounded-md hover:bg-orange-100 transition-colors">
              <MdEmail size={16} />
              Email support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesBar;