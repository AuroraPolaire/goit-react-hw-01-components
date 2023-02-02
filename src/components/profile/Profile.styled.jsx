import styled from 'styled-components';

export const ProfileCardContainer = styled.div`
  margin: 20px auto;
  width: 350px;

  border: 2px solid light-gray;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 2px rgba(0, 0, 255, 0.2);
  background-color: white;

  font-size: 18px;
  color: #1c1c1c;
  text-align: center;
`;

export const ProfileDescription = styled.div`
  padding: 20px;
`;

export const AvatarImg = styled.img`
  width: 150px;
  border-radius: 50%;
  border: 1px solid lightgray;
`;

export const ProfileName = styled.p`
  margin: 0;
  padding: 20px 0;
  color: #202020;
  font-weight: bold;
  font-size: 25px;
`;

export const ProfileDetails = styled.p`
  margin: 0;
  padding-bottom: 15px;
  color: #5f5f5f;
`;

export const StatsBox = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: #b1ddf13c;

  & > * {
    width: calc(100% / 3);
    border: 1px solid #bed7e28d;
    padding: 25px 10px;
  }
`;

export const StatsLabel = styled.span`
  padding-bottom: 8px;
  display: block;
  font-size: 16px;
  color: #5f5f5f;
`;

export const StatsQuantity = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
