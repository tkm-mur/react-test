import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNumber } from '../actions'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      amount: 0
    }
  }

  handleChange = (e) => {
    const newValue = parseInt(e.currentTarget.value)
    this.setState(() => {
      return {
        amount: newValue
      }
    })
  }

  handleSubmit = (e) => {
    const { addNumber } = this.props
    addNumber(this.state.amount)
    e.preventDefault()
  }

  render () {
    const { count: { value } } = this.props

    return (
      <div id="App">
        <h1>REDUX TEST</h1>
        <p>count: { value }</p>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <label>
            add Number: <input type="number" onChange={ (e) => this.handleChange(e) }/>
          </label>
          <div>
            <input type="submit" value="submit"/>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ( state ) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNumber: (num) => dispatch(addNumber(num))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
