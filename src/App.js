import React, { useEffect, useCallback } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./containers/Main/index";
import { useDispatch } from "react-redux";
import { loadStateFromSessionStorage } from "./redux/actions/AdmissionAction";
import { loadLogStateFromSessionStorage } from "./redux/actions/Log";
import { getSessionStorageState } from "./util/sessionStorage";
//ReduxActions
import { getAFP } from "./redux/actions/AfpAction";
import { getCentros } from "././redux/actions/CentrosAchsAction";
import { getComuna } from "./redux/actions/ComunaAction";
import { getIdiomas } from "././redux/actions/IdiomasAction";
import { getNacionalidades } from "././redux/actions/NacionalidadesAction";
import { getPaises } from "././redux/actions/PaisesAction";
import { searchIsapres } from "./redux/actions/PrevisionAction";
import { getProfesion } from "././redux/actions/ProfesionAction";
import { getContrato } from "./redux/actions/TipoContratoAction";
import { getJornadaLaboralPrincipal } from "././redux/actions/TipoJornadaLaboralAction";
import { getRemuneracion } from "./redux/actions/TipoRemuneracionAction";  
import { getCategoriaOcupacionalPrincipal } from "./redux/actions/CategoriaOcupacionalAction";
import { getAgenteCausa } from "./redux/actions/AgenteCausaAction";
import { getMediosTransporteTrayecto } from "./redux/actions/TrayectoAction";
import { getTiposAccidenteTrayecto } from "./redux/actions/TrayectoAction";
import { getPartesCuerpo } from "./redux/actions/ParteCuerpoAction";

function App() {
  const dispatch = useDispatch();

  const initFn = useCallback(() => {
    const result = getSessionStorageState();
    const result2 = result["addmissionForm"]
      ? result["addmissionForm"]
      : result;
    dispatch(loadStateFromSessionStorage(result2));
    const result3 = result["LogForm"]
      ? result["LogForm"]
      : {
        ID: 0,
        loading: false,
        error: null,
      };
   dispatch(loadLogStateFromSessionStorage(result3));    
  }, [dispatch]);

  useEffect(() => {
    initFn();
  }, [initFn]);

  const initFuncTion = useCallback(() => {
    dispatch(getAFP(""));
    dispatch(getCentros(""));
    dispatch(getComuna(""));
    dispatch(getNacionalidades());
    dispatch(getIdiomas());
    dispatch(getPaises());
    dispatch(searchIsapres());
    dispatch(getProfesion(""));
    dispatch(getContrato(""));
    dispatch(getJornadaLaboralPrincipal(""));
    dispatch(getRemuneracion(""));    
    dispatch(getCategoriaOcupacionalPrincipal(""));
    dispatch(getAgenteCausa());
    dispatch(getMediosTransporteTrayecto());
    dispatch(getTiposAccidenteTrayecto());
    dispatch(getPartesCuerpo());
  }, [dispatch]);

  useEffect(() => {
    initFuncTion()
  }, [initFuncTion]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
