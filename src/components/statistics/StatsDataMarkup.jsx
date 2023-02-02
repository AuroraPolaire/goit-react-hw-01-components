import PropTypes from 'prop-types';
import { StatsLabel, StatsPercentage } from './Stats.styled';

export const StatsDataMarkup = ({ label, percentage }) => {
  return (
    <>
      <StatsLabel>{label}</StatsLabel>
      <StatsPercentage>{percentage}%</StatsPercentage>
    </>
  );
};

StatsDataMarkup.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
