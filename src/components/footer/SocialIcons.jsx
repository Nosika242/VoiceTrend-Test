import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const SocialIconLink = ({ to, Icon, label, className }) => (
  <a
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    // className="text-gray-400 hover:text-purple-600 transition-colors duration-200"
    className={`p-2 flex items-center justify-center text-white hover:opacity-75 transition-opacity ${
      className || ""
    }`}
  >
    <Icon className="w-6 h-6" />
  </a>
);

export default function SocialIcons() {
  return (
    <div className="flex space-x-3 mt-4 ">
      <SocialIconLink
        to="https://facebook.com"
        Icon={Facebook}
        label="Facebook"
        className="border-2 border-slate-400 rounded-full bg-gradient-to-r from-blue-600 to-pink-600"
      />
      <SocialIconLink
        to="https://twitter.com"
        Icon={Twitter}
        label="Twitter"
        className="border-2 border-gray-400 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-purple-600"
      />
      <SocialIconLink
        to="https://instagram.com"
        Icon={Instagram}
        label="Instagram"
        className="border-2 border-gray-400 rounded-full hover:bg-purple-600 bg-gradient-to-r from-amber-600 to-pink-600 "
      />
      <SocialIconLink
        to="https://youtube.com"
        Icon={Youtube}
        label="YouTube"
        className="border-2 border-gray-400 rounded-full hover:bg-purple-600 bg-gradient-to-r from-purple-600 to-pink-600 "
      />
    </div>
  );
}
