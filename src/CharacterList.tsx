import React, {FC} from "react";
import {Header, Icon, Item} from "semantic-ui-react";

export type Character = {
  id: number,
  name: string,
  age: number,
  height?: number
}

export type CharacterListProps = {
  school: string,
  characters: Character[]
}

const CharacterList: FC<CharacterListProps> = props => {
  const {school, characters} = props;

  return (
    <>
      <Header as="h2">{school}</Header>
      {
        characters.map(character => (
          <Item.Group>
            <Item key={character.id}>
              <Icon name="user circle" size="huge"/>
              <Item.Content>
                <Item.Header>{character.name}</Item.Header>
                <Item.Meta>{character.age}</Item.Meta>
                <Item.Meta>{character.height ? character.height : '???'}</Item.Meta>
              </Item.Content>
            </Item>
          </Item.Group>
        ))
      }
    </>
  )
};

export default CharacterList;
