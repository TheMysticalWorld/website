import { feedbackData } from "./FeedbackData.js";

import FeedbackCard from "./FeedbackCard";

import "./FeedbackSection.css";

const FeedbackSection = () => {
  return (
    <div className="page-layout feedback-page-layout">
      <h1 className="page-title">
        Feedback:
        <div className="page-title-underline"></div>
      </h1>
      <div className="feedback-carousel-div">
        <div className="feedback-carousel">
          {feedbackData.map((feedback, index) => {
            return <FeedbackCard name={feedback.name} rating={feedback.rating} experience={feedback.experience} key={index} />;
          })}
          {feedbackData.map((feedback, index) => {
            return <FeedbackCard name={feedback.name} rating={feedback.rating} experience={feedback.experience} key={index} />;
          })}
        </div>
      </div>
      <a className="know-more-btn" href="https://forms.gle/jeyjTXa2NhK7uqQa7" target="_blank">
        <p>Give feedback!</p>
      </a>
    </div>
  );
};

export default FeedbackSection;
