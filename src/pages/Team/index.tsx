import React, { FC, useEffect } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { getMemberStart } from '../../actions/members';

interface TeamStateProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  users: any[];
  isLoading: boolean;
}

interface TeamDispatchProps {
  getMemberStart: (companyName: string) => void;
}

type TeamProps = TeamStateProps &
  TeamDispatchProps &
  RouteComponentProps<{ teamName: string }>;

// eslint-disable-next-line no-shadow
const Team: FC<TeamProps> = ({ users, isLoading, getMemberStart, match }) => {
  const { teamName } = match.params;

  useEffect(() => {
    getMemberStart(teamName);
  }, []);

  return (
    <div>
      <h1>Team</h1>
      {isLoading ? (
        <p>読み込み中....</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {/* eslint-disable-next-line react/jsx-no-target-blank */}
              <a href={user.html_url} target="_blank">
                {user.login}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = (state: { getMember: TeamStateProps }) => {
  return {
    users: state.getMember.users,
    isLoading: state.getMember.isLoading,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): TeamDispatchProps =>
  bindActionCreators(
    {
      getMemberStart: (companyName: string) => getMemberStart({ companyName }),
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Team);
