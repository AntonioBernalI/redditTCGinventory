import { useState } from 'react'
import Header from './Header'
import Navigation from './Navigation'
import FeaturedScreen from './screens/FeaturedScreen'
import CardsScreen from './screens/CardsScreen'
import PacksScreen from './screens/PacksScreen'
import './MainDiv.css'

const MainDiv = ({ activeTab, setActiveTab, purchaseItem, inventory }) => {
  const renderScreen = () => {
    switch (activeTab) {
      case 'featured':
        return <FeaturedScreen purchaseItem={purchaseItem} />
      case 'cards':
        return <CardsScreen purchaseItem={purchaseItem} inventory={inventory} />
      case 'packs':
        return <PacksScreen purchaseItem={purchaseItem} />
      default:
        return <FeaturedScreen purchaseItem={purchaseItem} />
    }
  }

  return (
    <div className="main-div">
      <Header />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="content-screen">
        {renderScreen()}
      </div>
    </div>
  )
}

export default MainDiv