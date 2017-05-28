import React, { PropTypes } from 'react'
import Beer from './Beer'

const BeerList = ({beers}) => (
  <ul>
    {beers.map(beer =>
      <Beer
        key={beer.id}
        {...beer}
      />
    )}
  </ul>
)

BeerList.propTypes = {
  beers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default BeerList
