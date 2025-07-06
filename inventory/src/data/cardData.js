// Import all card images
import upvoteImg from '../assets/upvote.png'
import downvoteImg from '../assets/downvote.png'
import karmagunImg from '../assets/karmagun.png'
import banhammerImg from '../assets/banhammer.png'
import potionImg from '../assets/potion.png'
import repostImg from '../assets/repost.png'
import commentImg from '../assets/comment.png'
import devvitduckImg from '../assets/devvitduck.png'
import angrysnooImg from '../assets/angrysnoo.png'
import snooImg from '../assets/snoo.png'
import modImg from '../assets/mod.png'
import karmathiefImg from '../assets/karmathief.png'
import copypastawarriorImg from '../assets/copypastawarrior.png'
import ghostsnooImg from '../assets/ghostsnoo.png'
import spezImg from '../assets/spez.png'
import botImg from '../assets/bot.png'
import adminImg from '../assets/admin.png'
import normalprizeImg from '../assets/normalprize.png'
import bloodyprizeImg from '../assets/bloodyprize.png'
import snooprizeImg from '../assets/snooprize.png'
import karmaprizeImg from '../assets/karmaprize.png'
import nothingImg from '../assets/nothing.png'
import everythingImg from '../assets/everything.png'
import boosterpackImg from '../assets/sobre.png'

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
    karma: 5,
    image: upvoteImg
  },
  downvote: {
    name: "Downvote",
    type: "effects",
    hp: null,
    attacks: [],
    attackCost: [],
    effect: "Attached card takes 10 % less damage.",
    rarity: "common",
    karma: 5,
    image: downvoteImg
  },
  karmagun: {
    name: "Karma Gun",
    type: "effects",
    hp: null,
    attacks: [],
    attackCost: [],
    effect: "Attached card's attack damage is increased by its current Karma.",
    rarity: "uncommon",
    karma: 15,
    image: karmagunImg
  },
  banhammer: {
    name: "Ban Hammer",
    type: "effects",
    hp: null,
    attacks: [],
    attackCost: [],
    effect: "Each attack also reduces the opponent's Karma by 50 %.",
    rarity: "rare",
    karma: 50,
    image: banhammerImg
  },
  potion: {
    name: "Potion",
    type: "effects",
    hp: null,
    attacks: [],
    attackCost: [],
    effect: "Opposing attacks against the attached card are reduced by 10 %.",
    rarity: "rare",
    karma: 45,
    image: potionImg
  },
  repost: {
    name: "Repost",
    type: "effects",
    hp: null,
    attacks: [],
    attackCost: [],
    effect: "Damage dealt to attached card is converted into Karma.",
    rarity: "uncommon",
    karma: 20,
    image: repostImg
  },
  comment: {
    name: "Comment",
    type: "effects",
    hp: null,
    attacks: [],
    attackCost: [],
    effect: "Damage dealt to attached card is converted into HP.",
    rarity: "uncommon",
    karma: 18,
    image: commentImg
  },
  devvitduck: {
    name: "Devvit duck",
    type: "characters",
    hp: 90,
    attacks: ["help"],
    attackCost: [2],
    effect: "help — Increases HP of your attack cards by 10.",
    rarity: "uncommon",
    karma: 25,
    image: devvitduckImg
  },
  angrysnoo: {
    name: "Angry Snoo",
    type: "characters",
    hp: 30,
    attacks: ["mitosis", "angry attack (10)"],
    attackCost: [2, 1],
    effect: "mitosis — Double this card's HP. angry attack — Deal 10 damage to all opponent defense cards.",
    rarity: "rare",
    karma: 60,
    image: angrysnooImg
  },
  snoo: {
    name: "Snoo",
    type: "characters",
    hp: 30,
    attacks: ["antenna strike (10)"],
    attackCost: [1],
    effect: "antenna strike — Deal 10 HP damage.",
    rarity: "common",
    karma: 10,
    image: snooImg
  },
  mod: {
    name: "Mod",
    type: "characters",
    hp: 100,
    attacks: ["Ban"],
    attackCost: [1],
    effect: "Ban — Removes 2 Karma from the attacked card.",
    rarity: "uncommon",
    karma: 30,
    image: modImg
  },
  karmathief: {
    name: "Karma Thief",
    type: "characters",
    hp: 60,
    attacks: ["Rob"],
    attackCost: [1],
    effect: "Rob — Steal 2 Karma from target card and add to this card.",
    rarity: "uncommon",
    karma: 35,
    image: karmathiefImg
  },
  copypastawarrior: {
    name: "Copypasta warrior",
    type: "characters",
    hp: 80,
    attacks: ["Ctrl+V (10)", "Ctrl+C"],
    attackCost: [2, 2],
    effect: "Ctrl+V — Deal 10 damage. Ctrl+C — Increase this card's HP by 10.",
    rarity: "uncommon",
    karma: 28,
    image: copypastawarriorImg
  },
  ghostsnoo: {
    name: "Ghost Snoo",
    type: "characters",
    hp: 1,
    attacks: ["Boo (160)"],
    attackCost: [5],
    effect: "Boo — 160 damage.",
    rarity: "rare",
    karma: 75,
    image: ghostsnooImg
  },
  spez: {
    name: "Spez",
    type: "characters",
    hp: 70,
    attacks: ["Permaban (50)", "Invest (20)"],
    attackCost: [4, 2],
    effect: "Permaban — 50 damage. Invest — Heal 50 HP from this card.",
    rarity: "rare",
    karma: 80,
    image: spezImg
  },
  bot: {
    name: "Bot",
    type: "characters",
    hp: 70,
    attacks: ["Spam (20)"],
    attackCost: [2],
    effect: "Spam — Deal 20 damage and all opponent defense cards take 10 HP damage.",
    rarity: "uncommon",
    karma: 22,
    image: botImg
  },
  admin: {
    name: "Admin",
    type: "characters",
    hp: 110,
    attacks: ["Announcement (20)"],
    attackCost: [3],
    effect: "Announcement — Deal 20 damage and all opponent cards lose 10 % Karma.",
    rarity: "uncommon",
    karma: 40,
    image: adminImg
  },
  normalprize: {
    name: "Normal Prize",
    type: "prizes",
    hp: null,
    attacks: [],
    attackCost: [],
    effect: "Congratulations — (unspecified benefit).",
    rarity: "common",
    karma: 8,
    image: normalprizeImg
  },
  bloodyprize: {
    name: "Bloody Prize",
    type: "prizes",
    hp: null,
    attacks: [],
    attackCost: [],
    effect: "Everyone loses 60 Karma.",
    rarity: "uncommon",
    karma: 25,
    image: bloodyprizeImg
  },
  snooprize: {
    name: "Snoo Prize",
    type: "prizes",
    hp: null,
    attacks: [],
    attackCost: [],
    effect: "Everyone gets 10 Snoo cards.",
    rarity: "uncommon",
    karma: 30,
    image: snooprizeImg
  },
  karmaprize: {
    name: "Karma Prize",
    type: "prizes",
    hp: null,
    attacks: [],
    attackCost: [],
    effect: "Everyone gains 50 Karma points.",
    rarity: "uncommon",
    karma: 35,
    image: karmaprizeImg
  },
  nothing: {
    name: "Nothing",
    type: "prizes",
    hp: null,
    attacks: [],
    attackCost: [],
    effect: "No one receives anything.",
    rarity: "uncommon",
    karma: 15,
    image: nothingImg
  },
  everything: {
    name: "Everything",
    type: "prizes",
    hp: null,
    attacks: [],
    attackCost: [],
    effect: "All players gain every prize from all Prize cards.",
    rarity: "rare",
    karma: 100,
    image: everythingImg
  },
  boosterpack: {
    name: "Booster Pack",
    type: "packs",
    hp: null,
    attacks: [],
    attackCost: [],
    effect: "Open this pack to receive 5 additional random cards for your collection. Each pack contains a mix of characters, effects, and prizes with varying rarities.",
    rarity: "common",
    karma: 12,
    image: boosterpackImg
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