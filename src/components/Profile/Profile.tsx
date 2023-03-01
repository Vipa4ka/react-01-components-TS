// import PropTypes from "prop-types";
import React from "react";
import defaultAvatar from "./avatarka.jpg";
import styles from "./Profile.module.css";

interface Info {
  name: string;
  tag: string;
  location: string;
  followers: number;
  views: number;
  likes: number;
  avatar: string;
  // user: Options;
}

const Profile = ({
  name,
  tag,
  location,
  followers,
  views,
  likes,
  avatar,
}: Info) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar || defaultAvatar}
          alt="User avatar"
          className={styles.avatar}
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statsList}>
          <span className={styles.label}>Followers: </span>
          <span className={styles.quantity}>{followers}</span>
        </li>
        <li className={styles.statsList}>
          <span className={styles.label}>Views:</span>
          <span className={styles.quantity}>{views}</span>
        </li>
        <li className={styles.statsList}>
          <span className={styles.label}>Likes:</span>
          <span className={styles.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

// Profile.defaultProps = {
//   avatar: defaultAvatar,
// };

// Profile.propTypes = {
//   name: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   followers: PropTypes.number.isRequired,
//   views: PropTypes.number.isRequired,
//   likes: PropTypes.number.isRequired,
//   avatar: PropTypes.string,
// };

export default Profile;
