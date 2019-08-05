import React, {FC} from "react";
import {Header} from "semantic-ui-react";
import {TeamMembers} from "../../domain/teamData";

type TeamListProps = {
  teamName: string,
  teamMembers: TeamMembers[]
}

const TeamList: FC<TeamListProps> = props => {
  const {teamName, teamMembers} = props;

  return (
    <>
      <Header as="h1">{teamName}</Header>
      {
        teamMembers.map(member => (
          <div key={member.id}>
            <div>name: {member.name}</div>
            <div>age: {member.age}</div>
          </div>
        ))
      }
    </>
  )
};

export default TeamList;
