import certificateImg from "../assets/CertificateImg.png";

import "./PerksSection.css";

const CounsellingSection = () => {
  return (
    <div className="page-layout" id="perks">
      <h1 className="page-title">
        Perks & benefits
        <div className="page-title-underline"></div>
      </h1>
      <div className="page-inner perks-inner">
        <h1>Certificate:</h1>
        <div className="float">
          <img src={certificateImg} alt="Certificate Image" className="perk-certificate-img" />
        </div>
      </div>
    </div>
  );
};

export default CounsellingSection;
