import css from './statistics.module.css'
// import data from './data.json'
import PropTypes from 'prop-types'

function getRandomHexColor() {
  let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return bgColor;
}
const Statistics = ({ title, stats }) =>
{
    return (
<>
    <div className={css.statisticsContainer}>
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        { stats.map(({ id, label, percentage }) => (
          <li
            className={title ? css.statListItem : css.statListItemNoTitle}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
            key={id}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  </div>
</>
    )
}

export default Statistics;

Statistics.defaultProps = {
    stats: []
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};