import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./containers/Main/index";
import { useDispatch } from "react-redux";
import { updateForm } from "./redux/actions/AdmissionAction";

function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
