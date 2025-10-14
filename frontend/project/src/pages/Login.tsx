// src/pages/Login.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import InputField from "../components/InputField";
import fruitsBackground from "../assets/fruits-background.jpg";
import { useAuth } from "../context/AuthContext"; // Import useAuth

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth(); // Lấy hàm login từ AuthContext
  const navigate = useNavigate(); // Sử dụng useNavigate để chuyển hướng

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login form submitted:", formData);

    // --- LOGIC XÁC THỰC THỰC TẾ CỦA BẠN SẼ Ở ĐÂY ---
    // Ví dụ: Gửi request đến API, nếu thành công nhận về token
    const mockToken = "your_jwt_token_here_12345"; // Thay bằng token thật từ API

    if (
      formData.email === "test@example.com" &&
      formData.password === "password"
    ) {
      login(mockToken); // Lưu token vào context và localStorage
      alert("Đăng nhập thành công!");
      navigate("/dashboard", { replace: true }); // Chuyển hướng đến trang dashboard
    } else {
      alert("Email hoặc mật khẩu không đúng!");
    }
    // --------------------------------------------------
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat relative px-4 sm:px-6 lg:px-8 pt-5 pb-5"
      style={{ backgroundImage: `url(${fruitsBackground})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg relative z-10 m-auto">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-textPrimary mb-2">
            Đăng nhập
          </h2>
          <p className="text-sm text-textSecondary">
            Chào mừng bạn quay trở lại!
          </p>
        </div>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <InputField
            label="Email"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="test@example.com" // Gợi ý email để test
            required
          />
          <InputField
            label="Mật khẩu"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="password" // Gợi ý password để test
            required
          />
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-textSecondary"
              >
                Ghi nhớ tôi
              </label>
            </div>
            <div className="text-sm">
              <Link
                to="#"
                className="font-medium text-primary hover:text-primary-dark"
              >
                Quên mật khẩu?
              </Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Đăng nhập
            </button>
          </div>
        </form>
        <div className="mt-4 text-center text-sm text-textSecondary">
          Chưa có tài khoản?{" "}
          <Link
            to="/signup"
            className="font-medium text-primary hover:text-primary-dark"
          >
            Đăng ký ngay
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
