import { Link } from "react-router-dom";
import { pressNews} from "./ListItems";
import { ChevronRight,  Share2 } from "lucide-react";
import useBlog from "../hooks/useBlog";
import FeaturedRelease from "./FeaturedRelease";

export default function PressContent() {
  const { cardBg, isDarkMode } = useBlog();
  return (
   <section>
  <div className="space-y-4">
    
    {/* Left Column: Latest Press Releases */}
    <div className="">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Press Releases</h2>
        <Link
          to="/"
          className="text-purple-600 hover:text-purple-700 flex items-center gap-1"
        >
          View All <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="space-y-6">
        {pressNews.map((press, index) => (
          <div
            key={index}
            className={`${cardBg} rounded-xl p-6 shadow-md hover:shadow-lg transition cursor-pointer border-l-4 border-purple-600`}
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex-1">
                <span
                  className={`text-xs ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  } mb-2 block`}
                >
                  {press.date} • {press.source}
                </span>
                <h3 className="text-lg font-bold mb-2 hover:text-purple-600 transition">
                  {press.headline}
                </h3>
                <p
                  className={`${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  } text-sm line-clamp-2`}
                >
                  {press.summary}
                </p>
              </div>
              <ChevronRight className="w-4 h-4 flex-shrink-0 text-purple-600" />
            </div>
            <div className="flex items-center gap-3 text-xs">
              <button
                className={`flex items-center gap-1 ${
                  isDarkMode
                    ? "text-gray-400 hover:text-gray-300"
                    : "text-gray-600 hover:text-gray-700"
                }`}
              >
                <Share2 className="w-3 h-3" /> Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
     <FeaturedRelease />
  </div>
</section>

  );
}
