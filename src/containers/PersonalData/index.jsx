import { connect } from "react-redux";
import { getComunStyle } from "../../css/comun";
import { handleSetStep, validarAfiliacion } from "../../redux/actions/AdmissionAction";
import Cabecera from "../../components/cabecera/index";
import { getSpaceStyle } from "../../css/spaceStyle";
import BoxACHS from "../../components/share/BoxACHS/index";
import BoxEmpresa from "../../components/share/BoxEmpresa/index";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import Grid from '@material-ui/core/Grid';
import { Format } from "../../helpers/strings";
import Header from "../../components/header/index";
import image from './../../img/identify.svg'

const PersonalData = (props) => {
  const { dispatch, addmissionForm, microsoftReducer } = props;
  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const tituloEmpresa = "Dirección de la Sucursal";
  // const contenidoEmpresa = [
  //   addmissionForm.DireccionEmpresa,
  //   addmissionForm.SucursalEmpresa,
  //   addmissionForm.razonSocialForm,
  //   addmissionForm.rutEmpresa,
  // ];
  const contenidoDireccionEmpresa = [ Format.formatizar(addmissionForm.DireccionEmpresa) ];
  const contenidoRazonSocialForm = [ addmissionForm.razonSocial ? Format.formatizar(addmissionForm.razonSocial.name) : null ];
  const contenidoRutEmpresa = [ addmissionForm.rutEmpresa ];
  const tituloDireccion = "Dirección particular";
  const contenidoDireccion = [ Format.formatizar(addmissionForm.direccionParticular) ];
  const tituloTelefono = "Teléfono personal";
  const contenidoTelefono = [ addmissionForm.telefonoParticular ];
  const tituloGrupo = "Grupo étnico";
  const contenidoGrupo = [ addmissionForm?.grupoEtnico.descripcion ];

  const { apellidoPaterno, nombre } = addmissionForm.datosAdicionalesSAP;
  const [ loading, setLoading ] = useState(false)

  const handleNext = () => {
    setLoading(true)
    const {
      razonSocial, DireccionEmpresa, direccionParticular, telefonoParticular, grupoEtnico,
      rut, rutEmpresa, SucursalEmpresaObjeto, comunaDireccionParticular } = addmissionForm
    if (!razonSocial || !Object.entries(SucursalEmpresaObjeto).length === 0 || !DireccionEmpresa || !rutEmpresa) {
      // si falta info de la empresa
      dispatch(handleSetStep(5.4)); // form empresa
    }
    else if (!direccionParticular || !direccionParticular.match(/\d+/g) || !comunaDireccionParticular) {  // direccion con numero obligatorio 
      // si no tiene direccion
      dispatch(handleSetStep(5.2));// form direccion
    }
    else if (!telefonoParticular || telefonoParticular === "0") {
      // si no tiene telefono
      dispatch(handleSetStep(5.3)); // form telefono
    }
    else if (!grupoEtnico) {
      // si no tiene Grupo Etnico
      dispatch(handleSetStep(5.41)); // form Grupo Etnico
    }
    if (direccionParticular && telefonoParticular && razonSocial && grupoEtnico) {
      // si todos los datos relevantes están llenos
      if (rut && rutEmpresa && SucursalEmpresaObjeto)
        dispatch(validarAfiliacion({ rutPaciente: rut, rutEmpresa, BpSucursal: SucursalEmpresaObjeto.codigo}));
      else
        dispatch(handleSetStep(500));
    }
  };

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          id={"PersonalData-BtnBack"}
          dispatch={() => dispatch(handleSetStep(3))}
          percentage={addmissionForm.percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={`${comunClass.titleBlack} ${comunClass.titleBlack2} ${comunClass.textPrimaryDesk}`}>
          Empieza
          <Grid component='span' className={`${comunClass.titleBlue} ${comunClass.titleBlue2}`}>
            &nbsp;verificando los datos de&nbsp;<br className={comunClass.displayMobile} />
          </Grid>
          <Grid component='span' className={comunClass.titleGray}>
            {Format.formatizar(nombre)} {Format.formatizar(apellidoPaterno)}
          </Grid>
        </Grid>

        <div className={comunClass.displayDeskImg}>
          <Grid component='span' className={comunClass.imgPrimaryDesk}>
            <img alt='identify' src={image} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        {/* <div className={spaceStyle.space1} /> */}
        <div className='col-md-12'>
          <BoxEmpresa
            id={"PersonalData-Box1"}
            contenidoDireccionEmpresa={contenidoDireccionEmpresa}
            contenidoRazonSocialForm={contenidoRazonSocialForm}
            contenidoRutEmpresa={contenidoRutEmpresa}
            titulo={tituloEmpresa}
            step={5.4}
          />
          {/* <div className={spaceStyle.spaceMin1} /> */}
          <BoxACHS
            id={"PersonalData-Box2"}
            titulo={tituloTelefono}
            contenido={contenidoTelefono}
            step={5.3}
          />
        </div>
        <div className='col-md-12'>
          <BoxACHS
            id={"PersonalData-Box3"}
            titulo={tituloDireccion}
            contenido={contenidoDireccion}
            step={5.2}
          />

          <BoxACHS
            id={"PersonalData-Box4"}
            titulo={tituloGrupo}
            contenido={contenidoGrupo}
            step={5.41}
          />
        </div>
        {/* <div className={spaceStyle.spaceMin1} /> */}

        {/* <div className={spaceStyle.spaceMin1} /> */}

        <div className={comunClass.bottomElement}>
          <Button
            id={"PersonalData-Btn1"}
            className={comunClass.buttonAchs}
            disabled={loading}
            onClick={() => handleNext()}
          >
            {(addmissionForm.direccionParticular && addmissionForm.telefonoParticular && addmissionForm.razonSocial && addmissionForm?.grupoEtnico.descripcion)?"Sí, es correcta":"Rellenar información"}

          </Button>
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

export default connect(mapStateToProps)(PersonalData);
