import React from "react";
import PropTypes from "prop-types";
import StatComponent from "./StatComponent.jsx";
import Notification from "../Notifications/Notifications.jsx";

const Statistics = ({
  good,
  neutral,
  bad,
  countPositiveFeedbackPercentage,
  countTotalFeedback
}) => {
  return (
    <section>
      {countTotalFeedback > 0 ? (
        <>
          <StatComponent label="Good" value={good} />
          <StatComponent label="Neutral" value={neutral} />
          <StatComponent label="Bad" value={bad} />
          <StatComponent label="Total feedback" value={countTotalFeedback} />
          {countPositiveFeedbackPercentage > 0 ? (
            <StatComponent
              label="Positive percntage"
              value={countPositiveFeedbackPercentage}
            />
          ) : null}
        </>
      ) : (
        <Notification message="No feedback given" />
      )}
    </section>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.number.isRequired
};
export default Statistics;
