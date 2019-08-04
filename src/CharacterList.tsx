import React, {Component} from "react";
import {Header, Icon, Item} from "semantic-ui-react";

export interface Character {
  id: number,
  name: string,
  age: number,
  height?: number
}

export interface CharacterListProps {
  school: string,
  character: Character[]
}

export class CharacterList extends Component<CharacterListProps> {
  render() {
    const {school, character} = this.props;

    return (
      <>
        <Header as="h2">{school}</Header>
        <Item.Group>
          {
            character.map((c) => (
              <Item key={c.id}>
                <Icon name="user circle" size="huge" />
                {
                  <Item.Content>
                    <Item.Header>{c.name}</Item.Header>
                    <Item.Meta>{c.age}歳</Item.Meta>
                    <Item.Meta>{c.height? c.height : '???'}</Item.Meta>
                  </Item.Content>
                }
              </Item>
            ))
          }
        </Item.Group>
      </>
    );
  }
}

export default CharacterList
