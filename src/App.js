import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./containers/Main/index";
import { useDispatch } from "react-redux";
import {
  updateForm,
  loadStateFromSessionStorage,
} from "./redux/actions/AdmissionAction";
import { getSessionStorageState } from "./util/sessionStorage";
import { AdmissionForm } from "./redux/models/AdmissionForm";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const { addmissionForm } = getSessionStorageState();
    console.log({ addmissionForm });

    dispatch(loadStateFromSessionStorage(addmissionForm));
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
