import React, { PropTypes } from 'react'

const Beer = ({ name }) => (
  <li>
    {name}
  </li>
)

Beer.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Beer
