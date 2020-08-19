import React, { useEffect, useCallback } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./containers/Main/index";
import { useDispatch } from "react-redux";
import { loadStateFromSessionStorage } from "./redux/actions/AdmissionAction";
import { getSessionStorageState } from "./util/sessionStorage";

function App() {
  const dispatch = useDispatch();

  const initFn = useCallback(() => {
    const result = getSessionStorageState();
    const result2 = result["addmissionForm"]
      ? result["addmissionForm"]
      : result;
    // console.log({ result });
    dispatch(loadStateFromSessionStorage(result2));
  }, [dispatch]);

  useEffect(() => {
    initFn();
  }, [initFn]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
