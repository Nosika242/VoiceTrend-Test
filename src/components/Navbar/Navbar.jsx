import useBlog from "../../hooks/useBlog";

import NavLogo from "./NavLogo";
import DesktopMenu from "./DesktopMenu";
import NavActions from "./NavActions";
import SearchInput from "./SearchInput";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const { cardBg, borderClass } = useBlog();

  return (
    <nav
      className={`sticky top-0 z-50 ${cardBg} border-b ${borderClass} backdrop-blur-lg bg-opacity-90`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLogo />
          <DesktopMenu />
          
          {/* Right Actions (Search, Theme, Mobile Toggle) */}
          <NavActions />
        </div>
      </div>

      {/* Search Input (conditionally rendered outside the main container) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SearchInput />
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MobileMenu />
      </div>
    </nav>
  );
}
