import PropTypes from 'prop-types';

import { AvatarImg, FriendsName, FriendsStatus } from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <FriendsStatus isOnline={isOnline}></FriendsStatus>
      <AvatarImg src={avatar} alt="User avatar" width="48" />
      <FriendsName>{name}</FriendsName>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
