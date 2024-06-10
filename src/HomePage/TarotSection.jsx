import tarotCard1 from "../assets/TarotCard1.png";
import tarotCard2 from "../assets/TarotCard2.png";
import tarotCard3 from "../assets/TarotCard3.png";
import tarotCard4 from "../assets/TarotCard4.png";
import tarotCard5 from "../assets/TarotCard5.png";

import { handleModalEnable } from "./OverlayModal";

import "./TarotSection.css";

const TarotSection = () => {
  return (
    <div className="page-layout" id="tarot">
      <h1 className="page-title">
        Tarot Reading
        <div className="page-title-underline"></div>
      </h1>
      <div className="page-inner">
        <div className="float">
          <div className="view-more-cards-div">
            <div className="view-more-cards">
              <div className="view-more-card" style={{ backgroundImage: `url(${tarotCard1})` }}></div>
              <div className="view-more-card" style={{ backgroundImage: `url(${tarotCard2})` }}></div>
              <div className="view-more-card" style={{ backgroundImage: `url(${tarotCard3})` }}></div>
              <div className="view-more-card" style={{ backgroundImage: `url(${tarotCard4})` }}></div>
              <div className="view-more-card" style={{ backgroundImage: `url(${tarotCard5})` }}></div>
            </div>
          </div>
        </div>
        <div className="page-data">
          <div className="page-content">Tarot card reading uses a deck of 78 cards to provide insight and guidance. Each card’s symbols and meanings help clarify personal issues, support decision-making, and promote self-understanding. Tarot readings reveal hidden influences, suggest potential outcomes, and inspire personal growth, helping clients navigate life’s challenges with confidence and insight.</div>
          <button className="know-more-btn" onClick={() => handleModalEnable("tarot")}>
            <p>Know More!</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TarotSection;
