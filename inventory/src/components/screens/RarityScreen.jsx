import InventoryCard from '../InventoryCard'
import CardDetailPanel from '../CardDetailPanel'
import './RarityScreen.css'

const RarityScreen = ({ inventory, selectedCard, setSelectedCard }) => {
  const rarityOrder = ['legendary', 'epic', 'rare', 'uncommon', 'common']
  const rarityColors = {
    common: '#888888',
    uncommon: '#ffffff',
    rare: '#ffff00',
    epic: '#9932cc',
    legendary: '#ffd700'
  }

  const groupedByRarity = rarityOrder.reduce((acc, rarity) => {
    acc[rarity] = inventory.filter(card => card.rarity === rarity)
    return acc
  }, {})

  return (
    <div className="rarity-screen">
      <h2 className="screen-title">CARDS BY RARITY</h2>
      
      <div className="rarity-content">
        <div className="rarity-sections">
          {rarityOrder.map(rarity => {
            const cards = groupedByRarity[rarity]
            if (cards.length === 0) return null
            
            return (
              <div key={rarity} className="rarity-section">
                <div 
                  className="rarity-header"
                  style={{ borderColor: rarityColors[rarity] }}
                >
                  <div 
                    className="rarity-badge"
                    style={{ backgroundColor: rarityColors[rarity] }}
                  >
                    {rarity.toUpperCase()}
                  </div>
                  <span className="rarity-count">
                    {cards.length} card{cards.length !== 1 ? 's' : ''}
                  </span>
                </div>
                
                <div className="rarity-cards">
                  {cards.map(card => (
                    <InventoryCard
                      key={card.id}
                      item={card}
                      isSelected={selectedCard?.id === card.id}
                      onSelect={setSelectedCard}
                    />
                  ))}
                </div>
              </div>
            )
          })}
          
          {inventory.length === 0 && (
            <div className="empty-rarity">
              <div className="empty-icon">🎴</div>
              <h3>No Cards to Display</h3>
              <p>Your collection is empty. Add some cards to see them organized by rarity!</p>
            </div>
          )}
        </div>
        
        {selectedCard && (
          <CardDetailPanel 
            card={selectedCard} 
            onClose={() => setSelectedCard(null)}
          />
        )}
      </div>
    </div>
  )
}

export default RarityScreen