import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import style from './FriendsList.module.css';

const FriendList = ({ friends }) => {
  return (
    <section>
      <h2 className={style.title}>Friends</h2>
      <ul className={style.friendsList}>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (<FriendListItem avatar={avatar} name={name} isOnline={isOnline} id={id}/>)
        })}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
