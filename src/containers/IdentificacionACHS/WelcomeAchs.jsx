import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { getWelcomeStyle } from "../../css/welcomeStyle";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import "../../css/catamaranFont.css";
import "../../css/sfUiDisplayCufonfonts.css";
import Avatar from "@material-ui/core/Avatar";
import { logout } from "../../redux/actions/microsoft.action";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";

import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const SessionAchs = (props) => {
  const { dispatch, microsoftReducer, addmissionForm } = props;
  const welcomeStyle = getWelcomeStyle();
  const comunStyle = getComunStyle();
  const spaceStyle = getSpaceStyle();
  const classes = useStyles();

  // const contenidoCentroAchs = [
  //   addmissionForm.centroAchs.nombre,
  // ];

  return (
    <div className={comunStyle.root}>
      <div className={welcomeStyle.backgroundBoxAchs}>
      <div className={spaceStyle.space2} />
      <div className={welcomeStyle.avatarContainer}>
        <Avatar className={welcomeStyle.avatar}>
          {microsoftReducer.userMsal.iniciales}
        </Avatar>
      </div>

      <div className={spaceStyle.space2} />
      <div className={welcomeStyle.bienvenidoContainer}>
        <Typography
          variant="p"
          component="p"
          className={[
            comunStyle.textAchsContent,
            comunStyle.textCenter,
            welcomeStyle.admisionText,
          ]}
        >
          Hola,
        </Typography>
      </div>

      <div className={welcomeStyle.bienvenidoContainer}>
        <Typography
          variant="p"
          component="p"
          className={[
            comunStyle.textAchsContent,
            comunStyle.textCenter,
            welcomeStyle.bienvenidoAchs,
          ]}
        >
          {microsoftReducer.userMsal.displayName}
        </Typography>
      </div>

      <div>
        <Typography
          variant="p"
          component="p"
          className={[
            comunStyle.textAchsContent,
            comunStyle.textCenter,
            welcomeStyle.admisionText,
          ]}
        >
          Admisionista
        </Typography>
      </div>
      
      <div>
        <Button
          variant="contained"
          size="small"
          className={classes.button, welcomeStyle.starIcon}
          startIcon={<StarIcon />}
        >
          4.9
      </Button>
    </div>
    <div className={spaceStyle.space1} />
      <div>
        <div className={welcomeStyle.boxCentroAchs}>
          <img
            alt="Centro ACHS"
            src="./static/hospital.png"
            style={{ color: "#007A33" }}
          />
          contenidoCentroAchs
          <div className={welcomeStyle.textBoxAchs}>Centro</div>
        </div>
        <div className={welcomeStyle.boxCentroAchs}>
          <img
            alt="Tiempo Admisión Promedio"
            src="./static/check.png"
            style={{ width:"20px", height:"20px" }}
          />
          8 minutos
          <div className={welcomeStyle.textBoxAchs}>Admisión promedio</div>
        </div>
      </div>
      <div className={spaceStyle.space3} />
      </div>
      
          <div className={comunStyle.bottomElement}>
            <div>
              <Button
                className={comunStyle.buttonAchs}
                variant="contained"
                onClick={() => dispatch(handleSetStep(2))}
              >
                Nueva admisión
              </Button>
            </div>
            <div className={spaceStyle.space1} />
            <div>
              <Button
                className={comunStyle.buttonAchs2}
                variant="contained"
                onClick={() => dispatch(logout())}
              >
                Cerrar sesión
              </Button>
            </div>
        
      </div> 
    </div>
  );
};

function mapStateToProps({ addmissionForm, microsoftReducer }) {
  return {
    addmissionForm: addmissionForm,
    microsoftReducer: microsoftReducer,
  };
}
export default connect(mapStateToProps)(SessionAchs);
