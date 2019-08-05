import React, {FC} from "react";
import {RouteComponentProps} from 'react-router-dom';
import {ClipLoader} from 'react-spinners';
import queryString from 'query-string'
import TeamList from "../../Components/TeamList/TeamList";
import teamData from "../../domain/teamData";

type TeamProps = {} & RouteComponentProps<{ id: string }>

const Team: FC<TeamProps> = (props) => {
  const history = props.history;
  const query = queryString.parse(props.location.search);
  const team = teamData[props.match.params.id];
  const teamName = team.name;
  const teamMembers = team.members;

  return (
    <>
      {
        query.isloading ?
          <div>
            <ClipLoader
              sizeUnit={"px"}
              size={150}
              color={'#123abc'}
              loading={true}
            />
          </div>
          :
          <TeamList
            teamName={teamName}
            teamMembers={teamMembers}
          />
      }
      <button style={{marginTop: '20px'}} onClick={() => history.push('/')}>
        Home
      </button>
    </>
  )
};

export default Team;
