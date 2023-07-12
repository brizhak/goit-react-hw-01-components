import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <section className="friends">
      <ul className="friends-list">
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <li key={id} className="item">
              {isOnline ? (
                <span
                  className="status"
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
                  className="status"
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
                className="avatar"
                src={avatar}
                alt="User avatar"
                width="48"
              />
              <p className="name">{name}</p>
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
