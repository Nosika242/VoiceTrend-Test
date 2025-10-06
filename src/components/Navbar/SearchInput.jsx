
import useBlog from "../../hooks/useBlog";

export default function SearchInput() {
  const { isSearchOpen, isDarkMode, borderClass } = useBlog();

  if (!isSearchOpen) return null;

  return (
    <div className={`py-2 border-t shadow-md ${borderClass}`}>
      <input
        type="search"
        placeholder="Search for artists, songs, news..."
        className={`w-full p-2 rounded-lg focus:outline-none focus:ring-3 focus:ring-purple-600 ${
          isDarkMode
            ? "bg-gray-800 text-white placeholder-gray-400"
            : "bg-white text-gray-900 placeholder-gray-500"
        }`}
      />
    </div>
  );
}