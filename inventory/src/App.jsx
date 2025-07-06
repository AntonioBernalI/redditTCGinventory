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
      type: 'card',
      rarity: 'legendary',
      quantity: 1,
      dateAcquired: '2024-01-15'
    },
    {
      id: 2,
      name: 'Fire Elemental',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'card',
      rarity: 'rare',
      quantity: 2,
      dateAcquired: '2024-01-10'
    },
    {
      id: 3,
      name: 'Water Spirit',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'card',
      rarity: 'rare',
      quantity: 1,
      dateAcquired: '2024-01-08'
    },
    {
      id: 4,
      name: 'Wind Dancer',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'card',
      rarity: 'uncommon',
      quantity: 3,
      dateAcquired: '2024-01-05'
    },
    {
      id: 5,
      name: 'Shadow Assassin',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'card',
      rarity: 'epic',
      quantity: 1,
      dateAcquired: '2024-01-12'
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
      <MainDiv 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        inventory={inventory}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
        addToInventory={addToInventory}
      />
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