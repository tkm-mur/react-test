import React from 'react'
import Helmet from 'react-helmet'
import { Switch, Route, Redirect } from 'react-router-dom'
import styles from './assets/scss/App.module.scss'

import Home from './components/Home'
import Members from './containers/Members/Members'

const title = 'いろんな会社のメンバー'

const App: React.FC = () => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: 'ja' }}>
        <title>{title}</title>
      </Helmet>

      <div className={styles.container}>
        <header className={styles['App-header']}>
          <h1>{title}</h1>
        </header>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/:companyName/members" component={Members}/>
          <Redirect to="/"/>
        </Switch>
      </div>
    </>
  )
}

export default App
