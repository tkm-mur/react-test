import React, { FC } from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'
import styles from './Spinner.module.scss'

const Spinner: FC<{}> = () => (
  <Dimmer.Dimmable as={Segment} dimmed={true} className={styles.spinner}>
    <Dimmer active={true} inverted>
      <Loader>Loading...</Loader>
    </Dimmer>
  </Dimmer.Dimmable>
)


export default Spinner
