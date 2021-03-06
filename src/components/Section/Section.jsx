import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line import/extensions
import Statistics from "../Statistics/Statistics.jsx";
// eslint-disable-next-line import/extensions
import Feedback from "../Feedback/Feedback.jsx";

const Section = ({
  good,
  neutral,
  bad,
  countPositiveFeedbackPercentage,
  countTotalFeedback,
  options,
  onLeaveFeedback,
  title
}) => {
  return (
    <>
      <h1>{title}</h1>
      <Feedback options={options} onLeaveFeedback={onLeaveFeedback} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
        countTotalFeedback={countTotalFeedback}
      />
    </>
  );
};
Section.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  title: PropTypes.string
};
Section.defaultProps = {
  title: "Statistics"
};
export default Section;
