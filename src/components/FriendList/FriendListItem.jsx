export default function FriendListItem({avatar, name, isOnline, id }) {
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
}

