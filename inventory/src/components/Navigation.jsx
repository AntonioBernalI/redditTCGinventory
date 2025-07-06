import './Navigation.css'

const Navigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'featured', label: 'FEATURED' },
    { id: 'cards', label: 'CARDS' },
    { id: 'packs', label: 'PACKS' }
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