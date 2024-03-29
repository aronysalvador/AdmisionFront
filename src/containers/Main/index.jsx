import { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import Identification from "../Identification/index";
import Siniester from "../Siniester/index";
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
import LugarSiniestroMapaSelection from "../LugarSiniestro/LugarSiniestroMapaSelection";
import LugarReferenciaSiniestro from "../LugarSiniestro/LugarReferenciaSiniestro";
import Load from "../Load/load";
// import Start from "../Welcome/WelcomeStart";
import HealthForecast from "../HealthForecast/index";
import HealthForecastIsapre from "../HealthForecastIsapre/index";
import ValidarCorreoElectronico from "../ValidarCorreoElectronico/ValidarCorreoElectronico";
import RelatoCompleto from "../Questions/RelatoCompleto"
import AccidentPlaceForm from "../Questions/LugarAccidente";
import AccidentDescription from "../Questions/DescripcionAccidente";
import AccidentObjectForm from "../Questions/ObjetoAccidente";
import QuestionWitness from "../QuestionWitness/index";
import DataWitness from "../DataWitness/index";
import QuestionResponsable from "../QuestionResponsable/index";
import DataResponsable from "../DataResponsable/index";
import FlujoTrabajo from "../TestigoResponsable/FlujoTrabajo";
import FlujoTrayecto from "../TestigoResponsable/FlujoTrayecto";
import FechaHoraResponsable from "../FechaHoraResponsable/index";
import BoxQuestionWitness from "../QuestionWitness/BoxQuestionWitness";
import BoxQuestionResponsable from "../QuestionResponsable/BoxQuestionResponsable";
import TrabajoActualContainer from "../TrabajoActual";
import EditarSucursal from "../SeleccionarSucursalTrabajo/EditarSucursal";
import RouteComuna from "../SeleccionarSucursalTrabajo/RouteComuna";
import EditCompany from "../EditCompany/index";
import GrupoEtnico from "../GrupoEtnico/index";
import GrupoEtnicoNew from "../GrupoEtnico/Question";
import JornadaLaboralContainer from "../JornadaLaboral/Index";
import Afp from "../Afp/index";
import BotonesAFP from "../Afp/BotonesAFP";
import EditarTelefono from "../EditarTelefono/EditarTelefono";
import EditarTelefonoCorreo from "../EditarTelefono/EditarTelefonoCorreo";
import TrabajoHabitual from "../TrabajoHabitual/TrabajoHabitual";
import TipoJornadaLaboral from "../TipoJornadaLaboral/index";
import Remuneracion from "../Remuneracion/Remuneracion";
import CategoriaOcupacional from "../CategoriaOcupacional/index";
import TipoDeContrato from "../TipoDeContrato/TipoDeContrato";
import Cargo from "../Cargo/index";
// import PersonalSuccess from "../FeedBack/PersonalSuccess";
// import RelatoSuccess from "../FeedBack/RelatoSuccess";
import SolicitarDocumentos from "../FeedBack/SolicitarDocumentos";
import DireccionParticular from "../DireccionParticular/index";
import SinDireccion from "../DireccionParticular/SinDireccion";
import DireccionParticularMapaSelection from "../DireccionParticular/MapaSelection";
import HasBP from "../AffiliateValidations/HasBP";
import SinBPInfoPersonal1 from "../NoTieneBP/InfoPersonal1";
import SinBPInfoPersonal2 from "../NoTieneBP/InfoPersonal2";
import HasScheduledMeet from "../AffiliateValidations/HasScheduledMeet";
import HasSinister from "../AffiliateValidations/HasSinister";
import HasSinisterDetail from "../AffiliateValidations/HasSinisterDetail";
import HasSinisterList from "../AffiliateValidations/HasSinisterList";
import ContinueSAP from "../AffiliateValidations/ContinueSAP";
import PantallaFinal from "../PantallaFinal/PantallaFinal";
import CreandoCaso from "../PantallaFinal/CreandoCaso";
import AlertaCalificacion from "../AlertaCalificacion/index";
import AlertaCalificacionRazon from "../AlertaCalificacionRazon/index";
import CausaNolaboral from "../AlertaCalificacionRazon/CausaNoLaboral";
import LoadRazonAlerta from "../Load/loadRazonAlerta";
import ErrorCaso from "../PantallaFinal/ErrorCaso";
import ErrorCrearCaso from "../PantallaFinal/ErrorCrearCaso";
import ErrorCrearCasoSiniestro from "../PantallaFinal/ErrorCrearCasoSiniestro";
import CasoCreado from "../PantallaFinal/CasoCreado";
import CasoCreadoErrorDoc from "../PantallaFinal/CasoCreadoErrorDoc";
import CasoDuplicado from "../PantallaFinal/CasoDuplicado";
import CasoCreadoErrorStatus from "../PantallaFinal/CasoCreadoErrorStatus";
import ErrorApi from "../PantallaFinal/ErrorApi";
import SameDateSinister from "../AffiliateValidations/SameDateSinister";
import NoCuentaSap from "../AffiliateValidations/NoCuentaSap";
import Achs from "../IdentificacionACHS/index";
import SessionAchs from "../IdentificacionACHS/WelcomeAchs";
import Profesion from "../Profesion/index";
import DatosContractuales from "../DatosContractuales";
import RelatoFinal from "../Questions/RelatoFinal";
import AccidenteEnSucursal from "../AccidenteEnSucursal/AccidenteEnSucursal";
import NoAfiliate from "../AffiliateValidations/NoAfiliate";
import NoQuotes from "../AffiliateValidations/NoQuotes";
import NoVigente from "../AffiliateValidations/NoVigente";
import SucursalesNoVigentes from "../AffiliateValidations/SucursalesNoVigentes";
import TrabajadorIndependiente from "../CategoriaOcupacional/TrabajadorIndependiente";
import MedioTransporteTrayecto from "../MedioTrayecto/MedioTransporteTrayecto";
import CausalSiniestroTrayecto from "../MedioTrayecto/CausalSiniestroTrayecto";
import TipoAccidenteTrayecto from "../MedioTrayecto/TipoAccidenteTrayecto";
import LugarSiniestroTrayectoMapa from "../LugarSiniestroTrayecto/LugarSiniestroTrayectoMapa";
import LugarSiniestroTrayectoMapaNew from "../LugarSiniestroTrayecto/LugarSiniestroTrayectoMapaNew";
import LugarTrabajoTrayectoMapa from "../LugarSiniestroTrayecto/LugarTrabajoTrayectoMapa";
import LugarSiniestroTrayecto from "../LugarSiniestroTrayecto/LugarSiniestroTrayecto";
import ParteCuerpoAfectada from "../ParteAfectadaTrayecto/ParteCuerpoAfectada";
import CausaEnfermedadProfesional from "../EnfermedadProfesional/CausaEnfermedadProfesional";
import AgenteCausaEnfermedadProfesional from "../EnfermedadProfesional/AgenteCausaEnfermedadProfesional";
import TipoAvisoResponsable from "../TipoAvisoResponsable/index";
import AtencionPrevia from "../AtencionPrevia/index";
import AtencionMedica from "../AtencionPrevia/AtencionMedica";
import DocComplementariosTrayecto from "../DocComplementariosTrayecto/DocComplementariosTrayecto";
import PruebasComplementarias from "../DocComplementariosTrayecto/PruebasComplementarias";
import Forecasts from "../Forecasts";
import InfoAccidente from "./../InfoAccidente";
import CentroPaciente from "../Identification/centroPaciente";

const Main = (props) => {
  const classes = useStyles();
  const { addmissionForm, microsoftReducer } = props;

  const initFn = useCallback(() => {
    if (!microsoftReducer.authenticatedMsal) {
      // Para no tener que estar autenticando siempre se puede comentar esta línea
      // addmissionForm.step = 0;
    }
  }, [ microsoftReducer ]);

  useEffect(() => {
    initFn();
  }, [ initFn ]);

  const {
    layout,
    paper,
    layoutFix,
    paperFix,
    blackLayout,
    paperNoColor,
    paperAutoHeight,
    paperBlackAutoHeight
  } = classes;

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
          <div className={layoutFix}>
            <Paper className={paperFix}>
              <Session />
            </Paper>
          </div>
        );
      case 1:
        return (
          <div className={layoutFix}>
            <Paper className={paperFix}>
              <SessionAchs />
            </Paper>
          </div>
        );
      // case 1.1:
      //   return (
      //     <div className={layoutFix}>
      //       <Paper className={paperFix}>
      //         <Start />
      //       </Paper>
      //     </div>
      //   );
      case 2:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <Siniester />
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
      case 4: // Términos y condiciones, No se usa.
        return (
          <div className={layout}>
            <Paper className={paper}>
              <Consitions />
            </Paper>
          </div>
        );
      case 5: // loading
        return (
          <div className={layout}>
            <Paper className={paperFix}>
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
      case 5.11:
        return (
          <div className={blackLayout}>
            <Paper className={paperNoColor}>
              <NoAfiliate />
            </Paper>
          </div>
        );
      case 5.12:
        return (
          <div className={blackLayout}>
            <Paper className={paperNoColor}>
              <NoQuotes />
            </Paper>
          </div>
        );
      case 5.13:
        return (
          <div className={blackLayout}>
            <Paper className={paperNoColor}>
              <NoVigente />
            </Paper>
          </div>
        );
      case 5.14:
        return (
          <div className={blackLayout}>
            <Paper className={paperNoColor}>
              <SucursalesNoVigentes />
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
      case 5.21:
        return (
          <div className={layoutFix}>
            <Paper className={paperFix}>
              <DireccionParticularMapaSelection />
            </Paper>
          </div>
        );
      case 5.22:
        return (
          <div className={layoutFix}>
            <Paper className={paperFix}>
              <SinDireccion />
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
      case 5.31:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <EditarTelefonoCorreo />
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
      case 5.41:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <GrupoEtnico />
            </Paper>
          </div>
        );
      case 5.42:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <GrupoEtnicoNew />
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
      // case 5.7: ELIMINADO
      //   return (
      //     <div className={layoutFix}>
      //       <Paper className={paperFix}>
      //         <PersonalSuccess />
      //       </Paper>
      //     </div>
      //   );
      case 5.7: // Centro Paciente
        return (
          <div className={layout}>
            <Paper className={paper}>
              <CentroPaciente />
            </Paper>
          </div>
        );
      case 5.81:
        return (
          <div className={blackLayout}>
            <Paper className={paperNoColor}>
              <HasBP />
            </Paper>
          </div>
        );
      case 5.812:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <SinBPInfoPersonal1 />
            </Paper>
          </div>
        );
      case 5.813:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <SinBPInfoPersonal2 />
            </Paper>
          </div>
        );
      case 5.82:
        return (
          <div className={blackLayout}>
            <Paper className={paperNoColor}>
              <HasScheduledMeet />
            </Paper>
          </div>
        );
      case 5.83:
        return (
          <div className={blackLayout}>
            <Paper className={paperNoColor}>
              <HasSinister />
            </Paper>
          </div>
        );
      case 5.831:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <HasSinisterList />
            </Paper>
          </div>
        );
      case 5.832:
        return (
          <div className={blackLayout}>
            <Paper className={paperNoColor}>
              <HasSinisterDetail />
            </Paper>
          </div>
        );
      case 5.833:
        return (
          <div className={layout}>
            <Paper className={paperFix}>
              <SameDateSinister />
            </Paper>
          </div>
        );
      case 5.9: // loading
        return (
          <div className={layout}>
            <Paper className={paperFix}>
              <ContinueSAP />
            </Paper>
          </div>
        );
      case 6.01: // Inicio Trayecto
        return (
          <div className={layout}>
            <Paper className={paper}>
              <TipoAccidenteTrayecto />
            </Paper>
          </div>
        );
      case 6.011: // Inicio Trayecto
        return (
          <div className={layout}>
            <Paper className={paper}>
              <LugarTrabajoTrayectoMapa />
            </Paper>
          </div>
        );
      case 6.02:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <MedioTransporteTrayecto />
            </Paper>
          </div>
        );
      case 6.03:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <CausalSiniestroTrayecto />
            </Paper>
          </div>
        );
      case 6.04: // Inicio EP
        return (
          <div className={layout}>
            <Paper className={paper}>
              <CausaEnfermedadProfesional />
            </Paper>
          </div>
        );
      case 6.05:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <AgenteCausaEnfermedadProfesional />
            </Paper>
          </div>
        );
      case 6.06: // Relato Unificado
        return (
          <div className={layout}>
            <Paper className={paper}>
              <RelatoCompleto />
            </Paper>
          </div>
        );
      case 6: // notsure
        return (
          <div className={layout}>
            <Paper className={paper}>
              <AccidentPlaceForm />
            </Paper>
          </div>
        );
      case 7: // notsure
        return (
          <div className={layout}>
            <Paper className={paper}>
              <AccidentDescription />
            </Paper>
          </div>
        );
      case 8: // notsure
        return (
          <div className={layout}>
            <Paper className={paper}>
              <AccidentObjectForm />
            </Paper>
          </div>
        );
      case 8.1: // Resumen Relato Unificado
        return (
          <div className={layout}>
            <Paper className={paper}>
              <RelatoFinal />
            </Paper>
          </div>
        );
      case 9: // notsure
        return (
          <div className={layout}>
            <Paper className={paper}>
              <TrabajoHabitual />
            </Paper>
          </div>
        );
      case 9.01:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <ParteCuerpoAfectada />
            </Paper>
          </div>
        );
      case 10: // notsure
        return (
          <div className={layout}>
            <Paper className={paper}>
              <FechaHoraSiniestro />
            </Paper>
          </div>
        );
      case 10.1: // Datos accidente Unificado
        return (
          <div className={layout}>
            <Paper className={paperAutoHeight}>
              <InfoAccidente />
            </Paper>
          </div>
        );
      case 11: // notsure
        return (
          <div className={layout}>
            <Paper className={paper}>
              <LugarExactoSiniestro />
            </Paper>
          </div>
        );
      case 11.1: // notsure
        return (
          <div className={layoutFix}>
            <Paper className={paperFix}>
              <LugarSiniestroMapaSelection />
            </Paper>
          </div>
        );
      case 12: // notsure
        return (
          <div className={layout}>
            <Paper className={paper}>
              <LugarReferenciaSiniestro />
            </Paper>
          </div>
        );
      case 12.1: // notsure
        return (
          <div className={layout}>
            <Paper className={paper}>
              <AccidenteEnSucursal />
            </Paper>
          </div>
        );
      case 12.2: // notsure
        return (
          <div className={layout}>
            <Paper className={paper}>
              <LugarSiniestroTrayecto />
            </Paper>
          </div>
        );
      case 12.3: // notsure
        return (
          <div className={layout}>
            <Paper className={paper}>
              <LugarSiniestroTrayectoMapa />
            </Paper>
          </div>
        );
      case 12.4:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <LugarSiniestroTrayectoMapaNew />
            </Paper>
          </div>
        );
      case 13: // notsure
        return (
          <div className={layout}>
            <Paper className={paper}>
              <QuestionWitness />
            </Paper>
          </div>
        );
      case 14: // notsure
        return (
          <div className={layout}>
            <Paper className={paper}>
              <DataWitness />
            </Paper>
          </div>
        );
      case 14.1: // notsure
        return (
          <div className={layout}>
            <Paper className={paper}>
              <BoxQuestionWitness />
            </Paper>
          </div>
        );
      case 15: // notsure
        return (
          <div className={layout}>
            <Paper className={paper}>
              <QuestionResponsable />
            </Paper>
          </div>
        );
      case 16: // notsure
        return (
          <div className={layout}>
            <Paper className={paper}>
              <DataResponsable />
            </Paper>
          </div>
        );
      case 17: // notsure
        return (
          <div className={layout}>
            <Paper className={paper}>
              <FechaHoraResponsable />
            </Paper>
          </div>
        );
      case 17.1: // notsure
        return (
          <div className={layout}>
            <Paper className={paper}>
              <BoxQuestionResponsable />
            </Paper>
          </div>
        );
      case 17.2: // Tipo de aviso Responsable
        return (
          <div className={layout}>
            <Paper className={paperAutoHeight}>
              <TipoAvisoResponsable />
            </Paper>
          </div>
        );
      case 17.3: // Pantalla Testigo-Responsable Flujo Trabajo
        return (
          <div className={layout}>
            <Paper className={paper}>
              <FlujoTrabajo />
            </Paper>
          </div>
        );
      case 17.4: // Pantalla Testigo-Responsable Flujo Trayecto
        return (
          <div className={layout}>
            <Paper className={paper}>
              <FlujoTrayecto />
            </Paper>
          </div>
        );
      case 18.01: // Previsiones Unificadas
        return (
          <div className={layout}>
            <Paper className={paper}>
              <Forecasts />
            </Paper>
          </div>
        );
      case 18: // notsure
        return (
          <div className={layout}>
            <Paper className={paper}>
              <Afp />
            </Paper>
          </div>
        );
      case 18.1: // notsure
        return (
          <div className={layout}>
            <Paper className={paper}>
              <BotonesAFP />
            </Paper>
          </div>
        );
      case 19: // notsure
        return (
          <div className={layout}>
            <Paper className={paper}>
              <HealthForecast />
            </Paper>
          </div>
        );
      case 19.1: // notsure
        return (
          <div className={layout}>
            <Paper className={paper}>
              <HealthForecastIsapre />
            </Paper>
          </div>
        );
      // case 19.2:
      //   return (
      //     <div className={layoutFix}>
      //       <Paper className={paperFix}>
      //         <RelatoSuccess />
      //       </Paper>
      //     </div>
      //   );
      case 19.201: // Atención Médica
        return (
          <div className={layoutFix}>
            <Paper className={paperFix}>
              <AtencionMedica />
            </Paper>
          </div>
        );
      case 19.21:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <AtencionPrevia />
            </Paper>
          </div>
        );
      case 19.22:
        return (
          <div className={layoutFix}>
            <Paper className={paperFix}>
              <SolicitarDocumentos />
            </Paper>
          </div>
        );
      case 19.23: // Pruebas Complementarias
        return (
          <div className={layoutFix}>
            <Paper className={paperFix}>
              <PruebasComplementarias />
            </Paper>
          </div>
        );
      case 19.24:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <DocComplementariosTrayecto />
            </Paper>
          </div>
        );
      case 19.25:
          return (
            <div className={layoutFix}>
              <Paper className={paperFix}>
                <SolicitarDocumentos />
              </Paper>
            </div>
          );
      case 19.3: // notsure
        return (
          <div className={layout}>
            <Paper className={paper}>
              <Profesion />
            </Paper>
          </div>
        );
      case 19.4: // Datos Contractuales Unificada
        return (
          <div className={layout}>
            <Paper className={paperAutoHeight}>
              <DatosContractuales />
            </Paper>
          </div>
        );
      case 20: // notsure
        return (
          <div className={layout}>
            <Paper className={paper}>
              <Cargo />
            </Paper>
          </div>
        );
      case 21: // notsure
        return (
          <div className={layout}>
            <Paper className={paper}>
              <TipoJornadaLaboral />
            </Paper>
          </div>
        );
      case 22: // notsure
        return (
          <div className={layout}>
            <Paper className={paper}>
              <JornadaLaboralContainer />
            </Paper>
          </div>
        );
      case 23: // notsure
        return (
          <div className={layout}>
            <Paper className={paper}>
              <TipoDeContrato />
            </Paper>
          </div>
        );
      case 24: // notsure
        return (
          <div className={layout}>
            <Paper className={paper}>
              <Remuneracion />
            </Paper>
          </div>
        );
      case 25: // notsure
        return (
          <div className={layout}>
            <Paper className={paper}>
              <CategoriaOcupacional />
            </Paper>
          </div>
        );
      case 25.1:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <TrabajadorIndependiente />
            </Paper>
          </div>
        );
      case 26: // notsure
        return (
          <div className={layout}>
            <Paper className={paper}>
              <TrabajoActualContainer />
            </Paper>
          </div>
        );
      case 26.1:
        return (
          <div className={layoutFix}>
            <Paper className={paperFix}>
              <AlertaCalificacion />
            </Paper>
          </div>
        );
      case 26.2:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <AlertaCalificacionRazon />
            </Paper>
          </div>
        );
      case 26.3:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <CausaNolaboral />
            </Paper>
          </div>
        );
      case 26.4:
        return (
          <div className={layout}>
            <Paper className={paperFix}>
              <LoadRazonAlerta />
            </Paper>
          </div>
        );
      case 27: // notsure
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
            <Paper className={paperFix}>
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
      case 1001.1: // no se usa, luego de maquetar la vista, se decidió no utilizarla
        return (
          <div className={layoutFix}>
            <Paper className={paperFix}>
              <CasoCreado />
            </Paper>
          </div>
        );
      case 1001.2:
        return (
          <div className={layoutFix}>
            <Paper className={paperFix}>
              <CasoCreadoErrorDoc />
            </Paper>
          </div>
        );
      case 1001.3:
        return (
          <div className={layoutFix}>
            <Paper className={paperFix}>
              <CasoCreadoErrorStatus />
            </Paper>
          </div>
        );
      case 1001.4:
        return (
          <div className={layoutFix}>
            <Paper className={paperFix}>
              <CasoDuplicado />
            </Paper>
          </div>
        );
      case 1002:
        return (
          <div className={layout}>
            <Paper className={paperFix}>
              <ErrorCaso />
            </Paper>
          </div>
        );
      case 1002.1:
        return (
          <div className={layout}>
            <Paper className={paperFix}>
              <ErrorCrearCaso />
            </Paper>
          </div>
        );
      case 1002.2:
        return (
          <div className={layout}>
            <Paper className={paperFix}>
              <ErrorCrearCasoSiniestro />
            </Paper>
          </div>
        );
      case 1003:
        return (
          <div className={blackLayout}>
            <Paper className={paperNoColor}>
              <NoCuentaSap />
            </Paper>
          </div>
        );
      case 1004:
        return (
          <div className={blackLayout}>
            <Paper className={paperBlackAutoHeight}>
              <ErrorApi />
            </Paper>
          </div>
        );
      case 40:
        return (
          <div className={layout}>
            <Paper className={paper}>
              <Achs />
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
      <>
        <CssBaseline />
        {renderForm(addmissionForm.step)}
      </>
    </MuiThemeProvider>
  );
};

function mapStateToProps({ addmissionForm, microsoftReducer }) {
  return {
    addmissionForm,
    microsoftReducer
  };
}

export default connect(mapStateToProps)(Main);

/**
 *
 return <SeleccionarSucursalTrabajo />;

 */
