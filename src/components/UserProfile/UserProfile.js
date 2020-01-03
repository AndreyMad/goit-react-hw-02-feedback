import React from "react";
import PropTypes from "prop-types";
import style from "./UserProfile.module.css";

const Profile = ({ user }) => {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={user.avatar} alt="user avatar" className={style.avatar} />
        <p className={style.name}>{user.name}</p>
        <p className={style.tag}>{`@ ${user.tag}`}</p>
        <p className={style.location}>{user.location}</p>
      </div>

      <ul className={style.stats}>
        <li>
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>{user.stats.followers}</span>
        </li>
        <li>
          <span className={style.label}>Views</span>
          <span className={style.quantity}>{user.stats.views}</span>
        </li>
        <li>
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
};
export default Profile;
