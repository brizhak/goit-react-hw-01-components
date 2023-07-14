import PropTypes from 'prop-types';
import style from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt="User avatar" className={style.avatar} />
        <div className={style.descItems}>
          <p className={style.descItem}>{username}</p>
          <p className={style.descItem}>@{tag}</p>
          <p className={style.descItem}>{location}</p>
        </div>
      </div>

      <ul className={style.stats}>
        {Object.entries(stats).map(([k, v], i) => {
          return (
            <li key={i} className={style.statsItem}>
              <span>
                {k.replace(/^\w/, c => c.toUpperCase())}
              </span>
              <br/>
              <span>{v}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
