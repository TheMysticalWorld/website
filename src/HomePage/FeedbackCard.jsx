import "./FeedbackCard.css";

const FeedbackCard = ({ name, rating, experience }) => {
  return (
    <div className="feedback-card">
      <div className="feedback-header">
        <div className="feedback-profile-picture">{name[0]}</div>
        <div className="feedback-name-rating-div">
          <div className="feedback-name">{name}</div>
          <div className="feedback-rating">
            {[...Array(rating)].map((item, index) => (
              <i className="fa fa-star" key={index}></i>
            ))}
          </div>
        </div>
      </div>
      <div className="feedback-experience">{experience}</div>
    </div>
  );
};

export default FeedbackCard;
