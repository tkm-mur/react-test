import {Dispatch, bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import Counter from "../../components/counter/Counter";
import {increment, decrement, add} from "../../actions/counter";
import {CounterState} from "../../reducers/counter";

interface StateProps {
  count: number;
}

interface dispatchProps {
  add: (amount: number) => void,
  decrement: () => void,
  increment: () => void
}

const mapStateToProps = (state: { counterReducer: CounterState }): StateProps => {
  return {
    count: state.counterReducer.count
  }
};

const mapDispatchToProps = (dispatch: Dispatch): dispatchProps => {
  return bindActionCreators(
    {add, increment, decrement},
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
