import './MoneyDisplay.css'

const MoneyDisplay = ({ money }) => {
  return (
    <div className="money-display">
      <div className="money-icon">💰</div>
      <span className="money-amount">{money.toLocaleString()}</span>
    </div>
  )
}

export default MoneyDisplay