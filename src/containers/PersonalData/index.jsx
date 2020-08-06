import React from "react";
import { connect } from "react-redux";
import { getComunStyle } from "../../css/comun";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import Cabecera from "../../components/cabecera/index";
import Typography from "@material-ui/core/Typography";
import { getSpaceStyle } from "../../css/spaceStyle";
import BoxACHS from "../../components/share/BoxACHS/index";
import Button from "@material-ui/core/Button";

const PersonalData = (props) => {
  const { dispatch, addmissionForm } = props;
  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const tituloEmpresa = "Empresa";
  const contenidoEmpresa = [
    addmissionForm.razonSocialForm,
    addmissionForm.SucursalEmpresa,
    addmissionForm.DireccionEmpresa,
    addmissionForm.rutEmpresa,
  ];

  const tituloDireccion = "Dirección particular";
  const contenidoDireccion = [addmissionForm.direccionParticular];
  //console.log("contenidoDireccion",contenidoDireccion)

  const tituloTelefono = "Teléfono personal";
  const contenidoTelefono = [addmissionForm.telefonoParticular];
  //console.log("telefonoParticular",contenidoTelefono)

  return (
    <div className={comunClass.root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(3))}
        percentage={addmissionForm.percentage}
      />
      <div>
        <Typography variant="p" component="p" className={comunClass.pregunta}>
          Por favor, verifica la información
        </Typography>
      </div>
      <div className={spaceStyle.space1} />
      <BoxACHS titulo={tituloEmpresa} contenido={contenidoEmpresa} step={5.4} />
      <div className={spaceStyle.spaceMin1} />
      <BoxACHS
        titulo={tituloDireccion}
        contenido={contenidoDireccion}
        step={5.2}
      />
      <div className={spaceStyle.spaceMin1} />
      <BoxACHS
        titulo={tituloTelefono}
        contenido={contenidoTelefono}
        step={5.3}
      />

      <div className={comunClass.bottomElement}>
        <Button
          className={comunClass.buttonAchs}
          variant="contained"
          onClick={() => dispatch(handleSetStep(6))}
        >
          Si, es correcta
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
