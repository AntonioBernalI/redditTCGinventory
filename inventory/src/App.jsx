import { useState } from 'react'
import MainDiv from './components/MainDiv'
import ToastNotification from './components/ToastNotification'
import FullscreenBackdrop from './components/FullscreenBackdrop'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('collection')
  const [toast, setToast] = useState(null)
  const [inventory, setInventory] = useState([
    // Pre-populated inventory for demonstration
    {
      id: 1,
      name: 'Legendary Dragon Card',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'collection',
      rarity: 'legendary',
      quantity: 1,
      dateAcquired: '2024-01-15'
    },
    {
      id: 2,
      name: 'Fire Elemental',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'collection',
      rarity: 'rare',
      quantity: 2,
      dateAcquired: '2024-01-10'
    },
    {
      id: 3,
      name: 'Water Spirit',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'collection',
      rarity: 'rare',
      quantity: 1,
      dateAcquired: '2024-01-08'
    },
    {
      id: 4,
      name: 'Wind Dancer',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'characters',
      rarity: 'uncommon',
      quantity: 3,
      dateAcquired: '2024-01-05'
    },
    {
      id: 5,
      name: 'Shadow Assassin',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'characters',
      rarity: 'epic',
      quantity: 1,
      dateAcquired: '2024-01-12'
    },
    {
      id: 6,
      name: 'Golden Trophy',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'prizes',
      rarity: 'legendary',
      quantity: 1,
      dateAcquired: '2024-01-14'
    },
    {
      id: 7,
      name: 'Silver Medal',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'prizes',
      rarity: 'rare',
      quantity: 2,
      dateAcquired: '2024-01-11'
    },
    {
      id: 8,
      name: 'Fire Burst',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'effects',
      rarity: 'uncommon',
      quantity: 4,
      dateAcquired: '2024-01-09'
    },
    {
      id: 9,
      name: 'Lightning Strike',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'effects',
      rarity: 'epic',
      quantity: 1,
      dateAcquired: '2024-01-13'
    }
  ])
  const [selectedCard, setSelectedCard] = useState(null)

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
          quantity: 1, 
          dateAcquired: new Date().toISOString().split('T')[0] 
        }]
      }
    })
    showToast(`Added ${item.name} to inventory!`, 'success')
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
              <span className="stat-number">{inventory.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0).toLocaleString()}</span>
              <span className="stat-label">COLLECTION VALUE 💰</span>
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
          />
        </div>
      </div>
      <FullscreenBackdrop />
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