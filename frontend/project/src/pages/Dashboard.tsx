// src/pages/Dashboard.tsx
import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Xóa token khỏi context và localStorage
    navigate("/login", { replace: true }); // Chuyển hướng về trang đăng nhập
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-textPrimary mb-4">
          Chào mừng đến với Dashboard!
        </h1>
        <p className="text-lg text-textSecondary mb-6">
          Bạn đã đăng nhập thành công. Đây là nội dung cần bảo vệ.
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Token của bạn: <span className="font-mono break-all">{token}</span>
        </p>
        <button
          onClick={handleLogout}
          className="py-2 px-6 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Đăng xuất
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
