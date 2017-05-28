import React from 'react'
import { connect } from 'react-redux'
import { addBeer } from '../actions'

let AddBeer = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addBeer(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Beer
        </button>
      </form>
    </div>
  )
}

AddBeer = connect()(AddBeer)

export default AddBeer
