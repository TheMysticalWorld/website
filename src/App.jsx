import Navbar from "./Navbar";
import OverlayModal from "./HomePage/OverlayModal";
import HeroSection from "./HomePage/HeroSection";
import AboutSection from "./HomePage/AboutSection";
import TarotSection from "./HomePage/TarotSection";
import NumerologySection from "./HomePage/NumerologySection";
import GraphologySection from "./HomePage/GraphologySection";
import CounsellingSection from "./HomePage/CounsellingSection";
import CoursesSection from "./HomePage/CoursesSection";
import PerksSection from "./HomePage/PerksSection";
import FeedbackSection from "./HomePage/FeedbackSection";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="main">
        <div className="background" style={{ "--offset-counter": 0, "--scale-factor": -1 }}></div>
        <div className="background" style={{ "--offset-counter": 1, "--scale-factor": 1 }}></div>
        <div className="background" style={{ "--offset-counter": 2, "--scale-factor": -1 }}></div>
        <div className="background" style={{ "--offset-counter": 3, "--scale-factor": 1 }}></div>
        <div className="background" style={{ "--offset-counter": 4, "--scale-factor": -1 }}></div>
        <div className="background" style={{ "--offset-counter": 5, "--scale-factor": 1 }}></div>
        <div className="background" style={{ "--offset-counter": 6, "--scale-factor": -1 }}></div>
        <div className="background" style={{ "--offset-counter": 7, "--scale-factor": 1 }}></div>
        <div className="background" style={{ "--offset-counter": 8, "--scale-factor": -1 }}></div>
        <div className="background" style={{ "--offset-counter": 9, "--scale-factor": 1 }}></div>
        <div className="background" style={{ "--offset-counter": 10, "--scale-factor": -1 }}></div>
        <div className="background" style={{ "--offset-counter": 11, "--scale-factor": 1 }}></div>
        <Navbar />
        <OverlayModal />
        <HeroSection />
        <AboutSection />
        <TarotSection />
        <NumerologySection />
        <GraphologySection />
        <CounsellingSection />
        <CoursesSection />
        <PerksSection />
        <FeedbackSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
