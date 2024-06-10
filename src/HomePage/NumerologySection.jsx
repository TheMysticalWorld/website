import { handleModalEnable } from "./OverlayModal";

import "./NumerologySection.css";

const NumerologySection = () => {
  return (
    <div className="page-layout" id="numerology">
      <h1 className="page-title">
        Numerology
        <div className="page-title-underline"></div>
      </h1>
      <div className="page-inner page-inner-flip">
        <div className="float">
          <div className="numerology-num-div">
            <div className="numerology-num1 float" style={{ "--float-offset": 14 + "px" }}>
              1
            </div>
            <div className="numerology-num4 float" style={{ "--float-offset": 20 + "px" }}>
              4
            </div>
            <div className="numerology-num5 float" style={{ "--float-offset": 15 + "px" }}>
              5
            </div>
            <div className="numerology-num7 float" style={{ "--float-offset": 18 + "px" }}>
              7
            </div>
          </div>
        </div>
        <div className="page-data">
          <div className="page-content">Numerology is the study of numbers' mystical significance and their influence on life. By analyzing numbers in your birth date and name, numerology offers insights into personality, strengths, and life path. This practice can help clarify personal issues, guide decisions, and foster self-awareness. Numerology reveals patterns, suggests potential outcomes, and inspires personal growth, helping individuals navigate life with greater confidence and insight.</div>
          <button className="know-more-btn" onClick={() => handleModalEnable("numerology")}>
            <p>Know More!</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NumerologySection;
