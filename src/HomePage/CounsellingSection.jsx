import counsellingVector from "../assets/CounsellingVector.svg";

import { handleModalEnable } from "./OverlayModal";

import "./CounsellingSection.css";

const CounsellingSection = () => {
  return (
    <div className="page-layout" id="counselling">
      <h1 className="page-title">
        Counselling
        <div className="page-title-underline"></div>
      </h1>
      <div className="page-inner page-inner-flip">
        <div className="float">
          <img src={counsellingVector} alt="Counselling Vector Image" className="counselling-vector-img" />
        </div>
        <div className="page-data">
        <div className="page-content">
            Counseling provides professional guidance to address personal challenges and improve well-being.
            <br />
            <br />
            Marriage counseling helps couples enhance communication and resolve conflicts.
            <br />
            <br />
            Child counseling supports children's emotional and behavioral development.
            <br />
            <br />
            Career counseling assists in making informed career choices and navigating job-related issues.
            <br />
            <br />
            Relationship counseling strengthens interpersonal dynamics and resolves conflicts.
            <br />
            <br />
            Counseling clarifies issues, guides decisions, and fosters self-awareness, helping individuals and families navigate life's challenges with greater confidence and insight.
          </div>
          <button className="know-more-btn" onClick={() => handleModalEnable("counselling")}>
            <p>Know More!</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounsellingSection;
