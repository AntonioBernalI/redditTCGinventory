import './Navigation.css'

const Navigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'collection', label: 'MY COLLECTION' },
    { id: 'rarity', label: 'BY RARITY' },
    { id: 'recent', label: 'RECENTLY ADDED' }
  ]

  return (
    <div className="navigation">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`nav-button ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default Navigation