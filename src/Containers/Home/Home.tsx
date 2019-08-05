import React, {FC} from "react";
import Helmet from "react-helmet";
import {Link} from "react-router-dom";
import {Header} from "semantic-ui-react";

import teamList from "../../domain/teamData";

const Home: FC<{}> = () => {

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section>
        <Header as="h1">Introduction</Header>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
          Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
          In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
          link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
          enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
          ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
          Curabitur ullamcorper ultricies nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
          Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Donec quam felis, ultricies.
        </p>

        <Header as="h2">Teams</Header>
        <ul>
          {
            Object.keys(teamList).map(team => (
              <li key={team}>
                <Link to={`/team/${team}`}>
                  {teamList[team].name}
                </Link>
              </li>
            ))
          }
        </ul>
      </section>
    </>
  )
};

export default Home;

