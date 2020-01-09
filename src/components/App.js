import React, { Component } from "react";
import style from "./app.module.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    percentage: 0
  };

  changeStats = e => {
    const name = e.target.textContent.toLowerCase();
    this.setState(prevState => ({
      [name]: prevState[name] + 1
    }));
    this.countPositiveFeedbackPercentage();
    localStorage.setItem("state", JSON.stringify(this.state));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      percentage: ((prevState.good * 100) / this.countTotalFeedback()).toFixed(
        2
      )
    }));
  };

  render() {
    const { good, neutral, bad, percentage } = this.state;
    return (
      <div>
        <h1 className={style.title}>Please leave feedback</h1>
        <button
          className={style.button}
          onClick={this.changeStats}
          type="button"
        >
          Good
        </button>
        <button
          className={style.button}
          onClick={this.changeStats}
          type="button"
        >
          Neutral
        </button>
        <button
          className={style.button}
          onClick={this.changeStats}
          type="button"
        >
          Bad
        </button>
        <section>
          <p className={style.statistics_title}>Statistics</p>
          <p className={style.stat_text}>Good: {good}</p>
          <p className={style.stat_text}>Neutral: {neutral}</p>
          <p className={style.stat_text}>Bad: {bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Percentage: {percentage}</p>
        </section>
      </div>
    );
  }
}

export default App;
