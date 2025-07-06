import ItemCard from '../ItemCard'
import './CardsScreen.css'

const CardsScreen = ({ purchaseItem, inventory }) => {
  const cards = [
    {
      id: 5,
      name: 'Fire Elemental',
      price: 200,
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'card',
      rarity: 'rare'
    },
    {
      id: 6,
      name: 'Water Spirit',
      price: 180,
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'card',
      rarity: 'rare'
    },
    {
      id: 7,
      name: 'Earth Guardian',
      price: 220,
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'card',
      rarity: 'rare'
    },
    {
      id: 8,
      name: 'Wind Dancer',
      price: 160,
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'card',
      rarity: 'uncommon'
    },
    {
      id: 9,
      name: 'Shadow Assassin',
      price: 350,
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'card',
      rarity: 'epic'
    },
    {
      id: 10,
      name: 'Light Paladin',
      price: 320,
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'card',
      rarity: 'epic'
    }
  ]

  const ownedCards = inventory.filter(item => item.type === 'card')

  return (
    <div className="cards-screen">
      <h2 className="screen-title">CARD COLLECTION</h2>
      
      {ownedCards.length > 0 && (
        <div className="owned-section">
          <h3 className="section-title">YOUR CARDS ({ownedCards.length})</h3>
          <div className="items-grid">
            {ownedCards.map(card => (
              <ItemCard
                key={`owned-${card.id}`}
                item={card}
                onPurchase={purchaseItem}
                isOwned={true}
              />
            ))}
          </div>
        </div>
      )}
      
      <div className="shop-section">
        <h3 className="section-title">AVAILABLE CARDS</h3>
        <div className="items-grid">
          {cards.map(card => (
            <ItemCard
              key={card.id}
              item={card}
              onPurchase={purchaseItem}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardsScreen