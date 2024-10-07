import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(input => (
        <button className={css.buttons} key={input} onClick={() => onLeaveFeedback(input)}>{input}</button>
      ))}
    </div>
    )
  }


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.oneOf(['good', 'neutral', 'bad'])
  ).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}



