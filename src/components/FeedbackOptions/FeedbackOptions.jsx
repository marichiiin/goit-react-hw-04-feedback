import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

export class FeedbackOptions extends Component {
  render () {
    const { options, onLeaveFeedback} = this.props;
    return (
        <div className="feedbackOptions">
            {options.map(input => (
                  <button className={css.buttons} key={input} onClick={() => onLeaveFeedback(input)}>{input}</button>
            ))}
        </div>
    )
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.oneOf(['good', 'neutral', 'bad'])
  ).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}



