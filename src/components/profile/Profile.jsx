import PropTypes from 'prop-types';
import {
  ProfileDescription,
  AvatarImg,
  ProfileName,
  ProfileDetails,
  StatsBox,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <>
      <ProfileDescription>
        <AvatarImg src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileDetails>@{tag}</ProfileDetails>
        <ProfileDetails>{location}</ProfileDetails>
      </ProfileDescription>

      <StatsBox>
        <li>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{followers}</StatsQuantity>
        </li>
        <li>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{views}</StatsQuantity>
        </li>
        <li>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{likes}</StatsQuantity>
        </li>
      </StatsBox>
    </>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
