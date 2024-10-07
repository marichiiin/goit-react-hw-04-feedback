import PropTypes from 'prop-types';
import css from './statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className="statisctics">
      <p className={css.inputs}>Good: <span>{good}</span></p>
      <p className={css.inputs}>Nuetral: <span>{neutral}</span></p>
      <p className={css.inputs}>Bad: <span>{bad}</span></p>
      <p className={css.total}>Total: <span>{total}</span></p>
      <p className={css.percentage}>Positive feedback: <span>{positivePercentage}</span>%</p>
    </div>
  )
}


Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}