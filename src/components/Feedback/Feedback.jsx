import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from 'components/FeebackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = e => {
    this.setState(prevState => {
      const name = e.target.textContent;
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, el) => acc + el, 0);

  countPositiveFeedbackPercentage = () =>
    Math.round((100 / this.countTotalFeedback()) * this.state.good);

  render() {
    const { options } = this.props;
    const { good, neutral, bad } = this.state;

    return (
      <>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.handleBtnClick}
        />

        {good > 0 || neutral > 0 || bad > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback given" />
        )}
      </>
    );
  }
}

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Feedback;
