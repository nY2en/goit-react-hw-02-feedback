import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Section from 'components/Section';
import FeedbackOptions from 'components/FeebackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

export class App extends Component {
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
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
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
        </Section>
      </div>
    );
  }
}

App.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
