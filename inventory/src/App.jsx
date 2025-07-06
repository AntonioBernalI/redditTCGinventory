import { useState } from 'react'
import MainDiv from './components/MainDiv'
import ToastNotification from './components/ToastNotification'
import FullscreenBackdrop from './components/FullscreenBackdrop'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('featured')
  const [toast, setToast] = useState(null)
  const [inventory, setInventory] = useState([])

  const showToast = (message, type = 'success') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3000)
  }

  const purchaseItem = (item) => {
    setInventory(prev => [...prev, { ...item, id: Date.now() }])
    showToast(`Purchased ${item.name}!`, 'success')
  }

  return (
    <>
      <MainDiv 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        purchaseItem={purchaseItem}
        inventory={inventory}
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