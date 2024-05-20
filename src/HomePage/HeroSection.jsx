import heroBg from "../assets/Hero-bg.webp";
import heroMg from "../assets/Hero-mg.webp";
import heroFg from "../assets/Hero-fg.webp";
import logo from "../assets/Logo.png";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-bg-gradient"></div>
        <img src={heroBg} className="hero-img hero-bg" alt="Hero Section" />
        <img src={heroMg} className="hero-img hero-mg" alt="Hero Section" />
        <img src={heroFg} className="hero-img hero-fg" alt="Hero Section" />
        <img src={logo} className="hero-img hero-logo float" alt="Hero Section" />
        <svg viewBox="0 0 130 130" className="hero-title-svg">
          <path id="MyPath" fill="none" d="m15,45c40,33 96,3 96,3" />
          <text>
            <textPath href="#MyPath" className="hero-title">
              &nbsp;The Mystical World
            </textPath>
          </text>
        </svg>
        <div className="hero-sub-title">Uncover your future with tarot, numerology, graphology, counseling, and more—all under one mystical roof!</div>
        <div className="hero-callback float">
          <i className="fa fa-angle-down" aria-hidden="true"></i>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
