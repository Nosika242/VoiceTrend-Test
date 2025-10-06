import React from "react";
import useBlog from "../../hooks/useBlog";
import { Link } from "react-router-dom";
import { Radio } from "lucide-react";
import LinksPage from "./LinksPage";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  const { cardBg, borderClass } = useBlog();

  return (
    <footer className={`${cardBg} border-t ${borderClass} mt-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 lg:grid-cols-6 md:gap-x-8 lg:gap-x-12">
          {/* Column 1: VoiceTrend Logo and Social Links (Combined for better mobile layout) */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Radio className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                VoiceTrend
              </span>
            </Link>

            <p className="text-sm text-gray-400">
              Africa's premier music entertainment platform.
            </p>
            <span className="text-sm text-gray-400">connect with us:</span>

            {/* Social Icons */}
            <SocialIcons />
          </div>
           {/* link pages  */}
          <LinksPage />
        </div>

        {/* Footer Bottom: Copyright */}
        <div
          className={`border-t ${borderClass} mt-12 pt-8 text-center text-sm`}
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} VoiceTrendz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
