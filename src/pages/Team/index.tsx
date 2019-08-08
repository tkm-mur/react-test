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

const Team: FC<TeamProps> = ({ users, isLoading, getMemberStart, match }) => {
  const { teamName } = match.params;
  const test = getMemberStart;

  useEffect(() => {
    test(teamName);
  }, []);

  return (
    <div>
      <h1>Team</h1>
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
