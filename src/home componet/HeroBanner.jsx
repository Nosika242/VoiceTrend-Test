
import {ChevronRight} from "lucide-react";

export default function HeroBanner() {
  return (
    <div className="relative h-96 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&h=600&fit=crop"
        alt="Featured Story"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded-full mb-3">
            BREAKING
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Future of African Music: What's Next in 2025
          </h1>
          <p className="text-gray-200 text-lg mb-4 max-w-2xl">
            Industry experts reveal game-changing trends that will reshape the
            African music scene
          </p>
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold flex items-center gap-2 transition">
            Read Full Story <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
