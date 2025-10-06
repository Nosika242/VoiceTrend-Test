import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import useBlog from "./hooks/useBlog";

// Pages
import Home from "./pages/Home";
import HotStoriesPage from "./pages/HotStoriesPage";
import NewsPage from "./pages/NewsPage";
import ArtistsPage from "./pages/ArtistsPage";
import ArtistProfile from "./pages/ArtistProfile";
import PressReleaseDetail from "./pages/PressReleaseDetail";
import SubmitMusic from "./pages/SubmitMusic";
import Advertise from "./pages/Advertise";
import CommunityPage from "./pages/CommunityPage";
import PageNotFound from "./pages/PageNotFound";


export default function ThemedApp() {
  const { bgClass, textClass } = useBlog();

  return (
    <div
      className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-300`}
    >
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hot-stories" element={<HotStoriesPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/artists" element={<ArtistsPage />} />
          <Route path="/artist/:id" element={<ArtistProfile />} />
          <Route path="/press/:id" element={<PressReleaseDetail />} />
          <Route path="/submit" element={<SubmitMusic />} />
          <Route path="/advertise" element={<Advertise />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="*" element={ <PageNotFound />}  />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
