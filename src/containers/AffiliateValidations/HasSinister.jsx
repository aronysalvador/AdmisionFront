import React from "react";
import { connect } from "react-redux";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { Button, Typography } from "@material-ui/core";
import { getBlackTheme } from "../../css/blackTheme";
import { handleSetStep } from '../../redux/actions/AdmissionAction';
import Header from "../../components/header/index";

const HasSinister = (props) => {
  const { dispatch, addmissionForm, microsoftReducer } = props;

  const spaceStyle = getSpaceStyle();
  const comunClass = getComunStyle();
  const blackStyle = getBlackTheme();

  const siniestroOpciones = addmissionForm.siniestroOpciones;

  return (
    <>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal }/>
      </div>
      <div style={{position: 'absolute', width: '100%', height:'92%', backgroundColor: '#373737'}}></div>
      <div className={blackStyle.root}>
        <div className={spaceStyle.space2} />
        <div className={comunClass.displayDesk}> 
          <div className={spaceStyle.space2} />
        </div>
        <img
          alt="load"
          src="./static/cita-agendada.svg" //siniestro.png
          className={blackStyle.img}
        />
        <div className={spaceStyle.space3} />
        <Typography
          color="textSecondary"
          className={blackStyle.textWarning}
        >
        ¡Atención!
        </Typography>
        {/* <div className={spaceStyle.space2} /> */}
        <Typography
          color="textSecondary"
          className={blackStyle.textMessage}
        >{siniestroOpciones.mensajeAlerta}
        </Typography>
        <div className={comunClass.bottomElement}>
          <Button
            className={blackStyle.buttonFooter}
            onClick={() => {
              dispatch(handleSetStep(5.831));
            }}
          >{siniestroOpciones.mensajeBoton}
            {/* Ver sus(s) siniestro(s) */}
          </Button>
        </div>
        <div className={comunClass.displayDesk}>
          <div className={spaceStyle.space5} />
        </div>
      </div>
    </>
  );
};
const mapStateToProps = ({ addmissionForm, microsoftReducer }) => {
  return {
    addmissionForm: addmissionForm,
    microsoftReducer: microsoftReducer
  };
};
export default connect(mapStateToProps)(HasSinister);
