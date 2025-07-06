import Header from './Header'
import Navigation from './Navigation'
import CollectionScreen from './screens/CollectionScreen'
import RarityScreen from './screens/RarityScreen'
import RecentScreen from './screens/RecentScreen'
import './MainDiv.css'

const MainDiv = ({ activeTab, setActiveTab, inventory, selectedCard, setSelectedCard, addToInventory }) => {
  const totalCards = inventory.reduce((sum, item) => sum + item.quantity, 0)
  const totalValue = inventory.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0)

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
      <Header totalCards={totalCards} totalValue={totalValue} />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="content-screen">
        {renderScreen()}
      </div>
    </div>
  )
}

export default MainDiv