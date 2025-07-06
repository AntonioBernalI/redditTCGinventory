import { useEffect, useState } from 'react'
import './ToastNotification.css'

const ToastNotification = ({ message, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onClose, 300)
    }, 2700)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className={`toast-notification ${type} ${isVisible ? 'visible' : ''}`}>
      <div className="toast-content">
        <span className="toast-icon">
          {type === 'success' ? '✅' : '❌'}
        </span>
        <span className="toast-message">{message}</span>
      </div>
    </div>
  )
}

export default ToastNotification