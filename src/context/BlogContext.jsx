import { createContext, useState } from "react";

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [musicOpen, setMusicOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false); 
  const [isSearchOpen, setIsSearchOpen] = useState(false); //  Toggle Functions

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const toggleMusic = () => setMusicOpen((prev) => !prev);
  const toggleNews = () => setNewsOpen((prev) => !prev);
  const toggleConnect = () => setConnectOpen((prev) => !prev);

  const bgClass = isDarkMode ? "bg-gray-900" : "bg-gray-50";
  const textClass = isDarkMode ? "text-gray-100" : "text-gray-900";
  const cardBg = isDarkMode ? "bg-gray-800" : "bg-white";
  const borderClass = isDarkMode ? "border-gray-700" : "border-gray-200";

  const blogValues = {
    // theme
    isDarkMode,
    toggleTheme, // menu

    isMobileMenuOpen,
    toggleMobileMenu, // dropdowns

    musicOpen,
    toggleMusic,

    newsOpen,
    toggleNews,

    connectOpen,
    toggleConnect, 

    isSearchOpen,
    toggleSearch, 
// styles
    bgClass,
    textClass,
    cardBg,
    borderClass,
  };

  return (
    <BlogContext.Provider value={blogValues}>{children}</BlogContext.Provider>
  );
};

export { BlogContext, BlogProvider };
