
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import useBlog from "../hooks/useBlog";

export default function PageNotFound() {
  const { bgClass, textClass } = useBlog();

  return (
    <div
      className={`flex flex-col items-center justify-center text-center py-20 px-6 min-h-screen ${bgClass} ${textClass} transition-colors duration-300`}
    >
      <AlertTriangle className="w-16 h-16 text-red-500 mb-6" />
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-lg opacity-80 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
