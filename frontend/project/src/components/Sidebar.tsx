import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const Sidebar = () => {
  const [hoveredCategory, setHoveredCategory] = useState(-1);

  const categories = [
    {
      iconUrl:
        "https://theme.hstatic.net/200000423303/1001363954/14/menu_icon_1.png?v=160",
      name: "Trái Cây Theo Mùa",
      subcategories: [
        "Trái Cây Việt",
        "Trái Cây Nhập Khẩu",
        "Trái Cây Sấy - Đông Lạnh",
        "Nước Ép Trái Cây Tươi",
      ],
    },
    {
      iconUrl:
        "https://theme.hstatic.net/200000423303/1001363954/14/menu_icon_2.png?v=160",
      name: "Bếp O - Ready To Eat",
      subcategories: [],
    },
    {
      iconUrl:
        "https://theme.hstatic.net/200000423303/1001363954/14/menu_icon_3.png?v=160",
      name: "Rau Củ Quả",
      subcategories: [],
    },
    {
      iconUrl:
        "https://theme.hstatic.net/200000423303/1001363954/14/menu_icon_4.png?v=160",
      name: "Tươi Sống",
      subcategories: [],
    },
    {
      iconUrl:
        "https://theme.hstatic.net/200000423303/1001363954/14/menu_icon_5.png?v=160",
      name: "Bếp O - Ready To Cook",
      subcategories: [],
    },
    {
      iconUrl:
        "https://theme.hstatic.net/200000423303/1001363954/14/menu_icon_6.png?v=160",
      name: "Thực Phẩm Khô",
      subcategories: [],
    },
    {
      iconUrl:
        "https://theme.hstatic.net/200000423303/1001363954/14/menu_icon_7.png?v=160",
      name: "Gia Vị & Phụ Liệu",
      subcategories: [],
    },
    {
      iconUrl:
        "https://theme.hstatic.net/200000423303/1001363954/14/menu_icon_8.png?v=160",
      name: "Đồ Uống Tốt Sức Khỏe",
      subcategories: [],
    },
  ];

  return (
    <aside className="w-64 bg-white shadow-md border border-gray-200">
      <ul className="py-2">
        {categories.map((cat, idx) => {
          const isHovered = hoveredCategory === idx;

          return (
            <li
              key={idx}
              className="relative"
              onMouseEnter={() => setHoveredCategory(idx)}
              onMouseLeave={() => setHoveredCategory(-1)}
            >
              {/* Dòng chính */}
              <div
                className={`px-4 py-3 cursor-pointer flex items-center justify-between transition-all duration-200 ${
                  isHovered
                    ? "border-l-4 border-[#5bbb46] bg-white"
                    : "border-l-4 border-transparent bg-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={cat.iconUrl}
                    alt={cat.name}
                    className="w-5 h-5 object-contain"
                  />
                  <span
                    className={`text-[15px] font-normal transition-colors duration-200 ${
                      isHovered ? "text-[#5bbb46] font-medium" : "text-gray-700"
                    }`}
                  >
                    {cat.name}
                  </span>
                </div>

                {cat.subcategories.length > 0 && (
                  <ChevronRight
                    className={`w-4 h-4 transition-colors duration-200 ${
                      isHovered ? "text-[#5bbb46]" : "text-gray-400"
                    }`}
                  />
                )}
              </div>

              {/* Submenu */}
              {isHovered && cat.subcategories.length > 0 && (
                <div
                  className="absolute left-full top-0 w-80 bg-white shadow-xl border border-gray-200 z-50"
                  onMouseEnter={() => setHoveredCategory(idx)}
                  onMouseLeave={() => setHoveredCategory(-1)}
                >
                  <div className="p-6">
                    <h3 className="text-[#5bbb46] font-bold text-lg mb-4 border-b-2 border-[#5bbb46] pb-2">
                      {cat.name}
                    </h3>
                    <ul className="space-y-3">
                      {cat.subcategories.map((sub, subIdx) => (
                        <li
                          key={subIdx}
                          className="text-gray-700 hover:text-[#5bbb46] cursor-pointer hover:pl-2 transition-all font-medium text-[15px]"
                        >
                          {sub}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
