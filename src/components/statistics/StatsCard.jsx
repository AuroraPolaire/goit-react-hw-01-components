import PropTypes from 'prop-types';
import { StatsDataMarkup } from './StatsDataMarkup';

export const StatsCard = ({ stats, title }) => {
  return (
    <>
      <section className="statistics">
        <h2 className="title">{title}</h2>
        <ul className="stat-list">
          {stats.map(({ id, label, percentage }) => (
            <li key={id} className="item">
              <StatsDataMarkup label={label} percentage={percentage} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

StatsCard.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string.isRequired,
};
