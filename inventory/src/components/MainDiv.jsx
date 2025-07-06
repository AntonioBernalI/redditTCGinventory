import CollectionScreen from './screens/CollectionScreen'
import RarityScreen from './screens/RarityScreen'
import RecentScreen from './screens/RecentScreen'
import './MainDiv.css'

const MainDiv = ({ activeTab, inventory, selectedCard, setSelectedCard }) => {
  // Filter inventory based on active tab
  const getFilteredInventory = () => {
    if (activeTab === 'collection') {
      return inventory // Show all cards for "My Collection"
    }
    return inventory.filter(item => item.type === activeTab)
  }

  const filteredInventory = getFilteredInventory()

  const renderScreen = () => {
    switch (activeTab) {
      case 'collection':
        return (
          <CollectionScreen 
            inventory={filteredInventory}
            title="MY COLLECTION"
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        )
      case 'prizes':
        return (
          <CollectionScreen 
            inventory={filteredInventory}
            title="PRIZES"
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        )
      case 'characters':
        return (
          <CollectionScreen 
            inventory={filteredInventory}
            title="CHARACTERS"
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        )
      case 'effects':
        return (
          <CollectionScreen 
            inventory={filteredInventory}
            title="EFFECTS"
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        )
      default:
        return (
          <CollectionScreen 
            inventory={filteredInventory}
            title="MY COLLECTION"
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