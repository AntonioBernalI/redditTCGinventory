import { getAllCards } from '../data/cardData'

// Rarity probabilities
const RARITY_PROBABILITIES = {
  common: 0.6,    // 60%
  uncommon: 0.3,  // 30%
  rare: 0.1       // 10%
}

// Get random rarity based on probabilities
const getRandomRarity = () => {
  const random = Math.random()
  
  if (random < RARITY_PROBABILITIES.rare) {
    return 'rare'
  } else if (random < RARITY_PROBABILITIES.rare + RARITY_PROBABILITIES.uncommon) {
    return 'uncommon'
  } else {
    return 'common'
  }
}

// Get all available cards excluding booster packs
const getAvailableCards = () => {
  return getAllCards().filter(card => card.name !== "Booster Pack")
}

// Generate a random card of specific rarity
const generateRandomCard = (targetRarity) => {
  const availableCards = getAvailableCards()
  const cardsOfRarity = availableCards.filter(card => card.rarity === targetRarity)
  
  if (cardsOfRarity.length === 0) {
    // Fallback to common if no cards of target rarity exist
    const commonCards = availableCards.filter(card => card.rarity === 'common')
    return commonCards[Math.floor(Math.random() * commonCards.length)]
  }
  
  return cardsOfRarity[Math.floor(Math.random() * cardsOfRarity.length)]
}

// Generate 5 random cards for a booster pack
export const generateBoosterPackCards = () => {
  const newCards = []
  
  for (let i = 0; i < 5; i++) {
    const rarity = getRandomRarity()
    const card = generateRandomCard(rarity)
    
    if (card) {
      newCards.push({
        id: Date.now() + i, // Temporary ID, will be replaced when added to inventory
        ...card
      })
    }
  }
  
  return newCards
}