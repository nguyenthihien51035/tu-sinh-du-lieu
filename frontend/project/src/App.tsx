import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Import Navigate
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import PrivateRoute from "./components/PrivateRoute"; // Import PrivateRoute
import { AuthProvider, useAuth } from "./context/AuthContext"; // Import AuthProvider và useAuth

// Component Wrapper để xử lý logic điều hướng cho trang Home
const HomeWrapper: React.FC = () => {
  const { isAuthenticated } = useAuth();
  // Nếu đã đăng nhập, chuyển hướng đến Dashboard
  // Nếu chưa đăng nhập, hiển thị trang Home
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Home />;
};

function App() {
  return (
    <BrowserRouter>
      {/* Bọc toàn bộ ứng dụng bằng AuthProvider để AuthContext có thể sử dụng được */}
      <AuthProvider>
        <Routes>
          {/* Các route công khai */}
          <Route path="/" element={<HomeWrapper />} />{" "}
          {/* Sử dụng HomeWrapper */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />{" "}
          {/* Trang 404 cho các URL không khớp */}
          {/* Các route cần bảo vệ bởi xác thực */}
          {/* Mọi route bên trong PrivateRoute sẽ chỉ được truy cập nếu người dùng đã đăng nhập */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Thêm bất kỳ route nào khác cần bảo vệ ở đây */}
            {/* Ví dụ: <Route path="/profile" element={<Profile />} /> */}
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
