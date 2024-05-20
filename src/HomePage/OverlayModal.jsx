import { modalData } from "./ModalData.js";

import "./OverlayModal.css";

const handleInquire = () => {
  document.querySelector(".modal-details-head").style.display = "none";
  document.querySelector(".modal-details").innerHTML = "";
  document.querySelector(".modal-inquire-btn-div").style.display = "none";

  var formIFrame = document.createElement("iframe");
  formIFrame.classList.add("form-iFrame");
  formIFrame.setAttribute("src", "https://docs.google.com/forms/d/e/1FAIpQLScKNraC_97qAQ4QopWtWBnF8wG7049OB6wlQFJC9QP9ZDAVzA/viewform?embedded=true");
  formIFrame.setAttribute("width", "100%");
  formIFrame.setAttribute("height", "100%");
  formIFrame.setAttribute("frameBorder", "0");
  formIFrame.setAttribute("marginHeight", "0");
  formIFrame.setAttribute("marginWidth", "0");

  document.querySelector(".modal-card").appendChild(formIFrame);
};

export const handleModalEnable = (id) => {
  var data = modalData[id];
  document.querySelector(".modal-title").innerHTML = data.title;
  document.querySelector(".modal-details-head").style.display = "flex";
  document.querySelector(".modal-inquire-btn-div").style.display = "flex";
  var modalDetails = document.querySelector(".modal-details");
  modalDetails.innerHTML = "";

  data.services.forEach((service) => {
    var serviceDiv = document.createElement("div");
    serviceDiv.classList.add("modal-details-data-row");

    var element = document.createElement("div");
    element.innerHTML = service[0];
    serviceDiv.appendChild(element);

    element = document.createElement("div");
    element.innerHTML = service[1];
    serviceDiv.appendChild(element);

    modalDetails.appendChild(serviceDiv);
  });

  document.querySelector(".modal-bg").classList.add("modal-bg-enabled");
  document.querySelector(".modal-card").classList.add("modal-card-enabled");
};

const AboutSection = () => {
  const handleModalDisable = () => {
    document.querySelector(".modal-bg").classList.remove("modal-bg-enabled");
    document.querySelector(".modal-card").classList.remove("modal-card-enabled");
    if (document.querySelector(".form-iFrame")) document.querySelector(".modal-card").removeChild(document.querySelector(".form-iFrame"));
  };

  document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.key === "Escape" || evt.key === "Esc") {
      handleModalDisable();
    }
  };

  return (
    <>
      <div className="modal-bg" onClick={handleModalDisable}></div>
      <div className="modal-card">
        <div className="modal-head">
          <div className="modal-title"></div>
          <button className="modal-close-btn" onClick={handleModalDisable}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <div className="modal-details-head">
          <div>Service</div>
          <div>Charge</div>
        </div>
        <div className="modal-details"></div>
        <div className="modal-inquire-btn-div">
          <button className="modal-inquire-btn" onClick={handleInquire}>
            Inquire
            <div className="modal-inquire-btn-icon">
              <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
