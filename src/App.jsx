import React, { useState } from 'react';
import { Search, Moon, Sun, Menu, X, TrendingUp, Music, Video, Users, Radio, ChevronRight, Play, Clock, Eye, Heart, Share2 } from 'lucide-react';

export default function VoicenuteHomepage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const hotStories = [
    { id: 1, title: "Burna Boy's Secret Collaboration Leaked", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop", views: "45K", time: "2h ago" },
    { id: 2, title: "Wizkid Spotted in Lagos Studio", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop", views: "32K", time: "5h ago" },
    { id: 3, title: "Davido Announces New Album Drop", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=600&fit=crop", views: "28K", time: "8h ago" },
    { id: 4, title: "Tems Wins International Award", image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop", views: "21K", time: "12h ago" }
  ];

  const latestNews = [
    { title: "New Afrobeats Festival Announced for December", excerpt: "Major artists confirmed for Lagos mega event", time: "1h ago", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop" },
    { title: "Nigerian Music Streams Hit All-Time High", excerpt: "Industry reports 200% growth in digital consumption", time: "3h ago", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop" },
    { title: "Rising Star Signs Major Record Deal", excerpt: "Fresh talent secures international distribution", time: "6h ago", image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop" },
    { title: "Music Video Breaks YouTube Records", excerpt: "10 million views in first 24 hours", time: "9h ago", image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=300&fit=crop" }
  ];

  const trendingTopics = ["#BurnaBoy", "#Afrobeats2025", "#WizkidFC", "#NewMusicFriday", "#TemsVibes"];

  const bgClass = isDarkMode ? 'bg-gray-900' : 'bg-gray-50';
  const textClass = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const cardBg = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const borderClass = isDarkMode ? 'border-gray-700' : 'border-gray-200';

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-300`}>
      {/* Top Navigation Bar */}
      <nav className={`sticky top-0 z-50 ${cardBg} border-b ${borderClass} backdrop-blur-lg bg-opacity-90`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Radio className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Voicenute
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="hover:text-purple-600 transition">Home</a>
              <a href="#" className="hover:text-purple-600 transition flex items-center gap-1">
                <TrendingUp className="w-4 h-4" /> Hot Stories
              </a>
              <a href="#" className="hover:text-purple-600 transition flex items-center gap-1">
                <Music className="w-4 h-4" /> Music & Video
              </a>
              <a href="#" className="hover:text-purple-600 transition">News</a>
              <a href="#" className="hover:text-purple-600 transition">Artists</a>
              <a href="#" className="hover:text-purple-600 transition flex items-center gap-1">
                <Users className="w-4 h-4" /> Community
              </a>
              <a href="#" className="hover:text-purple-600 transition">Advertise</a>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <button className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <Search className="w-5 h-5" />
              </button>
              <button onClick={toggleTheme} className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button onClick={toggleMobileMenu} className={`md:hidden p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              <a href="#" className="block py-2 hover:text-purple-600">Home</a>
              <a href="#" className="block py-2 hover:text-purple-600">Hot Stories</a>
              <a href="#" className="block py-2 hover:text-purple-600">Music & Video</a>
              <a href="#" className="block py-2 hover:text-purple-600">News</a>
              <a href="#" className="block py-2 hover:text-purple-600">Artists</a>
              <a href="#" className="block py-2 hover:text-purple-600">Community</a>
              <a href="#" className="block py-2 hover:text-purple-600">Advertise</a>
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
              Industry experts reveal game-changing trends that will reshape the African music scene
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
                <a href="#" className="text-purple-600 hover:text-purple-700 flex items-center gap-1">
                  View All <ChevronRight className="w-4 h-4" />
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {hotStories.map(story => (
                  <div key={story.id} className={`${cardBg} rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer group`}>
                    <div className="relative h-48 overflow-hidden">
                      <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                        <div className="p-4 w-full">
                          <div className="flex items-center gap-3 text-white text-sm">
                            <span className="flex items-center gap-1"><Eye className="w-4 h-4" /> {story.views}</span>
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {story.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg group-hover:text-purple-600 transition">{story.title}</h3>
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
                  <div key={idx} className={`${cardBg} rounded-xl p-4 shadow hover:shadow-lg transition cursor-pointer flex gap-4`}>
                    <img src={news.image} alt={news.title} className="w-24 h-24 rounded-lg object-cover flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1 hover:text-purple-600 transition">{news.title}</h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>{news.excerpt}</p>
                      <span className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>{news.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-3 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-lg font-semibold transition">
                Load More Stories
              </button>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <div className={`${cardBg} rounded-xl p-6 shadow-lg`}>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-600" /> Trending Topics
              </h3>
              <div className="space-y-2">
                {trendingTopics.map((topic, idx) => (
                  <div key={idx} className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} cursor-pointer transition`}>
                    <span className="font-semibold text-purple-600">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fan Poll */}
            <div className={`${cardBg} rounded-xl p-6 shadow-lg`}>
              <h3 className="text-xl font-bold mb-4">Fan Poll</h3>
              <p className="mb-4 font-semibold">Who had the best album this year?</p>
              <div className="space-y-3">
                {['Burna Boy', 'Wizkid', 'Davido', 'Tems'].map((artist, idx) => (
                  <button key={idx} className={`w-full p-3 rounded-lg text-left ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition`}>
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
                <button className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">Twitter</button>
                <button className="p-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition">Instagram</button>
                <button className="p-3 bg-blue-800 hover:bg-blue-900 text-white rounded-lg transition">Facebook</button>
                <button className="p-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition">YouTube</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Artists Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Upcoming Artists</h2>
          <a href="#" className="text-purple-600 hover:text-purple-700 flex items-center gap-1">
            View All <ChevronRight className="w-4 h-4" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Ayra Starr", genre: "Afrobeats", bio: "Rising star with powerful vocals", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
            { name: "Omah Lay", genre: "Afrobeats", bio: "Soulful melodies and unique sound", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
            { name: "Teni", genre: "Afrobeats", bio: "Energetic performer and songwriter", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
            { name: "Fireboy DML", genre: "R&B", bio: "Smooth vocals and romantic lyrics", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" }
          ].map((artist, idx) => (
            <div key={idx} className={`${cardBg} rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer group`}>
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
      </div>

      {/* Music & Videos Enhanced Section */}
      <div className={`${cardBg} border-t ${borderClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold mb-8">Music & Videos</h2>
          
          <div className="flex gap-4 mb-8 overflow-x-auto">
            {['New Releases', 'Albums', 'Mixtapes', 'Videos'].map((tab, idx) => (
              <button key={idx} className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition ${idx === 0 ? 'bg-purple-600 text-white' : `${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}`}>
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: "Love Damini", artist: "Burna Boy", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop" },
              { title: "Made in Lagos", artist: "Wizkid", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop" },
              { title: "Timeless", artist: "Davido", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop" },
              { title: "Born to Shine", artist: "Tems", image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop" },
              { title: "Rave & Roses", artist: "Rema", image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300&h=300&fit=crop" },
              { title: "Work of Art", artist: "Asake", image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=300&h=300&fit=crop" }
            ].map((item, idx) => (
              <div key={idx} className={`${cardBg} rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer group`}>
                <div className="relative aspect-square overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition flex items-center justify-center">
                    <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition fill-white" />
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-sm truncate">{item.title}</h3>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} truncate`}>{item.artist}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Press Releases Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Press Releases</h2>
              <a href="#" className="text-purple-600 hover:text-purple-700 flex items-center gap-1">
                View All <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="space-y-4">
              {[
                { headline: "Burna Boy Announces 'Love Damini' World Tour 2025", date: "Oct 3, 2025", summary: "Grammy-winning artist Burna Boy today announced his highly anticipated world tour spanning 40 cities across five continents...", source: "Official Statement" },
                { headline: "Wizkid Partners with Global Fashion Brand", date: "Oct 2, 2025", summary: "International superstar Wizkid has signed an exclusive partnership deal with luxury fashion house...", source: "Label PR" },
                { headline: "New Music Festival Coming to Lagos in December", date: "Oct 1, 2025", summary: "Organizers announce star-studded lineup for the inaugural African Music Summit featuring top artists from across the continent...", source: "Event PR" },
                { headline: "Davido Foundation Launches Youth Empowerment Program", date: "Sep 30, 2025", summary: "The Davido Foundation today unveiled a new initiative aimed at empowering young musicians and creatives...", source: "Foundation" }
              ].map((press, idx) => (
                <div key={idx} className={`${cardBg} rounded-xl p-6 shadow-lg hover:shadow-xl transition cursor-pointer border-l-4 border-purple-600`}>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2 block`}>
                        {press.date} • {press.source}
                      </span>
                      <h3 className="text-xl font-bold mb-2 hover:text-purple-600 transition">{press.headline}</h3>
                      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm line-clamp-2`}>{press.summary}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 flex-shrink-0 text-purple-600" />
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <button className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'}`}>
                      <Share2 className="w-3 h-3" /> Share
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className={`${cardBg} rounded-xl p-6 shadow-lg mt-6 text-center`}>
              <h3 className="text-xl font-bold mb-3">Submit Your Press Release</h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                Labels, artists, and PR teams can submit official announcements
              </p>
              <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition">
                Submit Press Release
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className={`${cardBg} rounded-xl p-6 shadow-lg sticky top-20`}>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-600" /> Featured Press Release
              </h3>
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=400&fit=crop" alt="Featured" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end p-4">
                  <span className="text-white font-bold text-sm">MAJOR ANNOUNCEMENT</span>
                </div>
              </div>
              <h4 className="font-bold mb-2">Afrobeats Goes Global: Major Label Partnership Announced</h4>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-3`}>
                Historic deal to bring African music to worldwide audiences through strategic partnership...
              </p>
              <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition">
                Read Full Release
              </button>
            </div>

            <div className={`${cardBg} rounded-xl p-6 shadow-lg`}>
              <h3 className="text-xl font-bold mb-4">Most Recent Statements</h3>
              <div className="space-y-3">
                {['Artist Tour Update', 'Label Signing News', 'Award Nomination', 'Charity Initiative'].map((item, idx) => (
                  <div key={idx} className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} cursor-pointer transition`}>
                    <p className="font-semibold text-sm">{item}</p>
                    <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{idx + 1}h ago</span>
                  </div>
                ))}
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
                <li><a href="#" className="hover:text-purple-600">About Us</a></li>
                <li><a href="#" className="hover:text-purple-600">Our Team</a></li>
                <li><a href="#" className="hover:text-purple-600">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-purple-600">Email Us</a></li>
                <li><a href="#" className="hover:text-purple-600">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Advertise</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-purple-600">Ad Options</a></li>
                <li><a href="#" className="hover:text-purple-600">Media Kit</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Submit</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-purple-600">Submit Music</a></li>
                <li><a href="#" className="hover:text-purple-600">Artist Profiles</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-purple-600">Forums</a></li>
                <li><a href="#" className="hover:text-purple-600">Fan Polls</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 Voicenute. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}