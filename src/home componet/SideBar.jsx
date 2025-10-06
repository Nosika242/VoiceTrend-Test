import { TrendingUp } from "lucide-react";
import { trendingTopics } from "./ListItems";
import useBlog from "../hooks/useBlog";
// import FeaturedRelease from "./FeaturedRelease";

export default function SideBar() {
  const { cardBg, isDarkMode } = useBlog();
  return (
    // <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    //   <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="space-y-6">
          
          {/* Trending Topics */}
          <div className={`${cardBg} rounded-xl p-6 shadow-lg`}>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-purple-600" /> Trending Topics
            </h3>
            <div className="space-y-2">
              {trendingTopics.map((topic, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-lg ${
                    isDarkMode
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-gray-100 hover:bg-gray-200"
                  } cursor-pointer transition`}
                >
                  <span className="font-semibold text-purple-600">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Fan Poll */}
          <div className={`${cardBg} rounded-xl p-6 shadow-lg`}>
            <h3 className="text-xl font-bold mb-4">Fan Poll</h3>
            <p className="mb-4 font-semibold">
              Who had the best album this year?
            </p>
            <div className="space-y-3">
              {["Burna Boy", "Wizkid", "Davido", "Tems"].map((artist, idx) => (
                <button
                  key={idx}
                  className={`w-full p-3 rounded-lg text-left ${
                    isDarkMode
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-gray-100 hover:bg-gray-200"
                  } transition`}
                >
                  {artist}
                </button>
              ))}
            </div>
            <button className="w-full mt-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition">
              Vote Now
            </button>
          </div>

          {/* Social Media */}
          <div className={`${cardBg} rounded-xl p-6 shadow-lg`}>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
                Twitter
              </button>
              <button className="p-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition">
                Instagram
              </button>
              <button className="p-3 bg-blue-800 hover:bg-blue-900 text-white rounded-lg transition">
                Facebook
              </button>
              <button className="p-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition">
                YouTube
              </button>
            </div>
          </div>
        </div>
        
    //   </div>
    // </div>
  );
}
