import React, { FC } from 'react'
import { User } from '../../services/github/model'
import { getMemberFactory } from '../../services/github/api'
import { Card, Header, Image } from 'semantic-ui-react'
import capitalize from 'lodash/capitalize'
import HtmlTitle from '../HtmlTitle'
import Spinner from '../Spinner'

export interface MembersProps {
  companyName: string,
  users: User[],
  isLoading?: boolean
}

const Members: FC<MembersProps> = ({
  companyName = '<会社名>',
  users = [],
  isLoading = false,
}) => {
  const title = `${capitalize(companyName)}の開発メンバー`
  const getMembers = getMemberFactory()

  const test = async () => {
    const res = await getMembers('facebook')
    console.log(res)
  }

  test()

  return (
    <>
      <HtmlTitle title={title}/>
      <div data-test="users">
        <Header as="h2">{title}</Header>
        {/*<Spinner />*/}
        <Card.Group>
          {
            users.map(user => (
              <Card
                key={user.id}
                href={`https://github.com/${user.login}`}
                target="_blank"
              >
                <Card.Content>
                  <Image floated="right" size="mini" src={user.avatar_url}/>
                  <Card.Header data-test="card-header">
                    {user.login}
                  </Card.Header>
                  <Card.Meta>Github ID: {user.id}</Card.Meta>
                </Card.Content>
              </Card>
            ))
          }
        </Card.Group>
      </div>
    </>
  )
}

export default Members
