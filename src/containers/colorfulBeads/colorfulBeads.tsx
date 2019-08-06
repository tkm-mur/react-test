import {connect} from "react-redux";
import {CounterState} from "../../reducers/counter";
import ColorfulBeads, {ColorfulBeadsProps} from "../../components/colorfulBeads/ColorfuBeads";

const mapStateToProps = (state: {counterReducer: CounterState}): ColorfulBeadsProps => {
  return {
    count: state.counterReducer.count
  }
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ColorfulBeads);
