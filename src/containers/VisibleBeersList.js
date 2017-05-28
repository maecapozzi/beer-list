import { connect } from 'react-redux'
import BeerList from '../components/BeerList'

const getVisibleBeers = (beers) => {
  return beers
}

const mapStateToProps = (state) => {
  return {
    beers: getVisibleBeers(state.beers)
  }
}

const VisibleBeersList = connect(
  mapStateToProps
)(BeerList)

export default VisibleBeersList
