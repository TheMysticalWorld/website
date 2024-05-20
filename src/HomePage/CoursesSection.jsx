import courseGraphlologyImg from "../assets/CourseGraphology.png";
import courseTarotImg from "../assets/CourseTarotCards.webp";

import { handleModalEnable } from "./OverlayModal";

import "./CoursesSection.css";

const CoursesSection = () => {
  return (
    <div className="page-layout courses-page-layout" id="courses">
      <h1 className="page-title">
        Courses
        <div className="page-title-underline"></div>
      </h1>
      <div className="page-inner courses-page">
        <div className="float" style={{ "--float-offset": 12 + "px" }}>
          <div className="course-card">
            <div className="course-title">Tarot Professional Course</div>
            <div className="course-feature">
              <img src={courseTarotImg} alt="Tarot Cards Image" className="course-tarot-img" />
            </div>
            <div>
              <span className="course-length-label">Course Length: </span>
              <span className="course-length">
                <em>7 weeks</em>
              </span>
            </div>
            <div className="course-details">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui provident corrupti atque consectetur ea suscipit nulla molestias eveniet amet quo nihil eum, ex debitis. Tempora libero minus assumenda quas! Cumque natus illum nam, corporis assumenda nisi minus numquam earum aut. Voluptate magnam tempore optio. Cumque ipsa omnis deleniti quis quas?</div>
            <div className="course-btn-div">
              <button className="know-more-btn" style={{ "--btn-color": "#918983" }} onClick={() => handleModalEnable("tarotCourse")}>
                <p>Know More!</p>
              </button>
            </div>
          </div>
        </div>
        <div className="float" style={{ "--float-offset": 15 + "px" }}>
          <div className="course-card">
            <div className="course-title">Graphology Course</div>
            <div className="course-feature">
              <img src={courseGraphlologyImg} alt="Graphology Image" className="course-graphology-img" />
            </div>
            <div>
              <span className="course-length-label">Course Length: </span>
              <span className="course-length">
                <em>7 weeks</em>
              </span>
            </div>
            <div className="course-details">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui provident corrupti atque consectetur ea suscipit nulla molestias eveniet amet quo nihil eum, ex debitis. Tempora libero minus assumenda quas! Cumque natus illum nam, corporis assumenda nisi minus numquam earum aut. Voluptate magnam tempore optio. Cumque ipsa omnis deleniti quis quas?</div>
            <div className="course-btn-div">
              <button className="know-more-btn" style={{ "--btn-color": "#918983" }} onClick={() => handleModalEnable("graphologyCourse")}>
                <p>Know More!</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
