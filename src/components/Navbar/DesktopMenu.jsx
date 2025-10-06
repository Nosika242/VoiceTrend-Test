

import { Link } from "react-router-dom";
import { useState } from "react";
import useBlog from "../../hooks/useBlog";
import { TrendingUp, Music, Users, ChevronDown, Link as LinkIcon  } from "lucide-react";

// Dropdown data structure to simplify rendering (optional, but good practice)
const MusicLinks = [
  { to: "/music/latest", label: "Latest Releases" },
  { to: "/music/videos", label: "Videos" },
];

const NewsLinks = [
  { to: "/news/trending", label: "Trending News" },
  { to: "/news/gossip", label: "Gossip" },
];

const ConnectLinks = [
  { to: "/community", label: "Community" },
  { to: "/artists", label: "Artists" },
  { to: "/advertise", label: "Advertise" },
  { to: "/press", label: "Press Releases" },
];

// Helper component for the dropdowns
const DropdownMenu = ({ links, cardBg, borderClass }) => (
  <div
    className={`absolute left-0 mt-2 w-44 rounded-lg shadow-lg ${cardBg} border ${borderClass}`}
  >
    {links.map((link) => (
      <Link
        key={link.to}
        to={link.to}
        className="block px-4 py-2 hover:bg-purple-50 hover:text-purple-600"
      >
        {link.label}
      </Link>
    ))}
  </div>
);

export default function DesktopMenu() {
  const { cardBg, borderClass } = useBlog();
  const [musicHover, setMusicHover] = useState(false);
  const [newsHover, setNewsHover] = useState(false);
    const [connectHover, setConnectHover] = useState(false);

  return (
    <div className="hidden md:flex items-center space-x-2 lg:space-x-6 relative md:text-sm lg:text-base">
      <Link to="/" className="hover:text-purple-600 transition">
        Home
      </Link>
      <Link
        to="/hot-stories"
        className="hover:text-purple-600 transition flex items-center gap-1"
      >
        <TrendingUp className="w-4 h-4" /> Hot Stories
      </Link>

      {/* Music Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setMusicHover(true)}
        onMouseLeave={() => setMusicHover(false)}
      >
        <button className="hover:text-purple-600 transition flex items-center gap-1">
          <Music className="w-4 h-4" /> Music{" "}
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              musicHover ? "rotate-180" : ""
            }`}
          />
        </button>
        {musicHover && (
          <DropdownMenu links={MusicLinks} cardBg={cardBg} borderClass={borderClass} />
        )}
      </div>

      {/* News Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setNewsHover(true)}
        onMouseLeave={() => setNewsHover(false)}
      >
        <button className="hover:text-purple-600 transition flex items-center gap-1">
          News{" "}
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              newsHover ? "rotate-180" : ""
            }`}
          />
        </button>
        {newsHover && (
          <DropdownMenu links={NewsLinks} cardBg={cardBg} borderClass={borderClass} />
        )}
      </div>

      <div
        className="relative"
        onMouseEnter={() => setConnectHover(true)}
        onMouseLeave={() => setConnectHover(false)}
      >
        <button className="hover:text-purple-600 transition flex items-center gap-1">
          <LinkIcon className="w-4 h-4" /> Connect{" "}
          <ChevronDown
            className={`w-4 h-4 transition-transform ${connectHover ? "rotate-180" : ""}`}
          />
        </button>
        {connectHover && (
          // Adjusted position to right-0 so the wide menu doesn't overflow left
          <DropdownMenu links={ConnectLinks} cardBg={cardBg} borderClass={borderClass} /> 
        )}
      </div>
    </div>
  );
}