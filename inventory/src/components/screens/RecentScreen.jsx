// This screen is no longer needed since we removed date tracking
// All date-related functionality has been removed from the project

import './RecentScreen.css'

const RecentScreen = ({ inventory, selectedCard, setSelectedCard, isLoadingCards = false }) => {
  return (
    <div className="recent-screen">
      <h2 className="screen-title">RECENTLY ADDED</h2>
      
      <div className="recent-content">
        <div className="recent-sections">
          <div className="empty-recent">
            <div className="empty-icon">🕒</div>
            <h3>Date Tracking Disabled</h3>
            <p>Date tracking has been removed from this project. Cards no longer store acquisition dates.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentScreen