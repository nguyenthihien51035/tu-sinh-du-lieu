import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Button } from 'antd';

function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center">
      <div className="text-center px-4">
        <FaExclamationTriangle className="inline-block text-8xl text-red-600 mb-6" />
        <h1 className="text-9xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button type="primary" size="large">
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
