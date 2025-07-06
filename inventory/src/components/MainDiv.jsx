import CollectionScreen from './screens/CollectionScreen'
import RarityScreen from './screens/RarityScreen'
import RecentScreen from './screens/RecentScreen'
import './MainDiv.css'

const MainDiv = ({ activeTab, inventory, selectedCard, setSelectedCard }) => {
  const renderScreen = () => {
    switch (activeTab) {
      case 'collection':
        return (
          <CollectionScreen 
            inventory={inventory} 
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        )
      case 'rarity':
        return (
          <RarityScreen 
            inventory={inventory}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        )
      case 'recent':
        return (
          <RecentScreen 
            inventory={inventory}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        )
      default:
        return (
          <CollectionScreen 
            inventory={inventory}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        )
    }
  }

  return (
    <div className="main-div">
      <div className="content-screen">
        {renderScreen()}
      </div>
    </div>
  )
}

export default MainDiv