import './ItemCard.css'

const ItemCard = ({ item, money, onPurchase, isOwned = false }) => {
  const canAfford = money >= item.price
  const rarityColors = {
    common: '#888888',
    uncommon: '#32cd32',
    rare: '#4169e1',
    epic: '#9932cc',
    legendary: '#ffd700'
  }

  const handlePurchase = () => {
    if (!isOwned && canAfford) {
      onPurchase(item)
    }
  }

  return (
    <div className={`item-card ${item.rarity} ${isOwned ? 'owned' : ''}`}>
      <div className="card-image-container">
        <img 
          src={item.image} 
          alt={item.name}
          className="card-image"
        />
        <div 
          className="rarity-badge"
          style={{ backgroundColor: rarityColors[item.rarity] }}
        >
          {item.rarity.toUpperCase()}
        </div>
      </div>
      
      <div className="card-content">
        <h3 className="card-name">{item.name}</h3>
        <div className="card-price">
          <span className="price-icon">💰</span>
          <span className="price-amount">{item.price.toLocaleString()}</span>
        </div>
        
        {!isOwned && (
          <button 
            className={`purchase-button ${canAfford ? 'can-afford' : 'cannot-afford'}`}
            onClick={handlePurchase}
            disabled={!canAfford}
          >
            {canAfford ? 'BUY NOW' : 'NOT ENOUGH COINS'}
          </button>
        )}
        
        {isOwned && (
          <div className="owned-badge">
            <span>✅ OWNED</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default ItemCard