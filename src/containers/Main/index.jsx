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
        return <Identification />;
      case 3:
        return <Sinister />;
      case 4:
        return <Consitions />;
      case 5:
        return <LoadPersonalData />;
      case 5.1:
        return <PersonalData />;
      case 6:
        return <HealthForecast />;
      case 7:
        return <HealthForecastIsapre />;
      case 8: //Tony
        return <ValidarCorreoElectronico />;
      case 9:
        return <FechaHoraSiniestro />;
      case 10:
        return <LugarExactoSiniestro />;
      case 11:
        return <LugarReferenciaSiniestro />;
      case 12:
        return <AccidentPlaceForm />;
      case 13:
        return <AccidentDescription />;
      case 14:
        return <AccidentObjectForm />;
      case 15:
        return <QuestionWitness />;
      case 15.1:
        return <BoxQuestionWitness />;
      case 16:
        return <DataWitness />;
      case 17:
        return <QuestionResponsable />;
      case 17.1:
        return <BoxQuestionResponsable />;
      case 18:
        return <DataResponsable />;
      case 19:
        return <FechaHoraResponsable />;

      case 100: //Tony Agregar seleccionar sucursal
        // return <SeleccionarSucursalTrabajo />;
        return <EditarSucursal />;
      case 101: //Tony Agregar seleccionar sucursal
        // return <SeleccionarSucursalTrabajo />;
        return <RouteComuna />;
      case 30:
        return <EditCompany />;

      case 31:
        return <Afp />;

      case 500: {
        sessionStorage.clear()
        return <PacienteNoAfiliadoError />;
      }

      case 50:
        return <JornadaLaboralContainer />;
      case 51:
        return <TrabajoActualContainer />
        
      default:{
        sessionStorage.clear()
        return <div>Error</div>;
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
