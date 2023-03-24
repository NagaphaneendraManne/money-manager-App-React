// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {title, amount, type, id} = transactionDetails

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="transaction-row">
      <p className="text">{title}</p>
      <p className="text">Rs {amount}</p>
      <p className="text">{type}</p>
      <div className="button-container">
        <button
          type="button"
          className="delete-btn"
          data-testid="delete"
          onClick={onDeleteTransaction}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}
export default TransactionItem
