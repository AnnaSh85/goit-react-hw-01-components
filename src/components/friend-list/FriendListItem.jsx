import css from './friendsList.module.css'
// import friends from './friends.json'
import PropTypes from 'prop-types'

const FriendListItem = ({ avatar, name, isOnline }) => {
    return(
    <li className={css.item}>
    <span className={isOnline ? css.online : css.offline}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
  </li>
)
    

}

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};