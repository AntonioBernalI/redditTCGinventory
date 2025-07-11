import './CardDetailPanel.css'
import { CARD_DATA } from '../data/cardData'
import karmaIcon from '../assets/Karma.png'

const CardDetailPanel = ({ card, onClose, onOpenPack }) => {
  const rarityColors = {
    common: '#888888',
    uncommon: '#ffffff',
    rare: '#ffff00',
    epic: '#9932cc',
    legendary: '#ffd700'
  }

  // Check if this is a booster pack card
  const isBoosterPack = card.name === "Booster Pack"
  return (
    <div className="card-detail-panel">
      <div className="panel-header">
        <h3 className="panel-title">{isBoosterPack ? 'DETAILS' : 'CARD DETAILS'}</h3>
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
          
          {!isBoosterPack && (
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
              
              {card.karma && (
                <div className="detail-stat">
                  <span className="stat-label">KARMA:</span>
                  <span className="stat-value">
                    <img 
                      src={karmaIcon}
                      alt="Karma" 
                      style={{ 
                        width: '20px', 
                        height: '20px', 
                        marginRight: '6px',
                        verticalAlign: 'middle'
                      }} 
                    />
                    {card.karma.toLocaleString()}
                  </span>
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
          )}
          
          <div className="detail-description">
            <h5>{isBoosterPack ? 'Description' : (card.effect ? 'Effect' : 'Description')}</h5>
            <p>
              {isBoosterPack 
                ? `Open this pack to receive 5 additional random cards for your collection. Each pack contains a mix of characters, effects, and prizes with varying rarities. You own ${card.quantity} ${card.quantity === 1 ? 'copy' : 'copies'} of this card.`
                : (card.effect || `This ${card.rarity} ${card.type} is a valuable addition to your collection.`)
              }
              {!isBoosterPack && card.quantity > 1 && ` You own ${card.quantity} copies of this card.`}
            </p>
          </div>
          
          {isBoosterPack && (
            <button 
              className="open-pack-button"
              onClick={() => onOpenPack(card)}
            >
              OPEN PACK
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CardDetailPanel