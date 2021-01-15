import React from "react";
import Grid from '@material-ui/core/Grid';
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
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import Header from "../../components/header/index";
import hospital from './../../img/hospital.png'
import check from './../../img/icon-check.svg'

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

  const contenidoCentroAchs = [
    addmissionForm.centrosForm.Centro_m,
  ];

  return (
    <div className={[comunStyle.rootWhite, comunStyle.headerSesion]}>
      <div className={comunStyle.displayDesk}> 
      <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={welcomeStyle.backgroundBoxAchs}>
        <div className={comunStyle.displayDeskFlex}>
          <div className={welcomeStyle.avatarContainer}>
            <Avatar className={welcomeStyle.avatar}>
              {microsoftReducer.userMsal.iniciales}
            </Avatar>
          </div>
          <div className={spaceStyle.space1} />
          <div className={welcomeStyle.marginBoxGreen}>
            <div className={welcomeStyle.contentBlock}>
              <Grid
                className={`
                  ${comunStyle.textAchsContent}
                  ${comunStyle.textAchsContentWhite}
                  ${comunStyle.textCenter}
                  `}
              >
                Hola,
              </Grid>
              <Grid
                className={`
                  ${comunStyle.textAchsContent}
                  ${comunStyle.textAchsContentWhite}
                  ${comunStyle.textCenter}
                  ${welcomeStyle.bienvenidoAchs}
                  `}
              >
                {microsoftReducer.userMsal.displayName}
              </Grid>
              <Grid
                className={`
                  ${comunStyle.textAchsContent}
                  ${comunStyle.textAchsContentWhite}
                  ${comunStyle.textCenter}
                `}
              >
                Admisionista
              </Grid>
            </div>
            <div className={welcomeStyle.marginStar}>
              <Button
                variant="contained"
                size="small"
                className={`${classes.button} ${welcomeStyle.starIcon}`}
                startIcon={<StarIcon className={welcomeStyle.star} />}
              >
                4.9
              </Button>
            </div>
          </div>
          <div className={spaceStyle.space1} />
          <div className={welcomeStyle.boxCentroAlignDesk}>
            <div className={welcomeStyle.boxCentroAlign} >
              <div className={welcomeStyle.boxCentroAchs}
                id={"SessionAchs-Btn1"} 
                style={{ cursor: 'pointer'}}
                onClick={() => dispatch(handleSetStep(40))} percentage={-1}>
                <img
                  alt="Centro ACHS"
                  src={hospital}
                  style={{ color: "#007A33" }}
                />
                <div className={comunStyle.textCenter}> { contenidoCentroAchs } </div>
                <div className={welcomeStyle.textBoxAchs}>Centro</div>
              </div>
              <div className={welcomeStyle.boxCentroAchs}>
                <img
                  alt="Tiempo Admisión Promedio"
                  src={check}
                  style={{ width:"20px", height:"20px" }}
                />
                8 minutos
                <div className={welcomeStyle.textBoxAchs}>Admisión promedio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={comunStyle.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
      <div className={comunStyle.bottomElement}  
      style={{padding:'16px 16px 33px 16px', position: 'relative'}} >
        <div className={comunStyle.boxDesk}>
          <div className={comunStyle.displayDesk}>
            <Grid
              className={`
                ${comunStyle.subtitleBlack}
                ${comunStyle.textCenter}
              `}
            >
              Comienza creando una nueva admisión
            </Grid>
          </div>
          <div className={comunStyle.displayDesk}>
            <div className={spaceStyle.space1} />
          </div>
          <Button
            id={"SessionAchs-Btn2"} 
            className={comunStyle.buttonAchs}
            variant="contained"
            onClick={() => dispatch(handleSetStep(1.1))}
          >
            Nueva admisión
          </Button>
        </div>
        <div className={spaceStyle.space1} />
        <div className={comunStyle.displayMobile}>
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
