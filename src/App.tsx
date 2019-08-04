import React from 'react';
import {Container} from "semantic-ui-react";
import CharacterList, {Character} from "./CharacterList";

const App: React.FC = () => {
  const characters: Character[] = [
    {
      id: 1,
      name: 'test1',
      age: 20,
      height: 160
    },
    {
      id: 2,
      name: 'test2',
      age: 22,
      height: 170
    },
    {
      id: 3,
      name: 'test3',
      age: 28,
      height: 176
    },
  ];

  return (
    <Container>
      <header>
        <h1>はねバド！　キャラクター一覧</h1>
        <CharacterList
          school="ダミーダミー"
          character={characters}
        />
      </header>
    </Container>
  );
}

export default App;
