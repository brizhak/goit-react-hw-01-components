import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <section className="transactions">
      <table className="transaction-history">
        <thead className="table-head">
          <tr className="table-head-items">
            <th className="table-head-item">Type</th>
            <th className="table-head-item">Amount</th>
            <th className="table-head-item">Currency</th>
          </tr>
        </thead>

        <tbody className="table-body">
          {items.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id} className="table-body-items">
                <td className="table-body-item">{type}</td>
                <td className="table-body-item">{amount}</td>
                <td className="table-body-item">{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
