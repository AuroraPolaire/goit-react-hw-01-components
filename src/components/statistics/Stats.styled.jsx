import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  text-align: center;
  margin: 0 auto;
  background-color: white;
  border: 2px solid light-gray;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 2px rgba(0, 0, 255, 0.2);
`;

export const StatsHeading = styled.h2`
  margin: 0;
  padding-top: 25px;
  text-transform: uppercase;
  color: gray;
`;

export const StatList = styled.ul`
  padding-top: 25px;
  display: flex;
  margin: 0;

  & > * {
    width: calc(100% / 3);
    padding: 20px 5px;
  }
`;

export const StatsLabel = styled.span`
  padding-bottom: 8px;
  display: block;
  font-size: 16px;
  color: #ffffff;
`;

export const StatsPercentage = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
`;
