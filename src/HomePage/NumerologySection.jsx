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
          <div className="page-content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit non est fugiat culpa officia ratione, natus expedita. Explicabo magni molestias harum esse perspiciatis? Corporis nisi maxime incidunt animi et molestias autem consectetur blanditiis porro excepturi exercitationem fuga enim maiores aliquid odit a rem itaque perferendis molestiae ipsam consequuntur, accusantium vitae. Tempore, architecto aperiam! Distinctio odit eos quos voluptatibus beatae aliquid enim cum nesciunt numquam eius accusamus ratione, voluptatum quas optio possimus ullam ducimus quisquam quod architecto molestiae voluptas ipsa. Accusantium quos odio, inventore earum sequi corporis odit non? Amet ratione illum porro minima, magni debitis repudiandae dolor voluptate odit nemo.</div>
          <button className="know-more-btn" onClick={() => handleModalEnable("numerology")}>
            <p>Know More!</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NumerologySection;
