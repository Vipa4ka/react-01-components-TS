import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

const FriendListItems = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={styles.item}>
          {(isOnline && (
            <span className={styles.line + " " + styles.online}></span>
          )) || <span className={styles.line + " " + styles.ofline}></span>}

          <img
            className={styles.avatar}
            src={avatar}
            alt="User avatar"
            width="60"
            height="60"
          />
          <p className={styles.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendListItems.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendListItems;
