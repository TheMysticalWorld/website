import aboutImg from "../assets/AboutImg.png";

import "./AboutSection.css";

const AboutSection = () => {
  return (
    <div className="page-layout" id="about">
      <h1 className="page-title">
        About me
        <div className="page-title-underline"></div>
      </h1>
      <div className="page-inner page-inner-flip about-inner">
        <div className="float">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="about-svg1">
            <path fill="#F2F4F8" d="M64.9,-23.5C70.6,-3.7,52.3,21.6,30.6,35.9C8.9,50.1,-16.2,53.5,-33,42.1C-49.8,30.6,-58.4,4.4,-51.5,-17.1C-44.6,-38.6,-22.3,-55.5,3.6,-56.6C29.6,-57.8,59.2,-43.4,64.9,-23.5Z" transform="translate(100 100)" />
          </svg>
          <img src={aboutImg} alt="Me!" className="about-img" />
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="about-svg2">
            <path fill="#E8DAFF" d="M67.2,-24.5C73.4,-2.5,55.5,24.6,30.9,42.5C6.3,60.3,-25,68.9,-45.3,55.8C-65.5,42.6,-74.7,7.7,-65.3,-18.5C-55.9,-44.8,-27.9,-62.3,1.3,-62.7C30.5,-63.1,60.9,-46.4,67.2,-24.5Z" transform="translate(100 100)" />
          </svg>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="about-svg3">
            <path fill="#D0E2FF" d="M39,-16.6C44.6,4.8,39.4,25.9,25.1,36.8C10.8,47.7,-12.4,48.4,-30.6,36.6C-48.7,24.7,-61.6,0.2,-55.7,-21.6C-49.7,-43.4,-24.9,-62.5,-4.1,-61.1C16.6,-59.8,33.3,-38,39,-16.6Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="page-data">
          <div className="page-content">I am an astrologer in India, i love to help my clients when they are in need. All my readings are spiritually guided and I work according to the astrology ethics to bring stability in the lives of people. My main motive is to bring clarity and insights regarding life and also to empower with spiritual knowledge of different energies. I help my clients with marriage, career and business related problems. The remedies I provide are very easy and have proven to be effective most of the times. My clients have always been satisfied with the reading they got and the remedies have also worked well for them.</div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
