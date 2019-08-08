import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Heading from '../../components/Heading';

const teamList = ['facebook', 'airbnb', 'netflix'];

const Home: FC<{}> = () => {
  return (
    <div>
      <Heading level="h1">Home</Heading>
      <ul>
        <li>
          <Link to="/">Top</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        {teamList.map(teamName => (
          <li key={teamName}>
            <Link to={`/${teamName}/member`}>{teamName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
