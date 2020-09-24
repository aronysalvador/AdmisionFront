import React from "react";
import { connect } from "react-redux";
import { getComunStyle } from "../../css/comun";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import CabeceraSinBarra from "../../components/cabecera/cabeceraSinBarra";
import Typography from "@material-ui/core/Typography";
import { getSpaceStyle } from "../../css/spaceStyle";
import Button from "@material-ui/core/Button";
import CardSiniestro from "../../components/CardSiniestro/CardSiniestro";

const PersonalData = (props) => {
  const { dispatch, addmissionForm } = props;
  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const contenidoSiniestros = addmissionForm.siniestros;
  const { origen, siniestroTemp } = addmissionForm.siniestroOpciones;

  const { lugarAccidente } = addmissionForm;


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
      var STEP = "";
      if (
        !addmissionForm.razonSocial ||
        !addmissionForm.codigoSucursal ||
        !addmissionForm.DireccionEmpresa ||
        !addmissionForm.rutEmpresa
      ) {
        // si falta info de la empresa
        STEP = 5.4; //form empresa
      } else if (!addmissionForm.direccionParticular) {
        // si no tiene direccion
        STEP = 5.2; //form direccion
      } else if (
        !addmissionForm.telefonoParticular ||
        addmissionForm.telefonoParticular === "0"
      ) {
        // si no tiene telefono
        STEP = 5.3; //form telefono
      } 
      else if(origen === "sameDate"){ //Si ya estaba creando la admisión
        STEP = 11; //Lugar exacto de siniestro
      }
      else {
        // si todos los datos relevantes están llenos
        STEP = 5.1; // primero debe mostrar todos los datos y luego (5.7) pantalla exito
      }
      dispatch(handleSetStep(STEP));
    } else {
      if(origen === "sameDate"){ //Si ya estaba creando la admisión
       dispatch(handleSetStep(11));
      }else{
        dispatch(handleSetStep(5.833));
      }
    }
  };

  const listaSiniestros = contenidoSiniestros.map((siniestro) => (
    <CardSiniestro siniestro={siniestro}></CardSiniestro>
  ));

  const listaSiniestros2 = listaSiniestros.reverse();

  return (
    <div className={comunClass.root}>
      <div>
        <CabeceraSinBarra
          dispatch={() => dispatch(handleSetStep(5.83))}
          color="#373737"
        />
        <div className={spaceStyle.space2} />
        <div>
          {origen === "getRut" ? (
            <Typography
              variant="p"
              component="p"
              className={comunClass.titleBlack}>
              {nombre} {apellidoPaterno} <br/> tiene&nbsp;
              <div className={comunClass.titleBlue}>
                {contenidoSiniestros.length} siniestros
              </div>
              &nbsp;creados
            </Typography>
          ) : (
            <Typography
              variant="p"
              component="p"
              className={comunClass.titleBlack}
            >
              {nombre} {apellidoPaterno} tiene
              <div className={comunClass.titleBlue}>
                &nbsp;este siniestro
              </div>
              creado
            </Typography>
          )}
        </div>
        <div>
        {origen === "getRut" ? (<div className={comunClass.siniesterList}> {listaSiniestros2}
        </div>) 
        : (<div className={comunClass.siniesterList}><CardSiniestro siniestro={siniestroTemp}></CardSiniestro></div>)}
        </div>
        
      </div>

      <div>
        <div className={comunClass.bottomElement}>
          <Button
            className={comunClass.buttonAchs}
            onClick={() => dispatch(handleSetStep(5.9))}
          >
            Continuar en SAP
          </Button>
          <div className={spaceStyle.space1} />
          <Button
            className={comunClass.buttonAchs2}
            onClick={() => handleNext()}
          >
            Entiendo, {origen === "getRut" ? "crear nueva": "continuar con"} admisión
          </Button>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ addmissionForm }) {
  return {
    addmissionForm: addmissionForm,
  };
}

export default connect(mapStateToProps)(PersonalData);
