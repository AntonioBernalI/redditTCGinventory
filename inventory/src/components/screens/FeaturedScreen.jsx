import ItemCard from '../ItemCard'
import './FeaturedScreen.css'

const FeaturedScreen = ({ money, purchaseItem }) => {
  const featuredItems = [
    {
      id: 1,
      name: 'Legendary Dragon Card',
      price: 500,
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'card',
      rarity: 'legendary'
    },
    {
      id: 2,
      name: 'Premium Booster Pack',
      price: 150,
      image: 'https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'pack',
      rarity: 'premium'
    },
    {
      id: 3,
      name: 'Rare Phoenix Card',
      price: 300,
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'card',
      rarity: 'rare'
    },
    {
      id: 4,
      name: 'Starter Pack Bundle',
      price: 75,
      image: 'https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'pack',
      rarity: 'common'
    }
  ]

  return (
    <div className="featured-screen">
      <h2 className="screen-title">FEATURED ITEMS</h2>
      <div className="items-grid">
        {featuredItems.map(item => (
          <ItemCard
            key={item.id}
            item={item}
            money={money}
            onPurchase={purchaseItem}
          />
        ))}
      </div>
    </div>
  )
}

export default FeaturedScreen