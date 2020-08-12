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
import Start from "../Welcome/WelcomeStart";
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

import PersonalSuccess from "../FeedBack/PersonalSuccess";
import RelatoSuccess from "../FeedBack/RelatoSuccess";

import DireccionParticular from "../DireccionParticular/index";
import PantallaFinal from "../PantallaFinal/PantallaFinal";
import CreandoCaso from "../PantallaFinal/CreandoCaso";

import AlertaCalificacion from "../AlertaCalificacion/index";
import AlertaCalificacionRazon from "../AlertaCalificacionRazon/index";
import CausaNolaboral from "../AlertaCalificacionRazon/CausaNoLaboral";
import LoadRazonAlerta from "../Load/loadRazonAlerta";
import ErrorCaso from "../PantallaFinal/ErrorCaso";

const Main = (props) => {
  const classes = useStyles();
  const { addmissionForm, dispatch } = props;

  const localGetAccount = () => dispatch(getAccount());

  useEffect(() => {
    localGetAccount();
  }, []);

  const { layout, paper, layoutFix, paperFix } = classes;

  const renderForm = (step) => {
    switch (step) {
      case -1:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <Load />
            </Paper>
          </div>
        );
      case 0:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <Session />
            </Paper>
          </div>
        );
      case 1:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <WelcomeEjecutivo />
            </Paper>
          </div>
        );
      case 1.1:
        return (
          <div className={layoutFix}>
            <Paper className={paperFix}>
              <Start />
            </Paper>
          </div>
        );
      case 2:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <Sinister />
            </Paper>
          </div>
        );
      case 3:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <Identification />
            </Paper>
          </div>
        );
      case 4:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <Consitions />
            </Paper>
          </div>
        );
      case 5:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <LoadPersonalData />
            </Paper>
          </div>
        );
      case 5.1:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <PersonalData />
            </Paper>
          </div>
        );
      case 5.2:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <DireccionParticular />
            </Paper>
          </div>
        );
      case 5.3:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <EditarTelefono />
            </Paper>
          </div>
        );
      case 5.4:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <EditCompany />
            </Paper>
          </div>
        );
      case 5.5:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <EditarSucursal />
            </Paper>
          </div>
        );
      case 5.6:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <RouteComuna />
            </Paper>
          </div>
        );
      case 5.7:
        return (
          <div className={layoutFix}>
            <Paper className={paperFix}>
              <PersonalSuccess />
            </Paper>
          </div>
        );
      case 6:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <AccidentPlaceForm />
            </Paper>
          </div>
        );
      case 7:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <AccidentDescription />
            </Paper>
          </div>
        );
      case 8:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <AccidentObjectForm />
            </Paper>
          </div>
        );
      case 9:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <FechaHoraSiniestro />
            </Paper>
          </div>
        );

      case 10:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <TrabajoHabitual />
            </Paper>
          </div>
        );

      case 11:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <LugarExactoSiniestro />
            </Paper>
          </div>
        );
      case 12:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <LugarReferenciaSiniestro />
            </Paper>
          </div>
        );
      case 13:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <QuestionWitness />
            </Paper>
          </div>
        );
      case 14:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <DataWitness />
            </Paper>
          </div>
        );
      case 14.1:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <BoxQuestionWitness />
            </Paper>
          </div>
        );
      case 15:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <QuestionResponsable />
            </Paper>
          </div>
        );
      case 16:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <DataResponsable />
            </Paper>
          </div>
        );
      case 17:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <FechaHoraResponsable />
            </Paper>
          </div>
        );
      case 17.1:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <BoxQuestionResponsable />
            </Paper>
          </div>
        );
      case 18:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <Afp />
            </Paper>
          </div>
        );
      case 19:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <HealthForecast />
            </Paper>
          </div>
        );
      case 19.1:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <HealthForecastIsapre />
            </Paper>
          </div>
        );
      case 19.2:
        return (
          <div className={layoutFix}>
            <Paper className={paperFix}>
              <RelatoSuccess />
            </Paper>
          </div>
        );
      case 20:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <TipoJornadaLaboral />
            </Paper>
          </div>
        );
      case 21:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <JornadaLaboralContainer />
            </Paper>
          </div>
        );
      case 22:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <Cargo />
            </Paper>
          </div>
        );
      case 23:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <CategoriaOcupacional />
            </Paper>
          </div>
        );
      case 24:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <TipoDeContrato />
            </Paper>
          </div>
        );
      case 25:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <Remuneracion />
            </Paper>
          </div>
        );
      case 26:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <TrabajoActualContainer />
            </Paper>
          </div>
        );
      case 27:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <ValidarCorreoElectronico />
            </Paper>
          </div>
        );

      case 1000:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <CreandoCaso />
            </Paper>
          </div>
        );
      case 1001:
        return (
          <div className={layoutFix}>
            <Paper className={paperFix}>
              <PantallaFinal />
            </Paper>
          </div>
        );
      case 1002:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <ErrorCaso />
            </Paper>
          </div>
        );

      case 90:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <AlertaCalificacion />
            </Paper>
          </div>
        );
      case 90.1:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <AlertaCalificacionRazon />
            </Paper>
          </div>
        );

      case 90.2:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <CausaNolaboral />
            </Paper>
          </div>
        );

      case 90.3:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <LoadRazonAlerta />
            </Paper>
          </div>
        );

      case 500: {
        sessionStorage.clear();
        return (
          <div className={layout}>
            <Paper className={paper}>
              <PacienteNoAfiliadoError />
            </Paper>
          </div>
        );
      }

      default: {
        sessionStorage.clear();
        return (
          <div className={layout}>
            <Paper className={paper}>
              <PacienteNoAfiliadoError />
            </Paper>
          </div>
        );
      }
    }
  };

  return (
    <MuiThemeProvider>
      <CssBaseline />
      {renderForm(addmissionForm.step)}
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
