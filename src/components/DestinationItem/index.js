import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails

  return (
    <div className="destination-item">
      <img src={imgUrl} className="destination-img" alt={name} />
      <p className="destination-name">{name}</p>
    </div>
  )
}

export default DestinationItem
