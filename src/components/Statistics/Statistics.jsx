import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

const Statistics = ({ good, neutral, bad, title, total, positivePersentage }) => (
  <div className={css.section}>
    <h3 className={css.title}>{title}</h3>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePersentage}%</p>
  </div>
);

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  title: PropTypes.string,
  positivePersentage: PropTypes.number.isRequired,
  good:  PropTypes.number.isRequired, 
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
export default Statistics;
