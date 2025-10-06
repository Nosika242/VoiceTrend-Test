import HotContent from "../home componet/HotContent";
import HeroBanner from "../home componet/HeroBanner";
import UpcomingArtists from "../home componet/UpcomingArtists";
import LatestNews from "../home componet/LatestNews"; 
import MusicTabs from "../home componet/MusicTabs";
import PressContent from "../home componet/PressContent";
import SideBar from "../home componet/SideBar";


export default function Advertise() {
  return (
    <>
    
      <HeroBanner />
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid"> */}
        {/* Left side - Main Content */}
        <div className="lg:col-span-2 space-y-12">
      <HotContent />
      <UpcomingArtists />
      <LatestNews />
      <MusicTabs />
      <PressContent />
      </div>
     
      <SideBar />
      </div>
     
    </>
  );
}
