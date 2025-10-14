// src/pages/Signup.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import fruitsBackground from "../assets/fruits-background.jpg"; // Đảm bảo đường dẫn này đúng

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Mật khẩu và xác nhận mật khẩu không khớp!");
      return;
    }
    console.log("Signup form submitted:", formData);
    alert("Đăng ký thành công (chỉ là demo)!");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${fruitsBackground})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg relative z-10">
        {" "}
        {/* Thay p-8 thành p-6 */}
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-textPrimary mb-2">
            Đăng ký
          </h2>{" "}
          {/* Thay text-3xl thành text-2xl */}
          <p className="text-sm text-textSecondary">
            Tạo tài khoản mới của bạn!
          </p>
        </div>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {" "}
          {/* Thay mt-8 space-y-6 thành mt-6 space-y-4 */}
          <InputField
            label="Tên của bạn"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
          <InputField
            label="Email"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john.doe@example.com"
            required
          />
          <InputField
            label="Mật khẩu"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            required
          />
          <InputField
            label="Xác nhận mật khẩu"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="••••••••"
            required
          />
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Đăng ký
            </button>
          </div>
        </form>
        <div className="mt-4 text-center text-sm text-textSecondary">
          {" "}
          {/* Thay mt-6 thành mt-4 */}
          Đã có tài khoản?{" "}
          <Link
            to="/login"
            className="font-medium text-primary hover:text-primary-dark"
          >
            Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
