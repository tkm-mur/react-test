import React, {FC} from "react";
import {Label, SemanticCOLORS} from 'semantic-ui-react';

export interface ColorfulBeadsProps {
  count: number
}

const range = (n: number) => (n < 0 ? [] : Array.from(Array(n), (_, i) => i));
const colors: SemanticCOLORS[] = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'];

const ColorfulBeads: FC<ColorfulBeadsProps> = props => {
  const {count} = props;

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

export default ColorfulBeads;
