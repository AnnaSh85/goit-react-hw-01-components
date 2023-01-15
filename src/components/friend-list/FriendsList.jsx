import css from './friendsList.module.css'
// import friends from './friends.json'
import PropTypes from 'prop-types'
import FriendListItem from './FriendListItem'


const FriendsList = ({ friends }) => {
    const elements =
        friends.map(friend => 
            <FriendListItem
                key={friend.id}
                avatar={friend.avatar}
                isOnline={friend.isOnline}
                name={friend.name}
            />
        );
    
    return (
        <>
        <ul className={css.friendList}>
            {elements}
        </ul>
        </>)
}
export default FriendsList;
FriendsList.defaultProps = {
    friends: []
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};