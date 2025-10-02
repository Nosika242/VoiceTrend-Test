import React, { useState } from "react";
import {
  Search,
  Moon,
  Sun,
  Menu,
  X,
  TrendingUp,
  Music,
  Video,
  Users,
  Radio,
  ChevronRight,
  Play,
  Clock,
  Eye,
  Heart,
  Share2,
} from "lucide-react";

export default function VoicenuteHomepage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Music");

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const hotStories = [
    {
      id: 1,
      title: "Burna Boy's Secret Collaboration Leaked",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      views: "45K",
      time: "2h ago",
    },
    {
      id: 2,
      title: "Wizkid Spotted in Lagos Studio",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop",
      views: "32K",
      time: "5h ago",
    },
    {
      id: 3,
      title: "Davido Announces New Album Drop",
      image:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=600&fit=crop",
      views: "28K",
      time: "8h ago",
    },
    {
      id: 4,
      title: "Tems Wins International Award",
      image:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop",
      views: "21K",
      time: "12h ago",
    },
  ];

  const artists = [
    {
      name: "Rising Star: Chloe Rivers",
      description: "Chloe's soulful voice captivates.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBZGoYevaiUkJZA1Oka0kK0QC78J4Z_QWNZcMkr-8ERW6hGnbwFI-hzwOfPpG_qtFCyCRXXdiooYIyqU6vFuTCE5I1ngw-BWw1TAY222Op9DfiEgD4pEC8T_G5_ZVvr0TGG8WCgwfUfztv7yA5q2ePBYHpn1nYV6rbMMWZiGQHDiubvE2B0enp7tFaCX3MD58vwPdF1w4WxGasg7N-_EZ0bphQL2md9E0nxBmKy_oB0PkfFDb2YGW-W6VxF7PjAszHux7QVN2eKORc",
    },
    {
      name: "Hip-Hop Sensation: Jaxon",
      description: "Jaxon's beats are taking over.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuClxrlLX42vprJVDbcAh0QBqJbt7Wh16gJzNMKhsjnoQK18WTumeuNuhlh9pTQmT3TUtAlOzvD688bzBBakaizlVeyI-93qZwMc2PrvFEPeWeDw4jmaDuY9IJF7emyBTfb5Aytng1_Hv_1QUvgoTefdTIY5hSJcQhhNg1DcnrNVVRkRaE7v-Q8mCM_49CPyxnbtlA2HKBTsFFaFj8yLsuQf4DKmSSUmIQAhCDowXXZht7xItz5G6EUtFdNP1h2n6n8RrfWlhF-NVlM",
    },
    {
      name: "Indie Band: The Lunar Tides",
      description: "A fresh indie sound.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBelXo8jb2edeSZl-uguaItGxbJ1ewIzCUmuyDG_AGCCcCm2N49AKTAMfpwQcQF-8qu3hxt3ue-0z3mIOKxMZV54qsVQrw9IrN09yb0nwPGjeMglM-0xasnpV6PpGMU6_YkK9IwKURldVuK0hQBbCRuBIVxNgFrIWKR0HwiChzDo6Z311-yACJ0Wvq4ZlHdwp31Cdz6ntb3-6JbEyIiQVVLSV_85icOPZ0aFd2TNGHK9G8wYkZb0gYDBVldwsk1Szqpxlg1kX1jPBk",
    },
  ];

  const latestNews = [
    {
      title: "New Afrobeats Festival Announced for December",
      excerpt: "Major artists confirmed for Lagos mega event",
      time: "1h ago",
      image:
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop",
    },
    {
      title: "Nigerian Music Streams Hit All-Time High",
      excerpt: "Industry reports 200% growth in digital consumption",
      time: "3h ago",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop",
    },
    {
      title: "Rising Star Signs Major Record Deal",
      excerpt: "Fresh talent secures international distribution",
      time: "6h ago",
      image:
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop",
    },
    {
      title: "Music Video Breaks YouTube Records",
      excerpt: "10 million views in first 24 hours",
      time: "9h ago",
      image:
        "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=300&fit=crop",
    },
  ];

  const pressReleases = [
    {
      title: "New Album Release: 'Echoes of Tomorrow'",
      date: "July 15, 2024",
      desc: "Official announcement from artist, label, and brand",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1bdR5u6l-F4L6cOqIB4pGPfMTtClTnJeERrlUZhisAzr_olWcz-9QfeGLLoYjqcytaVphjMjNgtbOu-xgsPDbD-DP4G-myZc7yP_m5K8JhpzP4H3ZOQbrXUBduTe_JzG7ZPBXbDKumQezE8rnjXo2wAIUUFOubKtF44M5fLZMaIIS48NJay1xZtBkV8SHJl8lDHImBrIWZ0tDldmF2pnPn01ZBzSVM5EjeYwMTk-LVErMncY9cSAm-X94dup4Nmw2_ePcQ36lGI3H",
    },
    {
      title: "Artist Collaboration: 'Rhythms Unite'",
      date: "July 10, 2024",
      desc: "Official announcement from artist, label, and brand",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJaBPaLvwePkr2nhSQceTKabFWbwNSx8oOR6IvNUEXDSlcjd_eCtYrj_T33I-LBeeG6VlRHbT9NhHB4fr-cuBiS4GtgcyFSgik250fdUx6knP-O7Zv3jZ-qNqKqhPafBB_Kqx337pMHikKqHDMD8qcldgbmc25eXyAZZxc_cnrMT5iwIKp92qnc5MHzi_AcjiFE4Yc3nocyYAJvMvSSGcttSi7kNH1BkherULnLDBAHfzs-vITZQ2q0Dl9ADamoLKdTojvp0JhZ3rC",
    },
    {
      title: "Brand Partnership: 'Soundscapes'",
      date: "July 5, 2024",
      desc: "Official announcement from artist, label, and brand",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzQB8JsTrcLrrJfTeGbQ0sHu3dCc9L6GciWkqHDVQdkOQJaFFkCp-lKRuGGUxMbf4DEZcXXL4PKBEdLcCgp-4vd7gfpDtNCv6qGspNeeNZQTRYDv_pSEAZfsLIsftRd--WVre5JZ0n3y-1BL18OH0tRlrKI8XGsLigEAcLLhOPSgdMeMDP43AZNbiFB9qR8SgCS2Tsw3cdYcVLn5UHC_2AAYofW0bv9VASrOZDJ8z3BV7hpb9Zmp98O0NAd9V0o_tfMP0EvUTpjYix",
    },
  ];

  // ✅ Featured press release (single object)
  const featured = {
    label: "Official Statement",
    title: "Artist Announces World Tour",
    desc: "Details of the upcoming tour, including dates and locations.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAl_MOnmV38Jppah2CukMA7Be6braRVdILulnZc1UsqKh537HQsIfB1tzSpoYbYTHvh0nz9-KbbWVuZ_BRyexRu-sW_eyTbfJxHQm00kQBxgfRkB0B81paUt2mOzeYGcOmFXnMkILmo6hH2C05ij4wI0b4edpsDs3oVT-a5ThQk8Dr8yloUjPO8oDjzqnEYTVnMrluFZATqnCHQ7zrX4t5dY-VMctbMYimFL4mwYfXLpLYUl_MvT10WQo8w7XHRLMtQJ3TW-AtQV0Zm",
  };

  const trendingTopics = [
    "#BurnaBoy",
    "#Afrobeats2025",
    "#WizkidFC",
    "#NewMusicFriday",
    "#TemsVibes",
  ];

  const bgClass = isDarkMode ? "bg-gray-900" : "bg-gray-50";
  const textClass = isDarkMode ? "text-gray-100" : "text-gray-900";
  const cardBg = isDarkMode ? "bg-gray-800" : "bg-white";
  const borderClass = isDarkMode ? "border-gray-700" : "border-gray-200";

  const tabs = ["Music", "Videos"];
  const content = {
    Music: [
      {
        title: "New Album Reviews",
        description: "The latest album release reviews.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuANPrWCMO5GLxCs7SiZ4CacuK1OCann0BIfVluZM12NIiTSvEZGwgLk1etKVFQQHabk_X5OLPL-Kl82S0U2P8x11P7V3PTqETBCXxuCfnZYin9E0xknJF4C8P3U-1RfIdnimdu255aNYZrcZTO-7lvt3KjNNdwqWGJfvMB7oj20Hv9C00MYukV8UT6rGvBVCLsbJ4tSJ1SVJ8nPHd1kZuLWHRmnXctexb6DhCylElgtdDNStzKq3mDAxt95oDf68099HdVUcjJJ298",
      },
      {
        title: "Artist Profiles",
        description: "Learn about your favorite artists.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDSSy8_FVZBxGo3pcGotSdaMDomFboYEeHESdhaO0b_g_EHt5ZdujoRFL82Btn-hEDp7-Wi2le0aeDTuwfYZAcZRk8Kw0bSbiyNszvmt_PKDaF-M_9bkoUS2UUebQukw_01pGguOgwKufN77L0dE8mVx44BO-BHYVsJ3E-KJSMcj4hUrszfF-YNL-P09QxNmNQ4WFQ3aXwcW4MsIx-EEY2xI7h3XgcPPLaS-aswsWcUfdilmPIoINZRpIfEofud_rKvROtdFd5W1yM",
      },
    ],
    Videos: [
      {
        title: "Top Music Videos",
        description: "Watch this week's popular videos.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA2WTQ9InrHFIzNJV8YBjGgShpnMcmiVtT2pHmolklTS95Z5Ox3Tr7C0PpevJt92BuyZb4vz3e_1n7DHoqy5OGoUaUBpg3eWkuTevOF0PPE9TgNkdFMez4UpPcVKSjLLo5QQWPgp5f5vB3Y00k1cSdWDJUIOGgu-fHHvA1sGGJAAECYES0oWgkTpj7bMeaZpF9T-ERqZ720-Fo2CFcY4nHJ47or1xuu3MFxlj75SYNdLOQhd40GILQ7tZo7E7tL2F_A7KdXhT7cf8U",
      },
      {
        title: "Live Concerts",
        description: "Find upcoming concerts near you.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCLtinhwC4L5ojP88wXOH2SqwNeSt35xnlZJCos3XAJnP5DVg5aW3x2t6vjxnZhUQ-M5YwbfOznudKtXMUEOiAssFcjdj882flwZlyQSMqDs6gfWTiPRty1Q_DgiZjPTsZGdGQVCT09wlxcxHZhIHv8vCgT1HHDg9-xKWT7yCQ0cmKqwkp9TVonmfFJs9ZqUcA2paqQHAfIohmPmm11L7p8G5XxxkwPQtR9aWR38eCfa3nWVHTl8E5_DkF84e3_Cgc_VDPHpTtdajg",
      },
    ],
  };

  return (
    <div
      className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-300`}
    >
      {/* Top Navigation Bar */}
      <nav
        className={`sticky top-0 z-50 ${cardBg} border-b ${borderClass} backdrop-blur-lg bg-opacity-90`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Radio className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                VoiceTrend
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="hover:text-purple-600 transition">
                Home
              </a>
              <a
                href="#"
                className="hover:text-purple-600 transition flex items-center gap-1"
              >
                <TrendingUp className="w-4 h-4" /> Hot Stories
              </a>
              <a
                href="#"
                className="hover:text-purple-600 transition flex items-center gap-1"
              >
                <Music className="w-4 h-4" /> Music & Video
              </a>
              <a href="#" className="hover:text-purple-600 transition">
                News & Entertaiment
              </a>
              <a href="#" className="hover:text-purple-600 transition">
                Artists
              </a>
              <a
                href="#"
                className="hover:text-purple-600 transition flex items-center gap-1"
              >
                <Users className="w-4 h-4" /> Community
              </a>
              <a href="#" className="hover:text-purple-600 transition">
                Advertise
              </a>
              <a href="#" className="hover:text-purple-600 transition">
                Submit Music & Videos
              </a>
              <a href="#" className="hover:text-purple-600 transition">
                Press Releases
              </a>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <button
                className={`p-2 rounded-lg ${
                  isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                }`}
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${
                  isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                }`}
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={toggleMobileMenu}
                className={`md:hidden p-2 rounded-lg ${
                  isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              <a href="#" className="block py-2 hover:text-purple-600">
                Home
              </a>
              <a href="#" className="block py-2 hover:text-purple-600">
                Hot Stories
              </a>
              <a href="#" className="block py-2 hover:text-purple-600">
                Music & Video
              </a>
              <a href="#" className="block py-2 hover:text-purple-600">
                News
              </a>
              <a href="#" className="block py-2 hover:text-purple-600">
                Artists
              </a>
              <a href="#" className="block py-2 hover:text-purple-600">
                Community
              </a>
              <a href="#" className="block py-2 hover:text-purple-600">
                Advertise
              </a>
              <a href="#" className="block py-2 hover:text-purple-600">
                Submit Songs or Videos
              </a>
              <a href="#" className="block py-2 hover:text-purple-600">
                Press Releases
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Banner */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Hot Stories Preview */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                  🔥 Hot Stories
                </h2>
                <a
                  href="#"
                  className="text-purple-600 hover:text-purple-700 flex items-center gap-1"
                >
                  View All <ChevronRight className="w-4 h-4" />
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

            <section className="mb-8">
              <h3 className="text-3xl font-bold flex items-center gap-2 mb-6">
                Upcoming Artist Spotlights
              </h3>
              <div
                className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4 
        [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {artists.map((artist, index) => (
                  <div key={index} className="flex-shrink-0 w-40 space-y-2">
                    <div
                      className="w-full aspect-[3/4] bg-cover bg-center rounded-lg"
                      style={{ backgroundImage: `url(${artist.image})` }}
                    ></div>
                    <div>
                      <p className="font-semibold text-blue-200 dark:text-blue-200">
                        {artist.name}
                      </p>
                      <p className="text-sm text-blue-200 dark:text-zinc-800">
                        {artist.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Latest News Feed */}
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

            <section className="mb-8">
              {/* Tabs */}
              <div className="border-b border-zinc-200 dark:border-zinc-700">
                <nav aria-label="Tabs" className="-mb-px flex space-x-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`whitespace-nowrap py-3 px-1 border-b-2 font-bold text-sm ${
                        activeTab === tab
                          ? "border-primary text-primary"
                          : "border-transparent text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-500"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Dynamic Grid */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                {content[activeTab].map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div
                      className="w-full aspect-video bg-cover bg-center rounded-lg"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div>
                      <p className="font-semibold text-blue-900 dark:text-blue-900">
                        {item.title}
                      </p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Featured Press Release */}
            <section>
              <div>
                {/* Latest Press Releases */}
                <h2 className="text-black text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                  Latest Press Releases
                </h2>

                {pressReleases.map((item, i) => (
                  <div key={i} className="flex gap-4 bg-[#111118] px-4 py-3">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px]"
                      style={{ backgroundImage: `url(${item.img})` }}
                    ></div>
                    <div className="flex flex-1 flex-col justify-center">
                      <p className="text-white text-base font-medium leading-normal">
                        {item.title}
                      </p>
                      <p className="text-[#9d9db9] text-sm font-normal leading-normal">
                        {item.date}
                      </p>
                      <p className="text-[#9d9db9] text-sm font-normal leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Featured Press Release */}
                <h2 className="text-black text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                  Featured Press Release
                </h2>
                <div className="p-4">
                  <div className="flex items-stretch justify-between gap-4 rounded-lg">
                    <div className="flex flex-[2_2_0px] flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <p className="text-[#9d9db9] text-sm font-normal leading-normal">
                          {featured.label}
                        </p>
                        <p className="text-black text-base font-bold leading-tight">
                          {featured.title}
                        </p>
                        <p className="text-[#9d9db9] text-sm font-normal leading-normal">
                          {featured.desc}
                        </p>
                      </div>
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#282839] text-white text-sm font-medium leading-normal w-fit">
                        <span className="truncate">Read More</span>
                      </button>
                    </div>
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                      style={{ backgroundImage: `url(${featured.img})` }}
                    ></div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <div className={`${cardBg} rounded-xl p-6 shadow-lg`}>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-600" /> Trending
                Topics
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
                    <span className="font-semibold text-purple-600">
                      {topic}
                    </span>
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
                {["Burna Boy", "Wizkid", "Davido", "Tems"].map(
                  (artist, idx) => (
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
                  )
                )}
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
        </div>
      </div>

      {/* Footer */}
      <footer className={`${cardBg} border-t ${borderClass} mt-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <h4 className="font-bold mb-4">About</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-purple-600">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Email Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Advertise</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Ad Options
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Media Kit
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Submit</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Submit Music
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Artist Profiles
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Forums
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Fan Polls
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 VoiceTrend. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
