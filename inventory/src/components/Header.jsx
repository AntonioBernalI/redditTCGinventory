import './Header.css'

const Header = ({ totalCards, totalValue }) => {
  return (
    <div className="header">
      <img 
        src="https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400" 
        alt="Reddit TCG Inventory" 
        className="header-logo"
      />
      <div className="header-content">
        <h1 className="header-title">REDDIT TCG INVENTORY</h1>
        <div className="header-stats">
          <div className="stat-item">
            <span className="stat-label">TOTAL CARDS:</span>
            <span className="stat-value">{totalCards}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">COLLECTION VALUE:</span>
            <span className="stat-value">{totalValue.toLocaleString()} 💰</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header