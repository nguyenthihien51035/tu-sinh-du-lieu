import React from "react";
import { FaUser, FaHashtag, FaUsers, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const StudentForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-400 to-orange-500 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Icon tròn trên cùng */}
        <div className="flex justify-center mt-1 mb-4">
          <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center shadow-md">
            <FaUser className="text-white text-2xl" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mb-2">
          Thông Tin Sinh Viên
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Nhập thông tin để tham gia thi
        </p>

        {/* Các input */}
        <div className="space-y-4">
          <div className="flex items-center border rounded-lg px-3">
            <FaUser className="text-gray-400 mr-2" />
            <input
              placeholder="Nguyễn Văn A"
              className="w-full py-2 outline-none"
            />
          </div>

          <div className="flex items-center border rounded-lg px-3">
            <FaHashtag className="text-gray-400 mr-2" />
            <input placeholder="BT12345" className="w-full py-2 outline-none" />
          </div>

          <div className="flex items-center border rounded-lg px-3">
            <FaUsers className="text-gray-400 mr-2" />
            <input placeholder="CNTT01" className="w-full py-2 outline-none" />
          </div>

          <div className="flex items-center border rounded-lg px-3">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              placeholder="student@btec.edu.vn"
              className="w-full py-2 outline-none"
            />
          </div>
        </div>

        {/* Nút */}
        <button className="w-full mt-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-3 rounded-lg font-semibold hover:opacity-90">
          Vào thi
        </button>

        <p className="mt-4 text-center text-gray-500 cursor-pointer hover:underline">
          <Link to="/">← Quay lại trang chủ</Link>
        </p>
      </div>
    </div>
  );
};

export default StudentForm;
