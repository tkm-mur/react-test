export type TeamMembers = {
  id: number,
  name: string,
  age: number
}

export type TeamList = {
  [index: string]: {
    name: string,
    members: TeamMembers[]
  }
}

const teamList: TeamList = {
  team1: {
    name: 'Team1',
    members: [
      {
        id: 1,
        name: 'test 1',
        age: 20
      },
      {
        id: 2,
        name: 'test 2',
        age: 23
      },
      {
        id: 3,
        name: 'test 3',
        age: 28
      }
    ]
  },
  team2: {
    name: 'Team2',
    members: [
      {
        id: 1,
        name: 'test 1',
        age: 20
      },
      {
        id: 2,
        name: 'test 2',
        age: 23
      },
      {
        id: 3,
        name: 'test 3',
        age: 28
      }
    ]
  }
};

export default teamList;
