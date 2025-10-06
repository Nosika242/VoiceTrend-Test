import { ChevronRight, Clock, Eye} from "lucide-react";
import useBlog from "../hooks/useBlog";
import { Link } from "react-router-dom";
import { hotStories } from "./ListItems";

export default function HotContent() {
  const { cardBg } = useBlog();
  return (
    // <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      // <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        // <div className="lg:col-span-2 space-y-12">
          <section>
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h2 className="text-3xl font-bold flex items-center gap-2">
                🔥 Hot Stories
              </h2>
              <Link
                to="/"
                className="text-purple-600 hover:text-purple-700 flex items-center"
              >
                View All <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-x-[10px] gap-y-[30px]">
              {hotStories.map((story) => (
                <div
                  key={story.id}
                  className={`${cardBg} rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer group`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                      <div className="p-4 w-full">
                        <div className="flex items-center gap-3 text-white text-sm">
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" /> {story.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" /> {story.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg group-hover:text-purple-600 transition">
                      {story.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
    //     </div>
    //   </div>
    // </div>
  );
}
