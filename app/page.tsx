import Navbar from "./components/navbar";
import Features from "./components/features";
import AnnouncementBar from "./components/AnnouncementBar";
import Hero from "./components/Hero";
import CreatorPaths from "./components/CreatorsPath";
import FollowUs from "./components/FollowUs";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <div className="relative">
        <Navbar />
        <Hero />
      </div>
      <Features />
      <CreatorPaths />
      <FollowUs />
      <Footer />
    </>
  );
}
