import React, { useState } from 'react';
import { Heart, Code, Zap, Palette, FileCode } from 'lucide-react';

function App() {
  const [isHovered, setIsHovered] = useState(false);

  const techStack = [
    { name: 'React', icon: Code, color: 'text-blue-500', bg: 'bg-blue-50' },
    { name: 'Vite', icon: Zap, color: 'text-purple-500', bg: 'bg-purple-50' },
    { name: 'Tailwind CSS', icon: Palette, color: 'text-cyan-500', bg: 'bg-cyan-50' },
    { name: 'TypeScript', icon: FileCode, color: 'text-blue-600', bg: 'bg-blue-50' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Hello World App</h1>
            </div>
            <div className="text-sm text-gray-500">Powered by Modern Tech Stack</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 
              className={`text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 transition-all duration-500 ${
                isHovered ? 'scale-105' : 'scale-100'
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Hello World!
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Chào mừng bạn đến với dự án được xây dựng bằng công nghệ hiện đại nhất
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Bắt đầu khám phá
              </button>
              <button className="bg-white text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 border-2 border-gray-200 hover:border-gray-300">
                Tìm hiểu thêm
              </button>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Công nghệ sử dụng</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStack.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <div 
                    key={tech.name}
                    className={`${tech.bg} rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer group border border-gray-100 hover:shadow-lg`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col items-center">
                      <div className={`w-12 h-12 ${tech.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-full h-full" />
                      </div>
                      <h3 className="font-semibold text-gray-900 text-lg">{tech.name}</h3>
                      <p className="text-sm text-gray-600 mt-2 text-center">
                        {tech.name === 'React' && 'Thư viện JavaScript mạnh mẽ'}
                        {tech.name === 'Vite' && 'Build tool nhanh chóng'}
                        {tech.name === 'Tailwind CSS' && 'Framework CSS tiện ích'}
                        {tech.name === 'TypeScript' && 'JavaScript với type safety'}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tính năng nổi bật</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Tốc độ cao</h3>
                <p className="text-gray-600">Vite cung cấp tốc độ build và reload cực nhanh</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Type Safety</h3>
                <p className="text-gray-600">TypeScript đảm bảo code chất lượng và ít lỗi</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Thiết kế đẹp</h3>
                <p className="text-gray-600">Tailwind CSS tạo giao diện đẹp và responsive</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Được xây dựng với ❤️ bằng React, Vite, Tailwind CSS và TypeScript
            </p>
            <p className="text-sm text-gray-500">
              © 2025 Hello World Project. Sẵn sàng cho production.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;