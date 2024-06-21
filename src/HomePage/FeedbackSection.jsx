const FeedbackSection = () => {
  return (
    <div className="page-layout" style={{ height: "20vh", display: "flex", alignItems: "center", gap: "5em" }}>
      <h1 className="page-title">
        Feedback:
        <div className="page-title-underline"></div>
      </h1>
      <a className="know-more-btn" href="https://forms.gle/jeyjTXa2NhK7uqQa7" target="_blank">
        <p>Give feedback!</p>
      </a>
    </div>
  );
};

export default FeedbackSection;
