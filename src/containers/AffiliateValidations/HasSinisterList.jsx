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

  
  const handleNext = () => {
    let fechaActual = new Date();
    fechaActual.setHours(0,0,0,0);
    let busqueda = contenidoSiniestros.find((x) => {
        // let nuevaFecha = new Date(Date.parse("08-13-2020 17:00"));
        let nuevaFecha = new Date(Date.parse(x.fecha));
        nuevaFecha.setHours(0,0,0,0);    
        
        return nuevaFecha.getTime() === fechaActual.getTime()});
    if(busqueda === undefined){
        dispatch(handleSetStep(5.1));
    }
    else {
        dispatch(handleSetStep(5.833));
    }
  };

  //   const tituloDireccion = "Dirección particular";
  //   const contenidoDireccion = [addmissionForm.direccionParticular];

  //   const tituloTelefono = "Teléfono personal";
  //   const contenidoTelefono = [addmissionForm.telefonoParticular];

  //   const handleNext = () =>{
  //     var STEP = '';
  //     if(!addmissionForm.razonSocialForm || !addmissionForm.SucursalEmpresa || !addmissionForm.DireccionEmpresa || !addmissionForm.rutEmpresa){ // si falta info de la empresa
  //       STEP=5.4   //form empresa
  //     }
  //     else if(!addmissionForm.direccionParticular){ // si no tiene direccion
  //       STEP=5.2    //form direccion
  //     }
  //     else if(!addmissionForm.telefonoParticular){ // si no tiene telefono
  //       STEP=5.3    //form telefono
  //     }
  //     else{ // si todos los datos relevantes están llenos
  //       STEP=6  // next
  //     }
  //     dispatch(handleSetStep(STEP));
  //   }

  return (
    <div className={comunClass.root}>
      <CabeceraSinBarra
        dispatch={() => dispatch(handleSetStep(5.83))}
        color="#373737"
      />
      <div className={spaceStyle.space2} />
      <div>
        <Typography variant="p" component="p" className={comunClass.pregunta}>
          Antonio Romero tiene
          <div className={comunClass.textoResaltado}>
            {contenidoSiniestros.length} episodios
          </div>
          activos
        </Typography>
      </div>
      <div className={spaceStyle.space1} />

      {contenidoSiniestros.map((siniestro) => (
        <CardSiniestro siniestro={siniestro}></CardSiniestro>
      ))}

      <div className={comunClass.bottomElement}>
        <Button
          className={comunClass.buttonAchs}
            onClick={() => dispatch(handleSetStep(5.9)) }
        >
          Continuar en SAP
        </Button>
        <Button
          className={comunClass.buttonAchs2}
          onClick={() => handleNext()}
          //variant="contained"
          //onClick={() => handleNext() }
        >
          Crear nueva admisión
        </Button>
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