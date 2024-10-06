import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './statistics.module.css'

export class Statistics extends Component {
  render () {
    return (
        <div className="statisctics">
            <p className={css.inputs}>Good: <span>{this.props.good}</span></p>
            <p className={css.inputs}>Nuetral: <span>{this.props.neutral}</span></p>
            <p className={css.inputs}>Bad: <span>{this.props.bad}</span></p>
            <p className={css.total}>Total: <span>{this.props.total}</span></p>
            <p className={css.percentage}>Positive feedback: <span>{this.props.positivePercentage}</span>%</p>
        </div>
    )
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}