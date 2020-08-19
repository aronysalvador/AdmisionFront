import React from "react";
import { connect } from "react-redux";
import { getComunStyle } from "../../css/comun";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import CabeceraSinBarra from "../../components/cabecera/cabeceraSinBarra";
import Typography from "@material-ui/core/Typography";
import { getSpaceStyle } from "../../css/spaceStyle";
import Button from "@material-ui/core/Button";
import CardSiniestro from "../../components/CardSiniestro/CardSiniestro";

import { List, ListItem } from "material-ui";

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

  const listaSiniestros = contenidoSiniestros.map((siniestro) => (
    <CardSiniestro siniestro={siniestro}></CardSiniestro>
  ))

  return (
    <div className={comunClass.root}>
      <div>
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

      <div className={comunClass.siniesterList}>{listaSiniestros}</div>
      </div>

      <div>
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
        >
          Crear nueva admisión
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
