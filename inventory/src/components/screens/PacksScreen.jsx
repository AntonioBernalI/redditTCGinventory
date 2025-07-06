import ItemCard from '../ItemCard'
import './PacksScreen.css'

const PacksScreen = ({ money, purchaseItem }) => {
  const packs = [
    {
      id: 11,
      name: 'Basic Booster Pack',
      price: 50,
      image: 'https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'pack',
      rarity: 'common'
    },
    {
      id: 12,
      name: 'Advanced Pack',
      price: 100,
      image: 'https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'pack',
      rarity: 'uncommon'
    },
    {
      id: 13,
      name: 'Elite Pack',
      price: 200,
      image: 'https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'pack',
      rarity: 'rare'
    },
    {
      id: 14,
      name: 'Legendary Pack',
      price: 400,
      image: 'https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'pack',
      rarity: 'legendary'
    },
    {
      id: 15,
      name: 'Mega Pack Bundle',
      price: 750,
      image: 'https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'pack',
      rarity: 'legendary'
    },
    {
      id: 16,
      name: 'Starter Bundle',
      price: 25,
      image: 'https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'pack',
      rarity: 'common'
    }
  ]

  return (
    <div className="packs-screen">
      <h2 className="screen-title">BOOSTER PACKS</h2>
      <div className="packs-info">
        <p>Open packs to discover new cards for your collection!</p>
      </div>
      <div className="items-grid">
        {packs.map(pack => (
          <ItemCard
            key={pack.id}
            item={pack}
            money={money}
            onPurchase={purchaseItem}
          />
        ))}
      </div>
    </div>
  )
}

export default PacksScreen