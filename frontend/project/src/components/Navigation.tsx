import React from "react";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

const Navigation = () => {
  return (
    <nav className="w-full border-t border-gray-200 bg-white text-black py-3 relative">
      <div className="max-w-[1200px] mx-auto flex items-center gap-6 px-4 relative">
        {/* Nút Danh sách sản phẩm */}
        <div className="relative group">
          <button className="flex items-center gap-2 text-black">
            <Menu className="w-5 h-5" />
            <span>Danh sách sản phẩm</span>
          </button>
        </div>

        {/* Các mục menu khác */}
        <a
          href="#"
          className="hover:underline flex items-center gap-1 text-black hover:text-[#5BBB46] hover:no-underline"
        >
          <img
            src="https://theme.hstatic.net/200000423303/1001363954/14/policy_header_image_1.png?v=160"
            alt=""
            className="w-4 h-4"
          />
          <span>Chứng Nhận Hữu Cơ</span>
        </a>

        <a
          href="#"
          className="hover:underline flex items-center gap-1 text-black hover:text-[#5BBB46] hover:no-underline"
        >
          <img
            src="https://theme.hstatic.net/200000423303/1001363954/14/policy_header_image_2.png?v=160"
            alt=""
            className="w-4 h-4"
          />
          <span>Hàng sĩ hữu cơ giá tốt</span>
        </a>

        <a
          href="#"
          className="hover:underline flex items-center gap-1 text-black hover:text-[#5BBB46] hover:no-underline"
        >
          <img
            src="https://theme.hstatic.net/200000423303/1001363954/14/policy_header_image_3.png?v=160"
            alt=""
            className="w-4 h-4"
          />
          <span>Tự hào là doanh nghiệp do phụ nữ làm chủ</span>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
