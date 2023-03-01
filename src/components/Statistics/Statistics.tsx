// import PropTypes from "prop-types";
import React from "react";
import styles from "./Statistics.module.css";

type Options = {
  label: string;
  id: string;
  percentage: number;
};
interface Stat {
  stats: Options[];
  title: string;
}

const Statistics = ({ title, stats }: Stat) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(({ label, id, percentage }) => (
          <li
            key={id}
            style={{ backgroundColor: randomColor() }}
            className={styles.item}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

function randomColor() {
  return (
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")"
  );
}

// Statistics.propTypes = {
//   stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     })
//   ).isRequired,
//   title: PropTypes.string,
// };

export default Statistics;
