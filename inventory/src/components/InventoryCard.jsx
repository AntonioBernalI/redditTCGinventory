import './InventoryCard.css'

const InventoryCard = ({ item, isSelected, onSelect }) => {
  const rarityColors = {
    common: '#000000',
    uncommon: '#ffffff',
    rare: '#ffff00',
    epic: '#9932cc',
    legendary: '#ffd700'
  }

  const handleClick = () => {
    onSelect(item)
  }

  return (
    <div 
      className={`inventory-card ${item.rarity} ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      <div className="card-image-container">
        <img 
          src={item.image} 
          alt={item.name}
          className={`card-image ${item.type === 'prizes' ? 'prize-card' : ''} ${item.type === 'packs' ? 'pack-card' : ''}`}
        />
        {item.quantity > 1 && (
          <div className="quantity-badge">
            x{item.quantity}
          </div>
        )}
      </div>
      
      <div className="card-content">
        <h3 className="card-name">{item.name}</h3>
        <div className="card-info">
          <div className="info-item">
            <span className="info-label">TYPE:</span>
            <span className="info-value">{item.type.toUpperCase()}</span>
          </div>
          <div className="info-item">
            <span className="info-label">RARITY:</span>
            <span 
              className="info-value"
              style={{ color: rarityColors[item.rarity] }}
            >
              {item.rarity.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InventoryCard