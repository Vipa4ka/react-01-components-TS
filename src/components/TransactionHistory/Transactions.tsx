// import PropTypes from "prop-types";
import React from "react";
import styles from "./Transactions.module.css";

type Option = {
  type: string;
  amount: string;
  currency: string;
  id: string;
};

interface Item {
  items: Option[];
}
const Transactions = ({ items }: Item) => (
  <table className={styles.transaction_istory}>
    <thead>
      <tr className={styles.column_names}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ type, amount, currency, id }) => (
        <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

// Transactions.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       type: PropTypes.string.isRequired,
//       currency: PropTypes.string.isRequired,
//       amount: PropTypes.string.isRequired,
//     })
//   ),
// };

export default Transactions;
