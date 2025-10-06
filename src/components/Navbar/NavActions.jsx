
import useBlog from "../../hooks/useBlog";
import { Search, X, Sun, Moon, Menu } from "lucide-react";

export default function NavActions() {
  const {
    isDarkMode,
    toggleTheme,
    isSearchOpen,
    toggleSearch,
    isMobileMenuOpen,
    toggleMobileMenu,
  } = useBlog();

  const buttonClasses = (isActive) =>
    `p-2 rounded-lg transition-colors ${
      isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
    } ${isActive ? 'text-purple-600' : ''}`; // Highlight active button

  return (
    <div className="flex items-center space-x-2 sm:space-x-2 lg:space-x-4">
   
      {/* Search Toggle */}
      <button onClick={toggleSearch} className={buttonClasses(isSearchOpen)} aria-label="Toggle Search">
        {isSearchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
      </button>
      
      {/* Theme Toggle */}
      <button onClick={toggleTheme} className={buttonClasses(false)} aria-label="Toggle Theme">
        {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      {/* Mobile Menu Button (Hidden on MD screens) */}
      <button
        onClick={toggleMobileMenu}
        className={`md:hidden ${buttonClasses(isMobileMenuOpen)}`}
        aria-label="Toggle Mobile Menu"
      >
        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
    </div>
  );
}