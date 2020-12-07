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
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";

const Session = (props) => {
  const { dispatch, microsoftReducer } = props;
  // const custom = siniestroStyle();
  const welcomeStyle = getWelcomeStyle();
  const comunStyle = getComunStyle();
  const spaceStyle = getSpaceStyle();

  return (
    <div className={comunStyle.root}>
      <div className={spaceStyle.space2} />
      <div className={welcomeStyle.avatarContainer}>
        <Avatar className={welcomeStyle.avatar}>{microsoftReducer.userMsal.iniciales}</Avatar>
      </div>
      <Fab size="small" aria-label="edit" className={welcomeStyle.imgEdit}>
  <EditIcon /></Fab>
      <div className={spaceStyle.space1} />
      <div className={welcomeStyle.bienvenidoContainer}>
        <Typography
          variant="inherit"
          component="p"
          className={[comunStyle.textAchsContent, welcomeStyle.bienvenido]}
        >
          Hola,
          <br />
          {microsoftReducer.userMsal.displayName}
        </Typography>
      </div>
      <div className={spaceStyle.space1} />
      <div>
        <Typography
          variant="inherit"
          component="p"
          className={[comunStyle.textAchsContent, welcomeStyle.admisionText]}
        >
          Te encuentras en
        </Typography>
      </div>
      <div className={spaceStyle.space1} />
      <div>
        <Button className={welcomeStyle.button} variant="contained" onClick={() => dispatch(handleSetStep(40))}>
          <EditIcon className={welcomeStyle.img} />
          {/* <img alt="Centro Alameda" src="./static/editar.png" className={custom.img} /> */}
          &nbsp;Centro Alameda
        </Button>
      </div>
      <div className={spaceStyle.space3} />
      <div className={comunStyle.bottomElement}>
        <div>
          <Button
            className={comunStyle.buttonAchs}
            variant="contained"
            onClick={() => dispatch(handleSetStep(1.1))}
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
export default connect(mapStateToProps)(Session);
