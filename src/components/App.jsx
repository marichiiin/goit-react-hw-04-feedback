import React, { useState } from 'react'
import { Statistics } from './Statistics/statistics';
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from './Notification/Notification';


export const App = () => {
  const [feedback, setFeedback] = useState({
    good:0,
    neutral:0,
    bad:0,
  });

  const countTotalFeedback = () => {
    const {good, neutral, bad} = feedback;
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
      const { good, neutral, bad } = feedback;
      const total = good + neutral + bad;
      const percentage = (good / total) * 100;

      if (isNaN(percentage)) {
          return 0;
      }
      else {
          return Math.round(percentage);
      }
  }

  const handleClick = type => {
      setFeedback(prevFeedback => ({
        ...prevFeedback,
        [type]: prevFeedback[type] + 1,
      }));
  };

  const { good, neutral, bad } = feedback;
  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();
  const inputs = ['good', 'neutral', 'bad'];
  return (
    <>
      <Section title={"Please Leave Feedback"}>
          <FeedbackOptions
              options={inputs}
              onLeaveFeedback={handleClick}
          />
      </Section>

      <Section title={"Statistics"}>
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedback}
            />
          ) : (
              <Notification message="There is no feedback"/>
          )}
      </Section>
    </>
  )
}

