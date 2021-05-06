import { connect } from "react-redux";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import CabeceraSinBarra from "../../components/cabecera/cabeceraSinBarra";
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import CardSiniestro from "../../components/CardSiniestro/CardSiniestro";
import Header from "../../components/header/index";
import image from './../../img/identify.svg'
import { Format } from "../../helpers/strings";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { updateForm } from "./../../redux/actions/AdmissionAction"
import Notificacion from "components/Notificacion";

const HasSinisterList = (props) => {
  const { dispatch, addmissionForm, microsoftReducer } = props;
  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const contenidoSiniestros = addmissionForm.siniestros;
  const { origen, siniestroTemp } = addmissionForm.siniestroOpciones;

  const { apellidoPaterno, nombre } = addmissionForm.datosAdicionalesSAP;

  const handleNext = () => {
    let fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0);
    let busqueda = contenidoSiniestros.find((x) => {
      // let nuevaFecha = new Date(Date.parse("08-13-2020 17:00"));
      let nuevaFecha = new Date(Date.parse(x.fecha));
      nuevaFecha.setHours(0, 0, 0, 0);

      return nuevaFecha.getTime() === fechaActual.getTime();
    });
    if (busqueda === undefined) {
      let STEP = "";

      const { apellidoMaterno, apellidoPaterno, nombre, fechaNacimiento, nacionalidad, pais } = addmissionForm.datosAdicionalesSAP

      if (!apellidoMaterno || !apellidoPaterno || !nombre || !fechaNacimiento || !nacionalidad || !pais) {
          // si no tiene telefono
          dispatch(updateForm("bpForm", addmissionForm.datosAdicionalesSAP));
          STEP = 5.812; // form data
      }
      else if (
        addmissionForm.grupoEtnico.id==="00" ||
        !addmissionForm.grupoEtnico.id ||
        !addmissionForm.grupoEtnico.descripcion
      ) {
          // si falta grupo etnico
          STEP = 5.42; // form grupo etnico
      }
      else if (
        !addmissionForm.razonSocial ||
        !addmissionForm.codigoSucursal ||
        !addmissionForm.DireccionEmpresa ||
        !addmissionForm.rutEmpresa
      ) {
        // si falta info de la empresa
        STEP = 5.4; // form empresa
      } else if (!addmissionForm.direccionParticular) {
        // si no tiene direccion
        STEP = 5.2; // form direccion
      } else if (
        !addmissionForm.telefonoParticular ||
        addmissionForm.telefonoParticular === "0"
      ) {
        // si no tiene telefono
        STEP = 5.3; // form telefono
      }
      else if (origen === "sameDate"){ // Si ya estaba creando la admisión
        STEP = 11; // Lugar exacto de siniestro
      }
      else {
        // si todos los datos relevantes están llenos
        STEP = 5.1; // primero debe mostrar todos los datos y luego (5.7) pantalla exito
      }
      dispatch(handleSetStep(STEP));
    } else {
      if (origen === "sameDate"){ // Si ya estaba creando la admisión
        dispatch(handleSetStep(11));
      } else {
        dispatch(handleSetStep(5.833));
      }
    }
  };

  const listaSiniestros = contenidoSiniestros.map((siniestro, index) => (
    <CardSiniestro key={index} siniestro={siniestro} />
  ));

  const listaSiniestros2 = listaSiniestros.reverse();

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div>
        <div className={comunClass.beginContainerDesk}>
          <CabeceraSinBarra id={"HasSinisterList-BtnBack"} dispatch={() => dispatch(handleSetStep(3))} color='#373737' />
        </div>
        <div className={comunClass.displayMobile}>
          <div className={spaceStyle.space2} />
        </div>
        <div className={comunClass.titlePrimaryDesk}>
          {origen === "getRut" ? (
            <Grid className={[ comunClass.titleBlack, comunClass.titleBlack2, comunClass.textPrimaryDesk ].join(' ')}>
              {Format.formatizar(nombre)} {Format.formatizar(apellidoPaterno)}
              <br className={comunClass.displayMobile} />&nbsp;tiene&nbsp;
              <Grid component='span' className={[ comunClass.titleBlue, comunClass.titleBlue2 ].join(' ')}>
                {contenidoSiniestros.length} siniestros
              </Grid>
              &nbsp;creados
            </Grid>
          ) : (
            <Grid className={[ comunClass.titleBlack, comunClass.titleBlack2, comunClass.textPrimaryDesk ].join(' ')}>
              {Format.formatizar(nombre)} {Format.formatizar(apellidoPaterno)} tiene
              <Grid component='span' className={[ comunClass.titleBlue, comunClass.titleBlue2 ].join(' ')}>
                &nbsp;este siniestro
              </Grid>
              &nbsp;creado
            </Grid>
          )}
          <div className={comunClass.displayDeskImg}>
            <Grid component='span' className={comunClass.imgPrimaryDesk}>
              <img alt='identify' src={image} className={comunClass.imgPrimaryWidth} />
            </Grid>
          </div>
        </div>
        <div className={comunClass.boxDesk5}>
          <div>
            <Notificacion color='#e2f2f1' iconColor='#54b2ab'><b><span className={comunClass.textPrimaryRelatoBlue}>¡Atención!</span> este paciente ya tiene siniestros activos.</b></Notificacion>
          {origen === "getRut" ? (<div className={comunClass.siniesterList}> {listaSiniestros2} </div>)
          : (<div className={comunClass.siniesterList}><CardSiniestro siniestro={siniestroTemp} /></div>)}
          </div>

          <div className={comunClass.bottomElement}>
            <div className={comunClass.paddingElement}>
              <Button
                id={"HasSinisterList-Btn1"}
                className={[ comunClass.buttonAchs2, comunClass.buttonAchsSiniester2 ].join(' ')}
                onClick={() => dispatch(handleSetStep(5.9))}
              >
                Cancelar admisión
              </Button>
              <div className={comunClass.displayMobile}>
                <div className={spaceStyle.space1} />
              </div>
              <Button
                id={"HasSinisterList-Btn2"}
                className={[ comunClass.buttonAchs, comunClass.buttonAchsSiniester ].join(' ')}
                onClick={() => handleNext()}
              >
                Entiendo, {origen === "getRut" ? "crear nueva": "continuar con"} admisión
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </div>
  );
};

function mapStateToProps({ addmissionForm, microsoftReducer }) {
  return {
    addmissionForm,
    microsoftReducer
  };
}

export default connect(mapStateToProps)(HasSinisterList);
