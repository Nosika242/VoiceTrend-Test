

import { featured } from "./ListItems";
import { TrendingUp } from "lucide-react";
import useBlog from "../hooks/useBlog";

export default function FeaturedRelease() {
   const { cardBg, isDarkMode } = useBlog();
  return (
     <div className="space-y-6">
      <div className={`${cardBg} rounded-xl p-6 shadow-lg sticky top-20`}>
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-purple-600" /> Featured Press Release
        </h3>
        <div className="relative h-64 rounded-lg overflow-hidden mb-4">
          <img
            src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=400&fit=crop"
            alt="Featured"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <span className="text-white font-bold text-sm uppercase tracking-wide">
              Major Announcement
            </span>
          </div>
        </div>
        <h4 className="font-bold mb-2">
          Afrobeats Goes Global: Major Label Partnership Announced
        </h4>
        <p
          className={`text-sm ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          } mb-4`}
        >
          Historic deal to bring African music to worldwide audiences through
          strategic partnership...
        </p>
        <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition">
          Read Full Release
        </button>
      </div>

      {/* Most Recent Statements */}
      <div className={`${cardBg} rounded-xl p-6 shadow-lg`}>
        <h3 className="text-xl font-bold mb-4">Most Recent Statements</h3>
        <div className="space-y-3">
          {featured.map((item, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-lg ${
                isDarkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-100 hover:bg-gray-200"
              } cursor-pointer transition`}
            >
              <p className="font-semibold text-sm">{item}</p>
              <span
                className={`text-xs ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {idx + 1}h ago
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}