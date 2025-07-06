import CollectionScreen from './screens/CollectionScreen'
import './MainDiv.css'

const MainDiv = ({ activeTab, inventory, selectedCard, setSelectedCard, onOpenPack, isLoadingCards = false }) => {
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
            isLoadingCards={isLoadingCards}
            onOpenPack={onOpenPack}
          />
        )
      case 'prizes':
        return (
          <CollectionScreen 
            inventory={filteredInventory}
            title="PRIZES"
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
            isLoadingCards={isLoadingCards}
            onOpenPack={onOpenPack}
          />
        )
      case 'characters':
        return (
          <CollectionScreen 
            inventory={filteredInventory}
            title="CHARACTERS"
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
            isLoadingCards={isLoadingCards}
            onOpenPack={onOpenPack}
          />
        )
      case 'effects':
        return (
          <CollectionScreen 
            inventory={filteredInventory}
            title="EFFECTS"
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
            isLoadingCards={isLoadingCards}
            onOpenPack={onOpenPack}
          />
        )
      case 'packs':
        return (
          <CollectionScreen 
            inventory={filteredInventory}
            title="PACKS"
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
            isLoadingCards={isLoadingCards}
            onOpenPack={onOpenPack}
          />
        )
      default:
        return (
          <CollectionScreen 
            inventory={filteredInventory}
            title="MY COLLECTION"
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
            isLoadingCards={isLoadingCards}
            onOpenPack={onOpenPack}
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