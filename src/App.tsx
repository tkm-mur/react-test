import React from 'react';
import {BrowserRouter, Switch, Route, Link, Redirect} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Page from "./Pages/Page/page";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/page/foo">Page - Foo</Link></li>
            <li><Link to="/page/boo">Page - Bar</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/page/:id" component={Page}/>
          <Redirect to="/"/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
