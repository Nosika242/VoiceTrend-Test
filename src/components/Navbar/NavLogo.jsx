

// components/navbar/NavLogo.jsx
import { Link } from "react-router-dom";
import { Radio } from "lucide-react";

export default function NavLogo() {
  return (
    <div className="flex items-center space-x-2">
      <Radio className="w-8 h-8 text-purple-600" />
      <Link
        to="/"
        className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
      >
        VoiceTrendz
      </Link>
    </div>
  );
}