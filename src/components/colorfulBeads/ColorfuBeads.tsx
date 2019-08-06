import React, {FC} from "react";
import {connect} from "react-redux";
import {Label, SemanticCOLORS} from 'semantic-ui-react';
import {CounterState} from "../../reducers/counter";

const range = (n: number) => (n < 0 ? [] : Array.from(Array(n), (_, i) => i));
const colors: SemanticCOLORS[] = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'];

export interface ColorfulBeadsProps {
  count: number
}

const ColorfulBeads: FC<ColorfulBeadsProps> = props => {
  const {count} = props;

  console.log(range(count));

  return (
    <div>
      {
        range(count).map((i: number) => (
          <Label circular color={colors[i % colors.length]} key={i} />
        ))
      }
    </div>
  )
};

const mapStateToProps = (state: {counterReducer: CounterState}): ColorfulBeadsProps => {
  return {
    count: state.counterReducer.count
  }
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ColorfulBeads);
