import { handleModalEnable } from "./OverlayModal";

import "./GraphologySection.css";

const GraphologySection = () => {
  return (
    <div className="page-layout" id="graphology">
      <h1 className="page-title">
        Graphology
        <div className="page-title-underline"></div>
      </h1>
      <div className="page-inner">
        <div className="float">
          <div className="graphology-text-div">
            <div className="graphology-text1">Unveil Your Inner Self</div>
            <div className="graphology-text2">Through Handwriting</div>
          </div>
        </div>
        <div className="page-data">
          <div className="page-content">Graphology is the analysis of handwriting to gain insights into personality and behavior. By examining writing style, letter shapes, and spacing, graphology reveals traits and tendencies. This practice can clarify personal issues, guide decisions, and enhance self-awareness. Graphology uncovers patterns, suggests potential outcomes, and inspires personal growth, helping individuals navigate life with greater confidence and insight.</div>
          <button className="know-more-btn" onClick={() => handleModalEnable("graphology")}>
            <p>Know More!</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GraphologySection;
