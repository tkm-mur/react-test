import React, {Component, FC} from "react";

const Hello: FC<{}> = (props) => <div>{props.children}</div>;

const logProps = (WrapperComponent: FC) => {
  return class extends Component {
    componentDidMount() {
      console.log('Component is rendered')
    }

    render() {
      return <WrapperComponent>Hello!</WrapperComponent>
    }
  }
};

export default logProps(Hello)
