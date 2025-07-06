import { useState } from 'react'
import MainDiv from './components/MainDiv'
import MoneyDisplay from './components/MoneyDisplay'
import SnooCharacter from './components/SnooCharacter'
import ToastNotification from './components/ToastNotification'
import FullscreenBackdrop from './components/FullscreenBackdrop'
import './App.css'

function App() {
  const [money, setMoney] = useState(2500)
  const [activeTab, setActiveTab] = useState('featured')
  const [toast, setToast] = useState(null)
  const [inventory, setInventory] = useState([])

  const showToast = (message, type = 'success') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3000)
  }

  const purchaseItem = (item) => {
    if (money >= item.price) {
      setMoney(prev => prev - item.price)
      setInventory(prev => [...prev, { ...item, id: Date.now() }])
      showToast(`Purchased ${item.name}!`, 'success')
    } else {
      showToast('Not enough coins!', 'error')
    }
  }

  return (
    <>
      <MainDiv 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        money={money}
        purchaseItem={purchaseItem}
        inventory={inventory}
      />
      <MoneyDisplay money={money} />
      <SnooCharacter />
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