import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { getWelcomeStyle } from "../../css/welcomeStyle";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import "../../css/catamaranFont.css";
import "../../css/sfUiDisplayCufonfonts.css";
import { login } from "../../redux/actions/microsoft.action";
import logo from './../../img/Achs.svg'
import profile from './../../img/Profile.svg'

const Session = (props) => {
  const { dispatch } = props;
  const welcomeStyle = getWelcomeStyle();
  const comunStyle = getComunStyle();
  const spaceStyle = getSpaceStyle();

  return (
    <div className={ comunStyle.rootImg }>
      <div style={ {padding: '1.5em'} } className={ comunStyle.headerSesion }>
        <img
            alt='logo'
            src={logo}
            className={comunStyle.imgAchs}
        />
        <div className={spaceStyle.space10} />

        <div className={comunStyle.boxSesion}>
          <center style={{padding: "26px"}}>
            <img
              alt='zoomMas'
              src={profile}
              className={ comunStyle.imgProfile }
            />
          </center>
          <Grid
            className={[ comunStyle.textAchsContent, welcomeStyle.bienvenido ]}
          >
            Bienvenido/a
          </Grid>

          <Grid
            className={[ comunStyle.textAchsContent, welcomeStyle.admisionText ].join(' ')}
          >
            <br />
            Ingresa a tu cuenta y gestiona
            <br />
            admisiones de pacientes
            <br />
          </Grid>

          <div className={comunStyle.bottomElement}
          style={{padding: '1.5em'}}
          >
            <Button
              id={"Session-Btn1"}
              className={comunStyle.buttonAchs}
              style={{width: '100%'}}
              variant='contained'
              onClick={() => dispatch(login([ "user.read" ]))}
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
    addmissionForm
  };
}
export default connect(mapStateToProps)(Session);
