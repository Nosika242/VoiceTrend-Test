
 import useBlog from "../hooks/useBlog"
import { latestNews } from "./ListItems"
 
export default function LatestNews() {
  const {cardBg,  isDarkMode} = useBlog();
  return (
    //  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    //   <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    //     <div className="lg:col-span-2 space-y-12">
     <section>
              <h2 className="text-3xl font-bold mb-6">Latest News</h2>
              <div className="space-y-4">
                {latestNews.map((news, idx) => (
                  <div
                    key={idx}
                    className={`${cardBg} rounded-xl p-4 shadow hover:shadow-lg transition cursor-pointer flex gap-4`}
                  >
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1 hover:text-purple-600 transition">
                        {news.title}
                      </h3>
                      <p
                        className={`text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        } mb-2`}
                      >
                        {news.excerpt}
                      </p>
                      <span
                        className={`text-xs ${
                          isDarkMode ? "text-gray-500" : "text-gray-500"
                        }`}
                      >
                        {news.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-3 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-lg font-semibold transition">
                Load More Stories
              </button>
            </section>
            // </div>
            // </div>
            // </div>
  )
}