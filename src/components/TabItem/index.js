import './index.css'

const TabItem = props => {
  const {tabDetails, checkWebsite, isActive} = props
  const {displayText, tabId} = tabDetails

  const functions = () => {
    checkWebsite(tabId)
  }

  const activeClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        onClick={functions}
        className={`${activeClassName} tab-btn`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
