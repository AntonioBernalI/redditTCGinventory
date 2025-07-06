import InventoryCard from '../InventoryCard'
import CardDetailPanel from '../CardDetailPanel'
import './CollectionScreen.css'

const CollectionScreen = ({ inventory, selectedCard, setSelectedCard, title = "MY COLLECTION" }) => {
  return (
    <div className="collection-screen">
      <div className="screen-header">
        <h2 className="screen-title">{title}</h2>
        <div className="collection-stats">
          <div className="stat-badge">
            <span className="stat-number">{inventory.length}</span>
            <span className="stat-label">UNIQUE CARDS</span>
          </div>
          <div className="stat-badge">
            <span className="stat-number">{inventory.reduce((sum, item) => sum + item.quantity, 0)}</span>
            <span className="stat-label">TOTAL CARDS</span>
          </div>
        </div>
      </div>
      
      <div className="collection-content">
        <div className="cards-grid">
          {inventory.length > 0 ? (
            inventory.map(card => (
              <InventoryCard
                key={card.id}
                item={card}
                isSelected={selectedCard?.id === card.id}
                onSelect={setSelectedCard}
              />
            ))
          ) : (
            <div className="empty-collection">
              <div className="empty-icon">📦</div>
              <h3>No {title.toLowerCase()} Found</h3>
              <p>No items of this type in your collection yet. Start collecting to see them here!</p>
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

export default CollectionScreen