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
          <div className="page-content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit non est fugiat culpa officia ratione, natus expedita. Explicabo magni molestias harum esse perspiciatis? Corporis nisi maxime incidunt animi et molestias autem consectetur blanditiis porro excepturi exercitationem fuga enim maiores aliquid odit a rem itaque perferendis molestiae ipsam consequuntur, accusantium vitae. Tempore, architecto aperiam! Distinctio odit eos quos voluptatibus beatae aliquid enim cum nesciunt numquam eius accusamus ratione, voluptatum quas optio possimus ullam ducimus quisquam quod architecto molestiae voluptas ipsa. Accusantium quos odio, inventore earum sequi corporis odit non? Amet ratione illum porro minima, magni debitis repudiandae dolor voluptate odit nemo.</div>
          <button className="know-more-btn" onClick={() => handleModalEnable("tarot")}>
            <p>Know More!</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TarotSection;
