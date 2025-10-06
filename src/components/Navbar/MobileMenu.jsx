import { Link } from "react-router-dom";
import useBlog from "../../hooks/useBlog";
import { ChevronDown } from "lucide-react";

// Link arrays (can be imported from a central config file if needed)
const mainLinks = [
  { to: "/", label: "Home" },
  { to: "/hot-stories", label: "Hot Stories" },
 
];

export default function MobileMenu() {
  const {
    isMobileMenuOpen,
    toggleMobileMenu,  //  toggle function
      musicOpen, 
    toggleMusic, //  toggle function
    newsOpen, 
    toggleNews,   //  toggle function
    connectOpen,
    toggleConnect,  //  toggle function
  } = useBlog();

  if (!isMobileMenuOpen) return null;

  const handleLinkClick = () => {
    toggleMobileMenu();    // Closes the menu after clicking a link
  };

  const ConnectLinks = [
    { to: "/community", label: "Community" },
    { to: "/artists", label: "Artists" },
    { to: "/advertise", label: "Advertise" },
    { to: "/press", label: "Press Releases" },
  ];

  return (
    <div className="md:hidden py-4 space-y-2">
  
      {mainLinks.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          onClick={handleLinkClick}
          className="block py-2 hover:text-purple-600"
        >
          {link.label}
        </Link>
      ))}

      {/* Music expandable */}
      <div>
        <button
          onClick={toggleMusic}
          className="flex justify-between items-center w-full py-2"
        >
          Music & Videos
          <ChevronDown
            className={`w-4 h-4 transform transition ${
              musicOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {musicOpen && (
          <div className="pl-4">
            <Link
              to="/music/latest"
              onClick={handleLinkClick}
              className="block py-2 hover:text-purple-600"
            >
              Latest Releases
            </Link>
            <Link
              to="/music/videos"
              onClick={handleLinkClick}
              className="block py-2 hover:text-purple-600"
            >
              Videos
            </Link>
          </div>
        )}
      </div>

      {/* News expandable */}
      <div>
        <button
          onClick={toggleNews}
          className="flex justify-between items-center w-full py-2"
        >
          News & Entertainment
          <ChevronDown
            className={`w-4 h-4 transform transition ${
              newsOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {newsOpen && (
          <div className="pl-4">
            <Link
              to="/news/trending"
              onClick={handleLinkClick}
              className="block py-2 hover:text-purple-600"
            >
              Trending News
            </Link>
            <Link
              to="/news/gossip"
              onClick={handleLinkClick}
              className="block py-2 hover:text-purple-600"
            >
              Gossip
            </Link>
          </div>
        )}
      </div>

      <div>
        <button
          onClick={toggleConnect} 
          className="flex justify-between items-center w-full py-2"
        >
          Connect & Resources
          <ChevronDown
            className={`w-4 h-4 transform transition ${
              connectOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {connectOpen && (
          <div className="pl-4">
            {ConnectLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={handleLinkClick}
                className="block py-2 hover:text-purple-600"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
