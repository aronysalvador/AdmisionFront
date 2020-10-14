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


const Session = (props) => {
  const { dispatch } = props;
  const welcomeStyle = getWelcomeStyle();
  const comunStyle = getComunStyle();
  const spaceStyle = getSpaceStyle();

  return (
    <div className={ comunStyle.rootImg }>
      <div style={ {padding: '1.5em'} } className={ comunStyle.headerSesion } >
        <img
            alt="logo"
            src="./static/Achs.svg"
            className={comunStyle.imgAchs}
          />
        <div className={spaceStyle.space10} />

        <div className={comunStyle.boxSesion} >
          <center style={{padding: "26px"}}>
            <img 
              alt="zoomMas" 
              src={"static/Profile.svg"}
              className={ comunStyle.imgProfile }
              />
          </center>
          <Typography
            variant="p"
            component="p"
            className={[comunStyle.textAchsContent, welcomeStyle.bienvenido]}
          >
            Bienvenido/a
          </Typography>
        
          <Typography
            variant="p"
            component="p"
            className={[comunStyle.textAchsContent, welcomeStyle.admisionText]}
          >
            <br />
            Ingresa a tu cuenta y gestiona 
            <br />
            admisiones de pacientes
            <br />
          </Typography>
        
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
    </div>
  );
};

function mapStateToProps({ addmissionForm }) {
  return {
    addmissionForm: addmissionForm,
  };
}
export default connect(mapStateToProps)(Session);
