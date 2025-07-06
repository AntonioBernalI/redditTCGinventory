// Global card data object
// Entry names are card names in lowercase without spaces
export const CARD_DATA = {
  upvote: {
    name: "Upvote",
    type: "effects",
    hp: null,
    attacks: [],
    attackCost: [],
    effect: "Attached card's damage is increased by 10 %.",
    rarity: "common",
    image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  downvote: {
    name: "Downvote",
    type: "effects",
    hp: null,
    attacks: [],
    attackCost: [],
    effect: "Attached card takes 10 % less damage.",
    rarity: "common",
    image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  karmagun: {
    name: "Karma Gun",
    type: "effects",
    hp: null,
    attacks: [],
    attackCost: [],
    effect: "Attached card's attack damage is increased by its current Karma.",
    rarity: "uncommon",
    image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  banhammer: {
    name: "Ban Hammer",
    type: "effects",
    hp: null,
    attacks: [],
    attackCost: [],
    effect: "Each attack also reduces the opponent's Karma by 50 %.",
    rarity: "rare",
    image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  potion: {
    name: "Potion",
    type: "effects",
    hp: null,
    attacks: [],
    attackCost: [],
    effect: "Opposing attacks against the attached card are reduced by 10 %.",
    rarity: "rare",
    image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  repost: {
    name: "Repost",
    type: "effects",
    hp: null,
    attacks: [],
    attackCost: [],
    effect: "Damage dealt to attached card is converted into Karma.",
    rarity: "uncommon",
    image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  comment: {
    name: "Comment",
    type: "effects",
    hp: null,
    attacks: [],
    attackCost: [],
    effect: "Damage dealt to attached card is converted into HP.",
    rarity: "uncommon",
    image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  devvitduck: {
    name: "Devvit duck",
    type: "characters",
    hp: 90,
    attacks: ["help"],
    attackCost: [2],
    effect: "help — Increases HP of your attack cards by 10.",
    rarity: "uncommon",
    image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  angrysnoo: {
    name: "Angry Snoo",
    type: "characters",
    hp: 30,
    attacks: ["mitosis", "angry attack (10)"],
    attackCost: [2, 1],
    effect: "mitosis — Double this card's HP. angry attack — Deal 10 damage to all opponent defense cards.",
    rarity: "rare",
    image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  snoo: {
    name: "Snoo",
    type: "characters",
    hp: 30,
    attacks: ["antenna strike (10)"],
    attackCost: [1],
    effect: "antenna strike — Deal 10 HP damage.",
    rarity: "common",
    image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  mod: {
    name: "Mod",
    type: "characters",
    hp: 100,
    attacks: ["Ban"],
    attackCost: [1],
    effect: "Ban — Removes 2 Karma from the attacked card.",
    rarity: "uncommon",
    image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  karmathief: {
    name: "Karma Thief",
    type: "characters",
    hp: 60,
    attacks: ["Rob"],
    attackCost: [1],
    effect: "Rob — Steal 2 Karma from target card and add to this card.",
    rarity: "uncommon",
    image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  copypastawarrior: {
    name: "Copypasta warrior",
    type: "characters",
    hp: 80,
    attacks: ["Ctrl+V (10)", "Ctrl+C"],
    attackCost: [2, 2],
    effect: "Ctrl+V — Deal 10 damage. Ctrl+C — Increase this card's HP by 10.",
    rarity: "uncommon",
    image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  ghostsnoo: {
    name: "Ghost Snoo",
    type: "characters",
    hp: 1,
    attacks: ["Boo (160)"],
    attackCost: [5],
    effect: "Boo — 160 damage.",
    rarity: "rare",
    image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  spez: {
    name: "Spez",
    type: "characters",
    hp: 70,
    attacks: ["Permaban (50)", "Invest (20)"],
    attackCost: [4, 2],
    effect: "Permaban — 50 damage. Invest — Heal 50 HP from this card.",
    rarity: "rare",
    image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  bot: {
    name: "Bot",
    type: "characters",
    hp: 70,
    attacks: ["Spam (20)"],
    attackCost: [2],
    effect: "Spam — Deal 20 damage and all opponent defense cards take 10 HP damage.",
    rarity: "uncommon",
    image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  admin: {
    name: "Admin",
    type: "characters",
    hp: 110,
    attacks: ["Announcement (20)"],
    attackCost: [3],
    effect: "Announcement — Deal 20 damage and all opponent cards lose 10 % Karma.",
    rarity: "uncommon",
    image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  normalprize: {
    name: "Normal Prize",
    type: "prizes",
    hp: null,
    attacks: [],
    attackCost: [],
    effect: "Congratulations — (unspecified benefit).",
    rarity: "common",
    image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  bloodyprize: {
    name: "Bloody Prize",
    type: "prizes",
    hp: null,
    attacks: [],
    attackCost: [],
    effect: "Everyone loses 60 Karma.",
    rarity: "uncommon",
    image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  snooprize: {
    name: "Snoo Prize",
    type: "prizes",
    hp: null,
    attacks: [],
    attackCost: [],
    effect: "Everyone gets 10 Snoo cards.",
    rarity: "uncommon",
    image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  karmaprize: {
    name: "Karma Prize",
    type: "prizes",
    hp: null,
    attacks: [],
    attackCost: [],
    effect: "Everyone gains 50 Karma points.",
    rarity: "uncommon",
    image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  nothing: {
    name: "Nothing",
    type: "prizes",
    hp: null,
    attacks: [],
    attackCost: [],
    effect: "No one receives anything.",
    rarity: "uncommon",
    image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  everything: {
    name: "Everything",
    type: "prizes",
    hp: null,
    attacks: [],
    attackCost: [],
    effect: "All players gain every prize from all Prize cards.",
    rarity: "rare",
    image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
}

// Helper functions to work with card data
export const getCardByKey = (key) => CARD_DATA[key]

export const getCardByName = (name) => {
  const key = name.toLowerCase().replace(/\s+/g, '')
  return CARD_DATA[key]
}

export const getAllCards = () => Object.values(CARD_DATA)

export const getCardsByType = (type) => {
  return Object.values(CARD_DATA).filter(card => card.type === type)
}

export const getCardsByRarity = (rarity) => {
  return Object.values(CARD_DATA).filter(card => card.rarity === rarity)
}

export const createCardKey = (name) => {
  return name.toLowerCase().replace(/\s+/g, '')
}