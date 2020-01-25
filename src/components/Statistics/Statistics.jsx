import React from "react";
import PropTypes from "prop-types";
import Notification from "../Notifications/Notifications";
import style from "./StatComponent.module.css";

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
          <p className={style.text}>Good:{good}</p>
          <p className={style.text}>Neutral:{neutral}</p>
          <p className={style.text}>Bad:{bad}</p>
          <p className={style.text}>Total feedback:{countTotalFeedback}</p>
          {countPositiveFeedbackPercentage > 0 ? (
            <p className={style.text}>
              Positive percntage:{countPositiveFeedbackPercentage}
            </p>
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
