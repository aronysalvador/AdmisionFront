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
            <div className={paper}>
              <Load />
            </div>
          </div>
        );
      case 0:
        return (
          <div className={layout}>
            <div className={paper}>
              <Session />
            </div>
          </div>
        );
      case 1:
        return (
          <div className={layout}>
            <div className={paper}>
              <WelcomeEjecutivo />
            </div>
          </div>
        );
      case 1.1:
        return (
          <div className={layoutFix}>
            <div className={paperFix}>
              <Start />
            </div>
          </div>
        );
      case 2:
        return (
          <div className={layout}>
            <div className={paper}>
              <Sinister />
            </div>
          </div>
        );
      case 3:
        return (
          <div className={layout}>
            <div className={paper}>
              <Identification />
            </div>
          </div>
        );
      case 4:
        return (
          <div className={layout}>
            <div className={paper}>
              <Consitions />
            </div>
          </div>
        );
      case 5:
        return (
          <div className={layout}>
            <div className={paper}>
              <LoadPersonalData />
            </div>
          </div>
        );
      case 5.1:
        return (
          <div className={layout}>
            <div className={paper}>
              <PersonalData />
            </div>
          </div>
        );
      case 5.2:
        return (
          <div className={layout}>
            <div className={paper}>
              <DireccionParticular />
            </div>
          </div>
        );
      case 5.3:
        return (
          <div className={layout}>
            <div className={paper}>
              <EditarTelefono />
            </div>
          </div>
        );
      case 5.4:
        return (
          <div className={layout}>
            <div className={paper}>
              <EditCompany />
            </div>
          </div>
        );
      case 5.5:
        return (
          <div className={layout}>
            <div className={paper}>
              <EditarSucursal />
            </div>
          </div>
        );
      case 5.6:
        return (
          <div className={layout}>
            <div className={paper}>
              <RouteComuna />
            </div>
          </div>
        );
      case 5.7: 
        return (
          <div className={layoutFix}>
            <div className={layoutFix}>
                <PersonalSuccess />
            </div>
          </div>
        );
      case 6:
        return (
          <div className={layout}>
            <div className={paper}>
              <AccidentPlaceForm />
            </div>
          </div>
        );
      case 7:
        return (
          <div className={layout}>
            <div className={paper}>
              <AccidentDescription />
            </div>
          </div>
        );
      case 8:
        return (
          <div className={layout}>
            <div className={paper}>
              <AccidentObjectForm />
            </div>
          </div>
        );
      case 9:
        return (
          <div className={layout}>
            <div className={paper}>
              <FechaHoraSiniestro />
            </div>
          </div>
        );
      case 10:
        return (
          <div className={layout}>
            <div className={paper}>
              <TrabajoHabitual />
            </div>
          </div>
        );
      case 11:
        return (
          <div className={layout}>
            <div className={paper}>
              <LugarExactoSiniestro />
            </div>
          </div>
        );
      case 12:
        return (
          <div className={layout}>
            <div className={paper}>
              <LugarReferenciaSiniestro />
            </div>
          </div>
        );
      case 13:
        return (
          <div className={layout}>
            <div className={paper}>
              <QuestionWitness />
            </div>
          </div>
        );
      case 14:
        return (
          <div className={layout}>
            <div className={paper}>
              <DataWitness />
            </div>
          </div>
        );
      case 14.1:
        return (
          <div className={layout}>
            <div className={paper}>
              <BoxQuestionWitness />
            </div>
          </div>
        );
      case 15:
        return (
          <div className={layout}>
            <div className={paper}>
              <QuestionResponsable />
            </div>
          </div>
        );
      case 16:
        return (
          <div className={layout}>
            <div className={paper}>
              <DataResponsable />
            </div>
          </div>
        );
      case 17:
        return (
          <div className={layout}>
            <div className={paper}>
              <FechaHoraResponsable />
            </div>
          </div>
        );
      case 17.1:
        return (
          <div className={layout}>
            <div className={paper}>
              <BoxQuestionResponsable />
            </div>
          </div>
        );
      case 18:
        return (
          <div className={layout}>
            <div className={paper}>
              <Afp />
            </div>
          </div>
        );
      case 19:
        return (
          <div className={layout}>
            <div className={paper}>
              <HealthForecast />
            </div>
          </div>
        );
      case 19.1:
        return (
          <div className={layout}>
            <div className={paper}>
              <HealthForecastIsapre />
            </div>
          </div>
        );
      case 19.2:
        return (
          <div className={layoutFix}>
            <div className={paperFix}>
               <RelatoSuccess />
            </div>
          </div>
        );
      case 20:
        return (
          <div className={layout}>
            <div className={paper}>
              <TipoJornadaLaboral />
            </div>
          </div>
        );
      case 21:
        return (
          <div className={layout}>
            <div className={paper}>
              <JornadaLaboralContainer />
            </div>
          </div>
        );
      case 22:
        return (
          <div className={layout}>
            <div className={paper}>
              <Cargo />
            </div>
          </div>
        );
      case 23:
        return (
          <div className={layout}>
            <div className={paper}>
              <CategoriaOcupacional />
            </div>
          </div>
        );
      case 24:
        return (
          <div className={layout}>
            <div className={paper}>
              <TipoDeContrato />
            </div>
          </div>
        );
      case 25:
        return (
          <div className={layout}>
            <div className={paper}>
              <Remuneracion />
            </div>
          </div>
        );
      case 26:
        return (
          <div className={layout}>
            <div className={paper}>
              <TrabajoActualContainer />
            </div>
          </div>
        );
      case 27:
        return (
          <div className={layout}>
            <div className={paper}>
              <ValidarCorreoElectronico />
            </div>
          </div>
        );
      case 1000:
        return (
          <div className={layout}>
            <div className={paper}>
              <PantallaFinal />
            </div>
          </div>
        );
      case 500: {
        sessionStorage.clear();
        return (
          <div className={layout}>
            <div className={paper}>
              <PacienteNoAfiliadoError />
            </div>
          </div>
        );
      }

      default: {
        sessionStorage.clear();
        return (
          <div className={layout}>
            <div className={paper}>
              <PacienteNoAfiliadoError />
            </div>
          </div>
        );
      }
    }
  };

  return (
    <MuiThemeProvider>
      <CssBaseline />
      <Paper>{renderForm(addmissionForm.step)}</Paper>
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
