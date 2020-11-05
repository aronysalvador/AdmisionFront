import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { getBlackTheme } from "../../css/blackTheme";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { Button } from "@material-ui/core";
import Header from "../../components/header/index";

const SameDateSinister = (props) => {
  const { dispatch, microsoftReducer } = props;

  const spaceStyle = getSpaceStyle();
  const comunClass = getComunStyle();
  const blackStyle = getBlackTheme();

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header
            userMsal={ microsoftReducer.userMsal }
            // step={1}
        />
      </div>
      <div className={spaceStyle.space5} />
      <center>
        <div>
          <img alt="load" src="./static/notificacion.png" />
        </div>
        <div className={spaceStyle.space3} />
        <Typography
          color="textSecondary"
          gutterBottom
          className={blackStyle.textWarning2}
        >
          ¡Atención!
        </Typography>
        <div className={spaceStyle.space1} />
        <Typography
          // color="textSecondary"
          gutterBottom
          className={blackStyle.textMessage2}
        >
          Este paciente&nbsp;
            <br className={comunClass.displayDesk}/>
            tiene un siniestro activo&nbsp;
            <br className={comunClass.displayDesk}/>
            en la misma fecha
        </Typography>
        
        <div className={comunClass.bottomElement}>
          <Button
            className={comunClass.buttonAchs}
              onClick={() => dispatch(handleSetStep(5.1)) }
          >
            Entendido
          </Button>
        </div>
      </center>
    </div>
  );
};
const mapStateToProps = ({ addmissionForm, microsoftReducer }) => {
  return {
    addmissionForm: addmissionForm,
    microsoftReducer: microsoftReducer
  };
};
export default connect(mapStateToProps)(SameDateSinister);
