import { connect } from "react-redux";
import { Button, Typography } from "@material-ui/core";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { getBlackTheme } from "../../css/blackTheme";
import Header from "../../components/header/index";
import image from './../../img/cita-agendada.svg'

const HasScheduledMeet = (props) => {
  const { addmissionForm, dispatch, microsoftReducer } = props;

  const spaceStyle = getSpaceStyle();
  const comunClass = getComunStyle();
  const blackStyle = getBlackTheme();

  const cita = addmissionForm.cita ? addmissionForm.cita : {};

  const handleNext = () => {    

      let STEP = "";

      const { apellidoMaterno, apellidoPaterno, nombre, fechaNacimiento, nacionalidad, pais } = addmissionForm.datosAdicionalesSAP
      
      if (!apellidoMaterno || !apellidoPaterno || !nombre || !fechaNacimiento || !nacionalidad || !pais) {
          // si no tiene telefono
          dispatch(updateForm("bpForm", addmissionForm.datosAdicionalesSAP));
          STEP = 5.812; // form data
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
        !addmissionForm.telefonoParticular || addmissionForm.telefonoParticular === "0"
      ) {
        // si no tiene telefono
        STEP = 5.3; // form telefono
      }
      else {
        // si todos los datos relevantes están llenos
        STEP = 5.1; // primero debe mostrar todos los datos y luego (5.7) pantalla exito
      }
      dispatch(handleSetStep(STEP));
  };

  return (
    <>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
        <div style={{position: 'absolute', width: '100%', height: '92%', backgroundColor: '#373737'}} />
      </div>
      <div className={blackStyle.root}>
        <div className={comunClass.displayMobile}>
          <div className={spaceStyle.space1} />
        </div>
        <div className={comunClass.displayDesk}>
          <div className={spaceStyle.space3} />
        </div>
        <img
          alt='load'
          src={image}
          className={blackStyle.img}
        />
        <div className={spaceStyle.space1} />
        <Typography className={blackStyle.textWarning}>
          ¡Atención!
        </Typography>
        <Typography className={blackStyle.textMessage}>
          Este paciente tiene una cita agendada
        </Typography>
        <div className={spaceStyle.space1} />
        <div className={blackStyle.containerQuote}>
          {cita && (
            <>
              <div className={blackStyle.containerRowQuote}>
                <div className={blackStyle.itemDataQuote}>{cita.fecha}</div>
                <div className={blackStyle.itemLabelQuote}>Fecha</div>
                <div className={blackStyle.itemDataQuote}>{cita.hora}</div>
                <div className={blackStyle.itemLabelQuote} style={{marginBottom: "0"}}>Hora</div>
              </div>
              <hr style={{color: "#FFFFFF", margin: "0"}} />
              <div className={blackStyle.containerRowQuote}>
                <div className={blackStyle.itemDataQuote}>{cita.lugar}</div>
                <div className={blackStyle.itemLabelQuote}>Centro</div>
                <div className={blackStyle.itemDataQuote}>{cita.unidad}</div>
                <div className={blackStyle.itemLabelQuote} style={{marginBottom: "0"}}>Especialidad</div>
              </div>
            </>
          )}
        </div>

        <div className={blackStyle.containerBottom}>
          <div className={comunClass.bottomElement}>
            <div className={comunClass.paddingElement}>
            <Button
              id={"HasScheduledMeet-Btn1"}
              className={[ blackStyle.buttonFooter, blackStyle.buttonFooterSpace ]}
              onClick={() => {
                dispatch(handleSetStep(5.9));
              }}
            >
              Continuar en SAP
            </Button>
            {/* <div className={spaceStyle.space1} /> */}
            <Button
              id={"HasScheduledMeet-Btn2"}
              className={blackStyle.buttonFooter2}
              onClick={() => {
                if (addmissionForm.siniestros.length > 0) {
                  const mensajeAlerta = "Este paciente ya tiene un siniestro";
                  const mensajeBoton = "Ver su(s) siniestro(s)";
                  const origen = "getRut";
                  dispatch(
                    updateForm("siniestroOpciones", {mensajeAlerta, mensajeBoton, origen})
                  );
                  dispatch(handleSetStep(5.83));
                } else {
                 handleNext()
                }
              }}
            >
              Crear nueva admisión
            </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = ({ addmissionForm, microsoftReducer }) => {
  return {
    addmissionForm,
    microsoftReducer
  };
};
export default connect(mapStateToProps)(HasScheduledMeet);
