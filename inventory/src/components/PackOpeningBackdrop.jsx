import { useState, useEffect } from 'react'
import './PackOpeningBackdrop.css'

const PackOpeningBackdrop = ({ isOpen, onClose, newCards }) => {
  const [animationStage, setAnimationStage] = useState('opening') // 'opening', 'revealing', 'complete'
  const [revealedCards, setRevealedCards] = useState([])

  useEffect(() => {
    if (isOpen) {
      setAnimationStage('opening')
      setRevealedCards([])
      
      // Stage 1: Pack opening animation (2 seconds)
      const openingTimer = setTimeout(() => {
        setAnimationStage('revealing')
        
        // Stage 2: Reveal cards one by one (0.5s each)
        newCards.forEach((card, index) => {
          setTimeout(() => {
            setRevealedCards(prev => [...prev, card])
          }, index * 500)
        })
        
        // Stage 3: Complete after all cards are revealed (+ 1 second)
        setTimeout(() => {
          setAnimationStage('complete')
        }, newCards.length * 500 + 1000)
        
      }, 2000)
      
      return () => clearTimeout(openingTimer)
    }
  }, [isOpen, newCards])

  const handleClose = () => {
    setAnimationStage('opening')
    setRevealedCards([])
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="pack-opening-backdrop">
      <div className="pack-opening-content">
        {animationStage === 'opening' && (
          <div className="pack-opening-stage">
            <div className="pack-animation">
              <img 
                src="/src/assets/sobre.png" 
                alt="Opening Pack" 
                className="pack-image opening"
              />
              <div className="opening-sparkles">
                <div className="sparkle sparkle-1">✨</div>
                <div className="sparkle sparkle-2">⭐</div>
                <div className="sparkle sparkle-3">💫</div>
                <div className="sparkle sparkle-4">✨</div>
              </div>
            </div>
            <h2 className="opening-text">Opening Pack...</h2>
          </div>
        )}
        
        {animationStage === 'revealing' && (
          <div className="cards-revealing-stage">
            <h2 className="reveal-title">New Cards Revealed!</h2>
            <div className="revealed-cards-grid">
              {revealedCards.map((card, index) => (
                <div 
                  key={index} 
                  className="revealed-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img 
                    src={card.image} 
                    alt={card.name}
                    className={`card-image ${card.type === 'prizes' ? 'prize-card' : ''} ${card.type === 'packs' ? 'pack-card' : ''}`}
                  />
                  <div className="card-info">
                    <h3 className="card-name">{card.name}</h3>
                    <div 
                      className="card-rarity"
                      style={{ 
                        color: {
                          common: '#888888',
                          uncommon: '#ffffff',
                          rare: '#ffff00',
                          epic: '#9932cc',
                          legendary: '#ffd700'
                        }[card.rarity]
                      }}
                    >
                      {card.rarity.toUpperCase()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {animationStage === 'complete' && (
          <div className="completion-stage">
            <h2 className="completion-title">Pack Opened Successfully!</h2>
            <p className="completion-text">
              {newCards.length} new cards have been added to your collection!
            </p>
            <button 
              className="close-animation-button"
              onClick={handleClose}
            >
              CONTINUE
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default PackOpeningBackdrop