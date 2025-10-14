import React from "react";
import { Link } from "react-router-dom";
import { Plus, FileText, Activity, Users, Award } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-orange-500 font-semibold">
            <Award size={22} />
            <span>Rung Chuông Vàng BTEC</span>
          </div>
          <span className="text-sm text-gray-500">Admin Dashboard</span>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <span>
            admin@gmail.com <span className="text-orange-500">(Admin)</span>
          </span>
          <button className="text-gray-600 hover:text-orange-500">
            Đăng xuất
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex justify-center mt-4">
        <div className="bg-white rounded-full shadow flex overflow-hidden">
          <button className="px-8 py-2 bg-yellow-400 text-white font-medium">
            Tổng quan
          </button>
          <button className="px-8 py-2 text-gray-600 hover:text-yellow-500">
            Quản lý đề thi
          </button>
        </div>
      </div>

      {/* Stats - viết trực tiếp */}
      <div className="grid grid-cols-4 gap-6 px-8 mt-8">
        {/* Box 1 */}
        <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
          <div className="p-3 bg-gray-100 rounded-lg">
            <FileText className="text-blue-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">3</div>
            <div className="text-gray-500 text-sm">Tổng số đề thi</div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
          <div className="p-3 bg-gray-100 rounded-lg">
            <Activity className="text-green-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">3</div>
            <div className="text-gray-500 text-sm">Đề thi đang hoạt động</div>
          </div>
        </div>

        {/* Box 3 */}
        <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
          <div className="p-3 bg-gray-100 rounded-lg">
            <Users className="text-purple-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">4</div>
            <div className="text-gray-500 text-sm">Tổng thí sinh</div>
          </div>
        </div>

        {/* Box 4 */}
        <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
          <div className="p-3 bg-gray-100 rounded-lg">
            <Award className="text-yellow-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">2</div>
            <div className="text-gray-500 text-sm">Đã tham gia thi</div>
          </div>
        </div>
      </div>

      {/* Welcome box */}
      <div className="px-8 mt-10">
        <div className="relative bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-2xl w-80 shadow-md">
          <h2 className="text-xl font-semibold mb-2">
            Chào mừng đến với Admin Dashboard
          </h2>
          <p className="text-sm mb-4">
            Quản lý cuộc thi Rung Chuông Vàng BTEC một cách hiệu quả
          </p>

          <Link
            to="/create-exam"
            className="absolute right-[-20px] top-1/2 -translate-y-1/2
                       bg-white text-orange-500 rounded-xl shadow-md
                       px-4 py-2 flex items-center gap-1 hover:scale-105
                       transition-transform"
          >
            <Plus size={18} /> Tạo đề thi mới
          </Link>
        </div>
      </div>
    </div>
  );
}
