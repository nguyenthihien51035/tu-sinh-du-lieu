import { IoNotificationsOutline } from "react-icons/io5";
import { FaPlay, FaTrophy, FaUsers, FaCalendarAlt } from "react-icons/fa";
import { HiKey } from "react-icons/hi";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen  flex  flex-col items-center bg-gradient-to-r from-yellow-400 to-orange-500 ">
      <div className="w-14 mt-[100px] h-14 bg-yellow-200 text-white flex items-center justify-center rounded-full ">
        <div className="animate-bellBounce">
          <IoNotificationsOutline fontSize={2} color="#FFF" size={30} />
        </div>
      </div>

      <p className="mt-5 font-bold text-[50px] text-white">Rung Chuông Vàng</p>
      <p className="mt-1 font-bold text-[50px] text-yellow-200">BTEC</p>
      <div className="w-[600px] ">
        <p className="mt-1 font-bold text-[20px] text-center text-white">
          Cuộc thi kiến thức trực tuyến dành cho sinh viên BTEC. Thể hiện tài
          năng và giành những phần thưởng hấp dẫn!
        </p>
      </div>

      <div className="mt-5 flex gap-6">
        {/* Tham gia ngay */}
        <button className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white border border-white text-orange-500 font-semibold text-lg hover:scale-105 transition">
          {/* Vòng tròn chứa icon tam giác */}
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-orange-500">
            <FaPlay className="text-white text-[10px]" />
          </div>
          Tham gia ngay
        </button>

        {/* Đăng nhập admin */}
        <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white font-semibold text-lg hover:scale-105 transition">
          <HiKey className="text-white" />
          Đăng nhập Admin
        </button>
      </div>
      {/* 3 Item */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-[900px]">
        {/* Item 1 */}
        <div className="bg-yellow-200/80 p-6 rounded-xl text-center shadow-lg">
          <FaTrophy size={40} className="mx-auto text-yellow-600 mb-3" />
          <h3 className="text-xl font-bold text-[#5c3b00]">
            Giải thưởng hấp dẫn
          </h3>
          <p className="mt-2 text-[#5c3b00]">
            Cơ hội nhận những phần thưởng giá trị từ cuộc thi
          </p>
        </div>

        {/* Item 2 */}
        <div className="bg-yellow-200/80 p-6 rounded-xl text-center shadow-lg">
          <FaUsers size={40} className="mx-auto text-yellow-600 mb-3" />
          <h3 className="text-xl font-bold text-[#5c3b00]">
            Cộng đồng sinh viên
          </h3>
          <p className="mt-2 text-[#5c3b00]">
            Kết nối và giao lưu với các bạn sinh viên khác
          </p>
        </div>

        {/* Item 3 */}
        <div className="bg-yellow-200/80 p-6 rounded-xl text-center shadow-lg">
          <FaCalendarAlt size={40} className="mx-auto text-yellow-600 mb-3" />
          <h3 className="text-xl font-bold text-[#5c3b00]">Thi trực tuyến</h3>
          <p className="mt-2 text-[#5c3b00]">
            Tham gia thi mọi lúc, mọi nơi với giao diện thân thiện
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 w-full bg-[#1a1a1a] text-gray-300 py-6 px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <h4 className="text-lg font-bold text-yellow-400">
              Rung Chuông Vàng BTEC
            </h4>
            <p className="text-sm">
              Cuộc thi kiến thức trực tuyến dành cho sinh viên BTEC
            </p>
          </div>
          <p className="text-sm mt-4 md:mt-0">
            Made with <span className="text-red-500">❤️</span> &{" "}
            <span className="text-blue-400">⚡</span> by BTEC Team
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
