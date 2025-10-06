import useBlog from "../hooks/useBlog";
import { musicContent, tabs } from "./ListItems";
import { Play } from "lucide-react";
import { useState } from "react";

export default function MusicTabs() {
  const { cardBg, borderClass, isDarkMode } = useBlog();
  const [activeTab, setActiveTab] = useState("New Releases");

  const filteredContent = musicContent.filter(
    (item) => item.category === activeTab
  );

  return (
    <section className="mb-8">
      {/* Tabs */}
      <div className={`${cardBg} border-t ${borderClass}`}>
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:p py-12"> */}

        <h2 className="text-3xl font-bold mb-8">Music & Videos</h2>

        <div className="flex gap-4 mb-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition ${
                 activeTab === tab
                  ? "bg-purple-600 text-white"
                  : `${
                      isDarkMode
                        ? "bg-gray-700 hover:bg-gray-600"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-x-[10px] gap-y-[30px]">
          {filteredContent.map((item, index) => (
            <div
              key={index}
              className={`${cardBg} rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer group`}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition flex items-center justify-center">
                  <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition fill-white" />
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-bold text-sm truncate">{item.title}</h3>

                <p
                  className={`text-xs ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  } truncate`}
                >
                  {item.artist}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}



