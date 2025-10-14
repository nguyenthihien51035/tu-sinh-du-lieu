import React from 'react';
import { GiStarShuriken } from "react-icons/gi";
function TopBar() {
  return (
    <header className="hidden lg:block bg-[#003a24] shadow-sm py-3 border-b border-gray-100">
      <div className="container mx-auto justify-center flex items-center px-4">
        <div className="flex text-white  items-center space-x-6 text-sm">
          <span>Get 90% OFF your first order</span>
          <GiStarShuriken />
          <span>Order now and get delivered within 30 minutes across the UAE</span>
        </div>
      
      </div>
    </header>
  );
}

export default TopBar;