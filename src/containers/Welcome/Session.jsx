import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { getWelcomeStyle } from "../../css/welcomeStyle";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import "../../css/catamaranFont.css";
import "../../css/sfUiDisplayCufonfonts.css";
import { login } from "../../redux/actions/microsoft.action";
import { makeStyles } from "@material-ui/core/styles";

const getUseStyles = makeStyles({
  img2: {
    width: "4.28125em",
    float: 'right'
  },
});

const Session = (props) => {
  const { dispatch } = props;
  const welcomeStyle = getWelcomeStyle();
  const comunStyle = getComunStyle();
  const spaceStyle = getSpaceStyle();
  const useStyles = getUseStyles();

  return (
    <div className={ comunStyle.rootImg }>
      <div style={ {padding: '1.5em'} }>
        <img
            alt="logo"
            src="./static/logoAchs.png"
            className={useStyles.img2}
          />
        <div className={spaceStyle.space12} />

        <div >
          <Typography
            variant="p"
            component="p"
            className={[comunStyle.textAchsContent, welcomeStyle.bienvenido]}
          >
            Bienvenido/a
          </Typography>
        </div>
        <div>
          <Typography
            variant="p"
            component="p"
            className={[comunStyle.textAchsContent, welcomeStyle.admisionText]}
          >
            Ingresa a tu cuenta para:
            <br />
            <br />
            - Crear admisiones
            <br />
            - Modificar tu perfil
            <br />
          </Typography>
        </div>
        <div className={comunStyle.bottomElement}
        style={{padding: '1.5em'}}
        >
          <Button
            className={comunStyle.buttonAchs}
            variant="contained"
            onClick={() => dispatch(login(["user.read"]))}
          >
            Ingresar
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
export default connect(mapStateToProps)(Session);
