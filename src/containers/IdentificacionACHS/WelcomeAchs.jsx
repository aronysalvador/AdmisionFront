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

const SessionAchs = (props) => {
  const { dispatch, microsoftReducer } = props;
  const welcomeStyle = getWelcomeStyle();
  const comunStyle = getComunStyle();
  const spaceStyle = getSpaceStyle();

  return (
    <div className={comunStyle.root}>
      <div className={spaceStyle.space2} />
      <div className={welcomeStyle.avatarContainer}>
        <Avatar className={welcomeStyle.avatar}>{microsoftReducer.userMsal.iniciales}</Avatar>
      </div>
      
      <div className={spaceStyle.space2} />
      <div className={welcomeStyle.bienvenidoContainer}>
        <Typography
          variant="p"
          component="p"
          className={[comunStyle.textAchsContent, comunStyle.textCenter, welcomeStyle.admisionText]}
        >
          Hola,
        </Typography>
      </div>
      
      <div className={welcomeStyle.bienvenidoContainer}>
        <Typography
          variant="p"
          component="p"
          className={[comunStyle.textAchsContent, comunStyle.textCenter, welcomeStyle.bienvenidoAchs]}
        >
          {microsoftReducer.userMsal.displayName}
        </Typography>
      </div>
      
      <div>
        <Typography
          variant="p"
          component="p"
          className={[comunStyle.textAchsContent, comunStyle.textCenter, welcomeStyle.admisionText]}
        >
          Admisionista
        </Typography>
      </div>
      <div className={spaceStyle.space1} />
      <div>
      <div
      style={{
        marginTop: "10px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        width: "45%",
        height: "90px",
        borderStyle: "solid",
        borderColor: "#787878",
        borderSpacing: "2px",
        borderRadius: "10px",
        paddingTop: "15px",
        paddingBottom: "10px",
      }}
    >
      CENTRO
    </div>
    <div
      style={{
        marginTop: "10px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        width: "45%",
        height: "90px",
        borderStyle: "solid",
        borderColor: "#787878",
        borderSpacing: "2px",
        borderRadius: "10px",
        paddingTop: "15px",
        paddingBottom: "10px",
      }}
    >
      CENTRO
    </div>
      </div>
      <div className={spaceStyle.space3} />
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
