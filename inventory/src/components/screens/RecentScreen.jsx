import InventoryCard from '../InventoryCard'
import CardDetailPanel from '../CardDetailPanel'
import './RecentScreen.css'

const RecentScreen = ({ inventory, selectedCard, setSelectedCard }) => {
  const sortedByDate = [...inventory].sort((a, b) => 
    new Date(b.dateAcquired) - new Date(a.dateAcquired)
  )

  const groupedByDate = sortedByDate.reduce((acc, card) => {
    const date = card.dateAcquired
    if (!acc[date]) {
      acc[date] = []
    }
    acc[date].push(card)
    return acc
  }, {})

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)
    
    if (date.toDateString() === today.toDateString()) {
      return 'Today'
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday'
    } else {
      return date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    }
  }

  return (
    <div className="recent-screen">
      <h2 className="screen-title">RECENTLY ADDED</h2>
      
      <div className="recent-content">
        <div className="recent-sections">
          {Object.keys(groupedByDate).length > 0 ? (
            Object.entries(groupedByDate).map(([date, cards]) => (
              <div key={date} className="date-section">
                <div className="date-header">
                  <div className="date-badge">
                    📅 {formatDate(date)}
                  </div>
                  <span className="date-count">
                    {cards.length} card{cards.length !== 1 ? 's' : ''} added
                  </span>
                </div>
                
                <div className="date-cards">
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
            ))
          ) : (
            <div className="empty-recent">
              <div className="empty-icon">🕒</div>
              <h3>No Recent Activity</h3>
              <p>No cards have been added to your collection yet. Start collecting to see your recent additions here!</p>
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

export default RecentScreen