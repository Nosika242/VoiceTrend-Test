import React from "react";

import { Link } from "react-router-dom";

export default function LinksPage() {
  
  return (
    <>
  {/* Column 2: about */}
      <div>
        <h4 className="font-bold mb-5 text-lg">About</h4>
        <ul className="space-y-3 text-sm">
          <li>
            <Link
              to="/about"
              className="hover:text-purple-600 transition-colors"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/team"
              className="hover:text-purple-600 transition-colors"
            >
              Our Team
            </Link>
          </li>
          <li>
            <Link
              to="/careers"
              className="hover:text-purple-600 transition-colors"
            >
              Careers
            </Link>
          </li>
        </ul>
      </div>

      {/* Column 3: Contact  */}
      <div>
        <h4 className="font-bold mb-5 text-lg">Contact</h4>
        <ul className="space-y-3 text-sm">
          <li>
            <Link
              to="/contact"
              className="hover:text-purple-600 transition-colors"
            >
              Email Us
            </Link>
          </li>
          <li>
            <Link
              to="/support"
              className="hover:text-purple-600 transition-colors"
            >
              Support
            </Link>
          </li>
        </ul>
      </div>

      {/* Column 4: Advertise/Submit  */}
      <div className="col-span-2 md:col-span-1">
        <h4 className="font-bold mb-5 text-lg">Submissions</h4>
        <ul className="space-y-3 text-sm">
          <li>
            <Link
              to="/submit/music"
              className="hover:text-purple-600 transition-colors"
            >
              Submit Music
            </Link>
          </li>
          <li>
            <Link
              to="/submit/profile"
              className="hover:text-purple-600 transition-colors"
            >
              Artist Profiles
            </Link>
          </li>
          <li className="pt-2">
            <Link
              to="/advertise"
              className="font-bold hover:text-purple-600 transition-colors"
            >
              Advertise
            </Link>
          </li>
        </ul>
      </div>

      {/* Column 5: Legal  */}
      <div>
        <h4 className="font-bold mb-5 text-lg">Legal</h4>
        <ul className="space-y-3 text-sm">
          <li>
            <Link
              to="/privacy"
              className="hover:text-purple-600 transition-colors"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              to="/terms"
              className="hover:text-purple-600 transition-colors"
            >
              Terms of Service
            </Link>
          </li>
        </ul>
      </div>

      {/* Column 6: Community  */}
      <div>
        <h4 className="font-bold mb-5 text-lg">Community</h4>
        <ul className="space-y-3 text-sm">
          <li>
            <Link
              to="/forums"
              className="hover:text-purple-600 transition-colors"
            >
              Forums
            </Link>
          </li>
          <li>
            <Link
              to="/polls"
              className="hover:text-purple-600 transition-colors"
            >
              Fan Polls
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
