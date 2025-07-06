import { useState, useEffect } from 'react'
import './FullscreenBackdrop.css'

const FullscreenBackdrop = () => {
  const [showBackdrop, setShowBackdrop] = useState(false)

  const checkScreenHeight = () => {
    setShowBackdrop(window.innerHeight < 700)
  }

  useEffect(() => {
    // Check immediately when component mounts
    checkScreenHeight()

    // Check every time window is resized
    window.addEventListener('resize', checkScreenHeight)

    return () => {
      window.removeEventListener('resize', checkScreenHeight)
    }
  }, [])

  if (!showBackdrop) {
    return null
  }

  return (
    <div className="fullscreen-backdrop">
      <div className="backdrop-content">
        <h2>Screen Too Small</h2>
      <h2>PLEASE OPEN FULLSCREEN MODE</h2>
      <p>For the best Reddit TCG Shop experience, please open this page in fullscreen mode or use a larger screen.</p>
    </div>
  )
}

export default FullscreenBackdrop