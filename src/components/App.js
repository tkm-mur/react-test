import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions' // action creator をインポート

const App = ({value, increment, decrement}) => {
  return (
    <div id="App">
      <h1>Redux Test</h1>
      <p>count: {value}</p>
      <div>
        <button onClick={ () => increment() }>INCREMENT</button>
        <button onClick={ () => decrement() }>DECREMENT</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {value: state.count.value}
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
