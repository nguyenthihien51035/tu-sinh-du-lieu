import { Link } from 'react-router-dom';
import { FaInfoCircle } from 'react-icons/fa';
import { Card, Button } from 'antd';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <FaInfoCircle className="inline-block text-6xl text-green-600 mb-4" />
            <h1 className="text-5xl font-bold text-gray-800 mb-4">About Us</h1>
          </div>

          <Card className="shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Technology Stack</h2>
            <ul className="space-y-2 text-gray-700">
              <li>⚛️ React 18 with TypeScript</li>
              <li>🎨 Tailwind CSS for styling</li>
              <li>⚡ Vite for fast development</li>
              <li>🔀 React Router DOM for navigation</li>
              <li>🎭 Ant Design components</li>
              <li>🎯 React Icons library</li>
              <li>📡 Axios for HTTP requests</li>
            </ul>
          </Card>

          <div className="text-center">
            <Link to="/">
              <Button type="primary" size="large">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
