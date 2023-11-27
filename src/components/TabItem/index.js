import './index.css'

const TabItem = props => {
  const {tabDetails, checkWebsite} = props
  const {displayText, tabId} = tabDetails

  const functions = () => {
    checkWebsite(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button type="button" onClick={functions} className="tab-btn">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
