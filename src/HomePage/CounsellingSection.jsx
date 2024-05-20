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
          <div className="page-content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit non est fugiat culpa officia ratione, natus expedita. Explicabo magni molestias harum esse perspiciatis? Corporis nisi maxime incidunt animi et molestias autem consectetur blanditiis porro excepturi exercitationem fuga enim maiores aliquid odit a rem itaque perferendis molestiae ipsam consequuntur, accusantium vitae. Tempore, architecto aperiam! Distinctio odit eos quos voluptatibus beatae aliquid enim cum nesciunt numquam eius accusamus ratione, voluptatum quas optio possimus ullam ducimus quisquam quod architecto molestiae voluptas ipsa. Accusantium quos odio, inventore earum sequi corporis odit non? Amet ratione illum porro minima, magni debitis repudiandae dolor voluptate odit nemo.</div>
          <button className="know-more-btn" onClick={() => handleModalEnable("counselling")}>
            <p>Know More!</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounsellingSection;
