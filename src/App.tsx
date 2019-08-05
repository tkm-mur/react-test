import React, {FC} from "react";
import {Container} from "semantic-ui-react";
import CharacterList, {Character} from "./CharacterList";

const App: FC<{}> = () => {
  const characters: Character[] = [
    {
      id: 1,
      name: 'test1',
      age: 20,
      height: 170
    },
    {
      id: 2,
      name: 'test2',
      age: 23,
      height: 162
    },
    {
      id: 3,
      name: 'test3',
      age: 30,
      height: 182
    }
  ];

  const CharacterListProps = {
    school: 'TEST',
    characters: characters
  };

  return (
    <Container>
      <CharacterList {...CharacterListProps} />
    </Container>
  )
};

export default App;
