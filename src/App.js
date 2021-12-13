import {Component} from 'react'
import ListItem from './components/listItem'
import './App.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class App extends Component {
  state = {
    searchInput: '',
    searchResults: initialHistoryList,
  }

  deleteHistoryItem = id => {
    const {searchResults} = this.state
    const updatedList = searchResults.filter(eachItem => eachItem.id !== id)
    this.setState({searchResults: updatedList})
  }

  onChangeSearchInput = event => {
    const {searchInput} = this.state
    this.setState({searchInput: event.target.value})
    const filteredList = initialHistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    this.setState({searchResults: filteredList})
  }

  renderListItems = () => {
    const {searchResults} = this.state
    return (
      <ul className="list">
        {searchResults.map(eachItem => (
          <ListItem
            key={eachItem.id}
            eachItem={eachItem}
            deleteHistoryItem={this.deleteHistoryItem}
          />
        ))}
      </ul>
    )
  }

  renderEmptyMessage = () => (
    <div className="empty-container">
      <p className="empty-message">There is no history to show</p>
    </div>
  )

  render() {
    const {searchInput, searchResults} = this.state
    const listIsEmpty = searchResults.length !== 0

    return (
      <div className="bg-container">
        <div className="header-container">
          <img
            className="logo-image"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-container">
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
            <input
              className="search-input"
              type="search"
              placeholder="Search history"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
        </div>
        <div className="list-container">
          {listIsEmpty ? this.renderListItems() : this.renderEmptyMessage()}
        </div>
      </div>
    )
  }
}

export default App
