import React from "react";
import PropTypes from "prop-types";
import style from "./UserFriends.module.css";

const UserFriend = ({ friends }) => {
  return (
    <ul className={style.friend_list}>
      {friends.map(el => (
        <li key={el.id} className={style.item}>
          {el.isOnline ? (
            <span className={style.active} />
          ) : (
            <span className={style.inActive} />
          )}
          <img
            className={style.avatar}
            src={el.avatar}
            alt="user avatar"
            width="48"
          />
          <p className={style.name}>{el.name}</p>
        </li>
      ))}
    </ul>
  );
};

UserFriend.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired
    })
  ).isRequired
};
export default UserFriend;
