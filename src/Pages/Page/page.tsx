import React, {FC} from "react";
import {RouteComponentProps} from 'react-router-dom'

type PageProps = {} & RouteComponentProps<{id: string}>;

const Page: FC<PageProps> = props => {
  return (
    <div>This is {props.match.params.id} Page.</div>
  )
};

export default Page;
