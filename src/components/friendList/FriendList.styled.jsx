import styled from 'styled-components';

export const FriendsList = styled.ul`
  width: 350px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FriendsItem = styled.li`
  display: flex;
  justify-content: baseline;
  text-align: left;
  gap: 20px;
  padding: 8px 5px;
  background-color: white;
  border: 2px solid light-gray;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 2px rgba(0, 0, 255, 0.2);

  & > * {
    width: calc(100% / 3);
  }
`;

export const FriendsStatus = styled.span`
  display: block;
  text-align: center;
  margin: 20px 5px 20px 15px;
  width: 20px;
  height: 20px;
  border-radius: 50%;

  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const AvatarImg = styled.img`
  width: 50px;
  border: 2px solid silver;
  border-radius: 15px;
`;

export const FriendsName = styled.p`
  font-size: 20px;
  color: black;
  font-weight: 500;
`;
