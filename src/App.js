import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './containers/Main/index';

function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;