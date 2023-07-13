import PropTypes from 'prop-types';
import style from './FriendsList.module.css';

const FriendList = ({ friends }) => {
  return (
    <section>
      <h2 className={style.title}>Friends</h2>
      <ul className={style.friendsList}>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <li key={id}>
              {isOnline ? (
                <span
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: 'green',
                    display: 'inline-block',
                  }}
                ></span>
              ) : (
                <span
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: 'red',
                    display: 'inline-block',
                  }}
                ></span>
              )}
              <img
                src={avatar}
                alt="User avatar"
                width="48"
              />
              <p>{name}</p>
            </li>
          );
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
