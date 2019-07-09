import { ADD_NUMBER } from '../actions'

export default (state = { value: 0 }, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return { value: state.value + action.value }
    default:
      return state
  }
}
