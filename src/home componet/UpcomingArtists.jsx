import { artists } from "./ListItems";
import useBlog from "../hooks/useBlog";
import { Link } from "react-router-dom";
import {ChevronRight} from "lucide-react"

export default function UpcomingArtists() {
  const { cardBg, isDarkMode } = useBlog();
  return (
   
    <section className="mb-8">
      <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Upcoming Artists</h2>
          <Link  to="/" className="text-purple-600 hover:text-purple-700 flex items-center gap-1">
            View All <ChevronRight className="w-4 h-4" />
          </Link >
        </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-x-[10px] gap-y-[30px]">
       
          {artists.map((artist, index) => (
          <div key={index} className={`${cardBg} rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer group`}>
              <div className="relative h-64 overflow-hidden">
                <img src={artist.image} alt={artist.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-1">{artist.name}</h3>
                <span className="inline-block px-2 py-1 bg-purple-600 text-white text-xs rounded-full mb-2">{artist.genre}</span>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-3`}>{artist.bio}</p>
                <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
    </section>
  
  );
}
