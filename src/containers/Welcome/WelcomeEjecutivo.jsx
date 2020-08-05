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
import { makeStyles } from "@material-ui/core/styles";
import { logout } from "../../redux/actions/microsoft.action";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";

// const siniestroStyle = makeStyles((theme) => ({
//   button: {
//     width: "100%",
//     height: "4em",
//     background: "#007A33",
//     boxShadow: "0.125em 0.125em 0.375em rgba(203, 203, 203, 0.4)",
//     borderRadius: "0.25em",
//     fontFamily: "Catamaran",
//     fontStyle: "normal",
//     fontWeight: "bold",
//     fontSize: "1em",
//     lineHeight: "1.125em",
//     color: "#FFFFFF",
//     textTransform: "capitalize",
//     textAlign: "left",
//     justifyContent: "flex-start",
//     "&:hover": {
//       background: "#104F28"
//   }
//   },
//   img: {
//     height: "1.5em",
//     width: "1.5em",
//     color: "#007A33",
//     background: "white",
//     borderRadius: "50%",
//     marginRight: "10px",
//     padding: "7px",
//     "&:hover": {
//       background: "white",
//     },
//   },
// }));

const Session = (props) => {
  const { dispatch, microsoftReducer } = props;
  // const custom = siniestroStyle();
  const welcomeStyle = getWelcomeStyle();
  const comunStyle = getComunStyle();
  const spaceStyle = getSpaceStyle();

  return (
    <div className={comunStyle.root}>
      <div className={spaceStyle.space4} />
      <div className={welcomeStyle.avatarContainer}>
        <Avatar className={welcomeStyle.avatar}>{microsoftReducer.userMsal.iniciales}</Avatar>
      </div>
      <Fab size="small" aria-label="edit" className={welcomeStyle.imgEdit}>
  <EditIcon /></Fab>
      <div className={spaceStyle.space2} />
      <div className={welcomeStyle.bienvenidoContainer}>
        <Typography
          variant="p"
          component="p"
          className={[comunStyle.textAchsContent, welcomeStyle.bienvenido]}
        >
          Hola,
          <br />
          {microsoftReducer.userMsal.displayName}
        </Typography>
      </div>
      <div className={spaceStyle.space3} />
      <div>
        <Typography
          variant="p"
          component="p"
          className={[comunStyle.textAchsContent, welcomeStyle.admisionText]}
        >
          Te encuentras en
        </Typography>
      </div>
      <div className={spaceStyle.space1} />
      <div>
        <Button className={welcomeStyle.button} variant="contained">
          <EditIcon className={welcomeStyle.img} />
          {/* <img alt="Centro Alameda" src="./static/editar.png" className={custom.img} /> */}
          &nbsp;Centro Alameda
        </Button>
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
export default connect(mapStateToProps)(Session);
