import css from './profile.module.css'
// import user from './user.json'
import PropTypes from 'prop-types'
const Profile = ({ avatar, username, tag, location, stats: { followers, views, likes } }) =>
{
    return (
<>
    <div className={css.profile}>
    <div className={css.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.profileName}>{username}</p>
    <p className={css.profileTag}>{tag}</p>
    <p className={css.profileLocation}>{location}</p>
    </div>

    <ul className={css.stats}>
      <li className={css.followersList}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{followers}</span>
      </li>
      <li className={css.viewsList}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{views}</span>
      </li>
      <li className={css.likesList}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{likes}</span>
      </li>
    </ul>
            </div>
</>
    )
}

export default Profile;

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ).isRequired,
};