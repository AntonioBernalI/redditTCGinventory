import './CardDetailPanel.css'
import { CARD_DATA } from '../data/cardData'

const CardDetailPanel = ({ card, onClose }) => {
  const rarityColors = {
    common: '#888888',
    uncommon: '#32cd32',
    rare: '#4169e1',
    epic: '#9932cc',
    legendary: '#ffd700'
  }

  return (
    <div className="card-detail-panel">
      <div className="panel-header">
        <h3 className="panel-title">CARD DETAILS</h3>
        <button className="close-button" onClick={onClose}>
          ✕
        </button>
      </div>
      
      <div className="panel-content">
        <div className="detail-image-container">
          <img 
            src={card.image} 
            alt={card.name}
            className={`detail-image ${card.type === 'prizes' ? 'prize-card' : ''} ${card.type === 'packs' ? 'pack-card' : ''}`}
          />
          <div 
            className="detail-rarity-badge"
            style={{ backgroundColor: rarityColors[card.rarity] }}
          >
            {card.rarity.toUpperCase()}
          </div>
          {card.quantity > 1 && (
            <div className="detail-quantity-badge">
              x{card.quantity}
            </div>
          )}
        </div>
        
        <div className="detail-info">
          <h4 className="detail-name">{card.name}</h4>
          
          <div className="detail-stats">
            <div className="detail-stat">
              <span className="stat-label">TYPE:</span>
              <span className="stat-value">{card.type.toUpperCase()}</span>
            </div>
            
            <div className="detail-stat">
              <span className="stat-label">RARITY:</span>
              <span 
                className="stat-value"
                style={{ color: rarityColors[card.rarity] }}
              >
                {card.rarity.toUpperCase()}
              </span>
            </div>
            
            <div className="detail-stat">
              <span className="stat-label">QUANTITY:</span>
              <span className="stat-value">{card.quantity}</span>
            </div>
            
            <div className="detail-stat">
              <span className="stat-label">ACQUIRED:</span>
              <span className="stat-value">
                {new Date(card.dateAcquired).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            
            {card.price && (
              <div className="detail-stat">
                <span className="stat-label">VALUE:</span>
                <span className="stat-value">{card.price.toLocaleString()} 💰</span>
              </div>
            )}
            
            {card.hp && (
              <div className="detail-stat">
                <span className="stat-label">HP:</span>
                <span className="stat-value">{card.hp}</span>
              </div>
            )}
            
            {card.attacks && card.attacks.length > 0 && (
              <div className="detail-stat">
                <span className="stat-label">ATTACKS:</span>
                <span className="stat-value">{card.attacks.join(', ')}</span>
              </div>
            )}
            
            {card.attackCost && card.attackCost.length > 0 && (
              <div className="detail-stat">
                <span className="stat-label">ATTACK COST:</span>
                <span className="stat-value">{card.attackCost.join(', ')} Karma</span>
              </div>
            )}
          </div>
          
          <div className="detail-description">
            <h5>{card.effect ? 'Effect' : 'Description'}</h5>
            <p>
              {card.effect || `This ${card.rarity} ${card.type} is a valuable addition to your collection.`}
              {card.quantity > 1 && ` You own ${card.quantity} copies of this card.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetailPanel