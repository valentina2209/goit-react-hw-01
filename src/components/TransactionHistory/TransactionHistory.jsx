import styles from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
    return (
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }, index) => {
            const typeClass = styles[`type${capitalize(type)}`] || "";
            const rowClass =
              index % 2 === 0 ? styles.rowEven : ""; // чергування кольорів
            return (
              <tr key={id} className={`${styles.rowHover} ${rowClass}`}>
                <td className={typeClass}>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  
  // Функція для перетворення "payment" → "Payment"
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  

export default TransactionHistory;

