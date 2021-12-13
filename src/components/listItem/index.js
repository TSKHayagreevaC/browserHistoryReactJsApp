import './index.css'

const ListItem = props => {
  const {eachItem, deleteHistoryItem} = props
  const {id} = eachItem
  const onClickDeleteButton = () => {
    deleteHistoryItem(id)
  }
  return (
    <li key={eachItem.id} className="list-item">
      <div className="list-item-container">
        <p className="time-text">{eachItem.timeAccessed}</p>
        <br />
        <img
          className="list-item-logo"
          src={eachItem.logoUrl}
          alt="domain logo"
        />
        <div className="list-item-title-url-container">
          <p className="list-item-title">{eachItem.title}</p>
          <p className="list-item-url">{eachItem.domainUrl}</p>
        </div>
        <button
          className="delete-button"
          type="button"
          testid="delete"
          onClick={onClickDeleteButton}
        >
          <img
            className="delete-image"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default ListItem
