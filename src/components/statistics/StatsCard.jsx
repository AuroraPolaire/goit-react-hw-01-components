import PropTypes from 'prop-types';
import { StatsDataMarkup } from './StatsDataMarkup';

import { Container, StatsHeading, StatList } from './Stats.styled';

function getRandomHexColor() {
  let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return color;
}

export const StatsCard = ({ stats, title }) => {
  return (
    <>
      <Container>
        <StatsHeading>{title}</StatsHeading>
        <StatList>
          {stats.map(({ id, label, percentage }) => (
            <li
              key={id}
              className="item"
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <StatsDataMarkup label={label} percentage={percentage} />
            </li>
          ))}
        </StatList>
      </Container>
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
