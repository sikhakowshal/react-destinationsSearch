import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props

    const filteredList = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <h1 className="heading">Destinations Search</h1>
        <div className="input-container">
          <input
            type="search"
            className="search-input"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />
          <div className="icon-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="search-icon"
              alt="search icon"
            />
          </div>
        </div>
        <ul className="destinations-container">
          {filteredList.map(each => (
            <DestinationItem key={each.id} destinationDetails={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
