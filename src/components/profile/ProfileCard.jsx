import { Profile } from './Profile';
import PropTypes from 'prop-types';
import { ProfileCardContainer } from './Profile.styled';

export const ProfileCard = ({ user }) => {
  return (
    <ProfileCardContainer>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.followers}
        likes={user.stats.followers}
      />
    </ProfileCardContainer>
  );
};

ProfileCard.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
