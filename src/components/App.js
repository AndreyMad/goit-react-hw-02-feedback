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
  };

  feedbackCounter = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  positivePercentageCounter = () => {
    this.setState.percentage = (this.state.good * 100) / this.feedbackCounter();
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
          <p>Total: {this.feedbackCounter()}</p>
          {percentage > 0 ? (
            <p>Positive percentage: {percentage}</p>
          ) : (
            <p>No percentage</p>
          )}
        </section>
      </div>
    );
  }
}

export default App;
