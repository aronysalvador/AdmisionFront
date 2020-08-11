import React, { useEffect } from "react";
import { connect } from "react-redux";
import Identification from "../Identification/index";
import Sinister from "../Sinister/index";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import useStyles from "../../css/styles";
import PacienteNoAfiliadoError from "../Error/pacienteNoAfiliadoError";
import Consitions from "../Conditions/index";
import PersonalData from "../PersonalData/index";
import LoadPersonalData from "../Load/loadPersonalData";
import Session from "../Welcome/Session";
import FechaHoraSiniestro from "../FechaHoraSiniestro/FechaHoraSiniestro";
import LugarExactoSiniestro from "../LugarSiniestro/LugarExactoSiniestro";
import LugarReferenciaSiniestro from "../LugarSiniestro/LugarReferenciaSiniestro";
import Load from "../Load/load";
import WelcomeEjecutivo from "../Welcome/WelcomeEjecutivo";
import { getAccount } from "../../redux/actions/microsoft.action";
import HealthForecast from "../HealthForecast/index";
import HealthForecastIsapre from "../HealthForecastIsapre/index";
import ValidarCorreoElectronico from "../ValidarCorreoElectronico/ValidarCorreoElectronico";
import AccidentPlaceForm from "../Questions/LugarAccidente";
import AccidentDescription from "../Questions/DescripcionAccidente";
import AccidentObjectForm from "../Questions/ObjetoAccidente";
import QuestionWitness from "../QuestionWitness/index";
import DataWitness from "../DataWitness/index";
import QuestionResponsable from "../QuestionResponsable/index";
import DataResponsable from "../DataResponsable/index";
import FechaHoraResponsable from "../FechaHoraResponsable/index";
import BoxQuestionWitness from "../QuestionWitness/BoxQuestionWitness";
import BoxQuestionResponsable from "../QuestionResponsable/BoxQuestionResponsable";
import TrabajoActualContainer from "../TrabajoActual";
import SeleccionarSucursalTrabajo from "../SeleccionarSucursalTrabajo/SeleccionarSucursalTrabajo";
import SeleccionarComuna from "./../SeleccionarSucursalTrabajo/SeleccionarComuna";
import EditarSucursal from "../SeleccionarSucursalTrabajo/EditarSucursal";
import RouteComuna from "../SeleccionarSucursalTrabajo/RouteComuna";
import EditCompany from "../EditCompany/index";
import JornadaLaboralContainer from "../JornadaLaboral/Index";
import Afp from "../Afp/index";
import EditarTelefono from "../EditarTelefono/EditarTelefono";
import TrabajoHabitual from "../TrabajoHabitual/TrabajoHabitual";
import TipoJornadaLaboral from "../TipoJornadaLaboral/index";
import Remuneracion from "../Remuneracion/Remuneracion";
import CategoriaOcupacional from "../CategoriaOcupacional/index";
import TipoDeContrato from "../TipoDeContrato/TipoDeContrato";
import Cargo from "../Cargo/index";

import DireccionParticular from "../DireccionParticular/index";

import AlertaCalificacion from "../AlertaCalificacion/index";
import AlertaCalificacionRazon from "../AlertaCalificacionRazon";

const Main = (props) => {
  const classes = useStyles();
  const { addmissionForm, dispatch } = props;

  const localGetAccount = () => dispatch(getAccount());

  useEffect(() => {
    localGetAccount();
  }, []);

  const renderForm = (step) => {
    switch (step) {
      case -1:
        return <Load />;
      case 0:
        return <Session />;
      case 1:
        return <WelcomeEjecutivo />;
      case 2:
        return <Sinister />;
      case 3:
        return <Identification />;
      case 4:
        return <Consitions />;
      case 5:
        return <LoadPersonalData />;
      case 5.1:
        return <PersonalData />;
      case 5.2:
        return <DireccionParticular />;
      case 5.3:
        return <EditarTelefono />;
      case 5.4:
        return <EditCompany />;
      case 5.5:
        return <EditarSucursal />;
      case 5.6:
        return <RouteComuna />;
      case 6:
        return <AccidentPlaceForm />;
      case 7:
        return <AccidentDescription />;
      case 8:
        return <AccidentObjectForm />;
      case 9:
        return <FechaHoraSiniestro />;
      case 10:
        return <TrabajoHabitual />;
      case 11:
        return <LugarExactoSiniestro />;
      case 12:
        return <LugarReferenciaSiniestro />;
      case 13:
        return <QuestionWitness />;
      case 14:
        return <DataWitness />;
      case 14.1:
        return <BoxQuestionWitness />;
      case 15:
        return <QuestionResponsable />;
      case 16:
        return <DataResponsable />;
      case 17:
        return <FechaHoraResponsable />;
      case 17.1:
        return <BoxQuestionResponsable />;
      case 18:
        return <Afp />;
      case 19:
        return <HealthForecast />;
      case 19.1:
        return <HealthForecastIsapre />;
      case 20:
        return <TipoJornadaLaboral />;
      case 21:
        return <JornadaLaboralContainer />;
      case 22:
        return <Cargo />;
      case 23:
        return <CategoriaOcupacional />;
      case 24:
        return <TipoDeContrato />;
      case 25:
        return <Remuneracion />;
      case 26:
        return <TrabajoActualContainer />;
      case 27:
        return <ValidarCorreoElectronico />;

      case 90:
        return <AlertaCalificacion />;

      case 90.1:
        return <AlertaCalificacionRazon />;

      case 500: {
        sessionStorage.clear();
        return <PacienteNoAfiliadoError />;
      }

      default: {
        sessionStorage.clear();
        return <PacienteNoAfiliadoError />;
      }
    }
  };

  return (
    <MuiThemeProvider>
      <CssBaseline />
      <div className={classes.layout}>
        <Paper className={classes.paper}>
          {renderForm(addmissionForm.step)}
        </Paper>
      </div>
    </MuiThemeProvider>
  );
};

function mapStateToProps({ addmissionForm }) {
  return {
    addmissionForm: addmissionForm,
  };
}

export default connect(mapStateToProps)(Main);

/**
 * 
 return <SeleccionarSucursalTrabajo />;



 */
