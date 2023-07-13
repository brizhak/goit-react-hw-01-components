import PropTypes from "prop-types";
import style from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
    return (
      <section className={style.statistics}>
        <h2 className={style.title}>{title}</h2>
        <ul className={style.statList}>
          {stats.map(({id, label, percentage}) => {
            return (
              <li key={id}>
                <span>{label}</span>
                <br/>
                <span>{percentage}%</span>
              </li>
            );
          })}
        </ul>
      </section>
    );
  };
  
Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          percentage: PropTypes.number.isRequired,
        })
      ).isRequired,
}

export default Statistics;
  
