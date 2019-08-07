import React, { FC } from 'react'
import Helmet from 'react-helmet'

const HtmlTitle: FC<{ title: string }> = ({ title = '' }) => (
  <Helmet>
    <title>{title}</title>
  </Helmet>
)

export default HtmlTitle
