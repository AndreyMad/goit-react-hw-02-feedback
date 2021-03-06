import React, { Component } from "react";
// eslint-disable-next-line import/extensions
import Section from "./Section/Section.jsx";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  changeStats = e => {
    const name = e.target.textContent.toLowerCase();
    this.setState(prevState => ({
      [name]: prevState[name] + 1
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return +((this.state.good * 100) / this.countTotalFeedback()).toFixed(2);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section
        good={good}
        neutral={neutral}
        bad={bad}
        countTotalFeedback={this.countTotalFeedback()}
        countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
        options={{ good, neutral, bad }}
        onLeaveFeedback={this.changeStats}
        title="Statistics"
      />
    );
  }
}

export default App;
