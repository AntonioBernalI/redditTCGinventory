import { useState, useEffect } from 'react'
import { getCardByKey } from './data/cardData'
import { generateBoosterPackCards } from './utils/cardGenerator'
import { createCardKey } from './data/cardData'
import MainDiv from './components/MainDiv'
import ToastNotification from './components/ToastNotification'
import FullscreenBackdrop from './components/FullscreenBackdrop'
import PackOpeningBackdrop from './components/PackOpeningBackdrop'
import './App.css'

function deepFindMessage(obj) {
  if (!obj || typeof obj !== "object") return undefined;
  if ("message" in obj) return obj.message;

  if ("data" in obj) return deepFindMessage(obj.data);

  return undefined;
}

function App() {
  const [activeTab, setActiveTab] = useState('collection')
  const [toast, setToast] = useState(null)
  const [karma, setKarma] = useState("loading...")
  const [inventory, setInventory] = useState([])
  const [isLoadingCards, setIsLoadingCards] = useState(true)
  const [selectedCard, setSelectedCard] = useState(null)
  const [packOpening, setPackOpening] = useState({
    isOpen: false,
    newCards: []
  })

  // Convert inventory to the format expected by parent (array of card keys)
  const convertInventoryToCardList = (inventory) => {
    const cardList = []
    
    inventory.forEach(item => {
      const cardKey = createCardKey(item.name)
      // Add the card key multiple times based on quantity
      for (let i = 0; i < item.quantity; i++) {
        cardList.push(cardKey)
      }
    })
    
    return cardList
  }

  useEffect(() => {
    // Show loading toast initially
    setToast({ message: 'Loading inventory...', type: 'info' })
    
    // Send webview_ready_inventory message after mount
    window.parent.postMessage(
      {
        type: "webview_ready_inventory",
        data: {},
      },
      "*"
    );
    
    const handleMessage = (event) => { 
      const message = deepFindMessage(event.data);
      if (!message) return;
      const { type, data } = message;
      
      if (type === "balance_update") {
        setKarma(data);
      } else if (type === "cards_update") {
        // Process the card list and create inventory
        const cardList = data; // Array of card keys like ["spez", "ghostsnoo", "angrysnoo", ...]
        
        // Count occurrences of each card
        const cardCounts = cardList.reduce((acc, cardKey) => {
          acc[cardKey] = (acc[cardKey] || 0) + 1;
          return acc;
        }, {});
        
        // Create inventory items from card counts
        const newInventory = Object.entries(cardCounts).map(([cardKey, quantity], index) => {
          const cardData = getCardByKey(cardKey);
          if (!cardData) {
            console.warn(`Card data not found for key: ${cardKey}`);
            return null;
          }
          
          return {
            id: index + 1,
            ...cardData,
            quantity
          };
        }).filter(Boolean); // Remove null entries
        
        setInventory(newInventory);
        setIsLoadingCards(false);
        
        // Hide loading toast
        setToast(null);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3000)
  }

  const addToInventory = (item) => {
    setInventory(prev => {
      const existing = prev.find(invItem => invItem.name === item.name)
      if (existing) {
        return prev.map(invItem => 
          invItem.name === item.name 
            ? { ...invItem, quantity: invItem.quantity + 1 }
            : invItem
        )
      } else {
        return [...prev, { 
          ...item, 
          id: Date.now(), 
          quantity: 1
        }]
      }
    })
    showToast(`Added ${item.name} to inventory!`, 'success')
  }

  const openBoosterPack = (packCard) => {
    // Generate 5 new random cards
    const newCards = generateBoosterPackCards()
    
    // Show the pack opening animation
    setPackOpening({
      isOpen: true,
      newCards: newCards
    })
    
    // Update inventory: remove one booster pack and add new cards
    setInventory(prev => {
      // Remove one booster pack
      let updatedInventory = prev.map(item => {
        if (item.id === packCard.id) {
          return item.quantity > 1 
            ? { ...item, quantity: item.quantity - 1 }
            : null
        }
        return item
      }).filter(Boolean)
      
      // Add new cards to inventory
      let nextId = Math.max(...updatedInventory.map(item => item.id), 0) + 1
      
      newCards.forEach(newCard => {
        const existing = updatedInventory.find(item => item.name === newCard.name)
        if (existing) {
          // Increase quantity of existing card
          const index = updatedInventory.findIndex(item => item.name === newCard.name)
          updatedInventory[index] = {
            ...updatedInventory[index],
            quantity: updatedInventory[index].quantity + 1
          }
        } else {
          // Add new card to inventory
          updatedInventory.push({
            ...newCard,
            id: nextId++,
            quantity: 1
          })
        }
      })
      
      // Send updated inventory to parent immediately after pack opening
      const cardList = convertInventoryToCardList(updatedInventory)
      window.parent.postMessage({
        type: 'inventory_update',
        data: cardList
      }, '*')
      
      return updatedInventory
    })
    
    // Close the card detail panel
    setSelectedCard(null)
    
    // Show success toast
    showToast('Booster pack opened! 5 new cards added!', 'success')
  }

  const closePackOpening = () => {
    setPackOpening({
      isOpen: false,
      newCards: []
    })
  }

  return (
    <>
      <div className="app-layout">
        <div className="left-sidebar">
          <div className="sidebar-header">
            <img 
              src="/src/assets/redditTCGinventoryPCheader.png" 
              alt="Reddit TCG Inventory" 
              className="sidebar-header-image"
            />
          </div>
          
          <div className="sidebar-stats">
            <div className="sidebar-stat">
              <span className="stat-number">{inventory.length}</span>
              <span className="stat-label">UNIQUE CARDS</span>
            </div>
            <div className="sidebar-stat">
              <span className="stat-number">{inventory.reduce((sum, item) => sum + item.quantity, 0)}</span>
              <span className="stat-label">TOTAL CARDS</span>
            </div>
            <div className="sidebar-stat">
              <span className="stat-number">{typeof karma === 'string' ? karma : karma.toLocaleString()}</span>
              <span className="stat-label">
                <img 
                  src="/src/assets/Karma.png" 
                  alt="Karma" 
                  style={{ 
                    width: '18px', 
                    height: '18px', 
                    marginRight: '6px',
                    verticalAlign: 'middle'
                  }} 
                />
                KARMA
              </span>
            </div>
          </div>
          
          <div className="sidebar-navigation">
            <button
              className={`sidebar-nav-button ${activeTab === 'collection' ? 'active' : ''}`}
              onClick={() => setActiveTab('collection')}
            >
              MY COLLECTION
            </button>
            <button
              className={`sidebar-nav-button ${activeTab === 'prizes' ? 'active' : ''}`}
              onClick={() => setActiveTab('prizes')}
            >
              PRIZES
            </button>
            <button
              className={`sidebar-nav-button ${activeTab === 'characters' ? 'active' : ''}`}
              onClick={() => setActiveTab('characters')}
            >
              CHARACTERS
            </button>
            <button
              className={`sidebar-nav-button ${activeTab === 'effects' ? 'active' : ''}`}
              onClick={() => setActiveTab('effects')}
            >
              EFFECTS
            </button>
            <button
              className={`sidebar-nav-button ${activeTab === 'packs' ? 'active' : ''}`}
              onClick={() => setActiveTab('packs')}
            >
              PACKS
            </button>
          </div>
        </div>
        
        <div className="main-content">
          <MainDiv 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            inventory={inventory}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
            addToInventory={addToInventory}
            onOpenPack={openBoosterPack}
            isLoadingCards={isLoadingCards}
          />
        </div>
      </div>
      <FullscreenBackdrop />
      <PackOpeningBackdrop 
        isOpen={packOpening.isOpen}
        onClose={closePackOpening}
        newCards={packOpening.newCards}
      />
      {toast && (
        <ToastNotification 
          message={toast.message} 
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  )
}

export default App