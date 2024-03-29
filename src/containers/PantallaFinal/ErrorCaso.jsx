import Grid from "@material-ui/core/Grid";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
// import { getBlackTheme } from "../../css/blackTheme";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { successCallLog } from "../../redux/actions/Log";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Header from "../../components/header/index";
import warning from './../../img/WarningErrorCaso.png'
import { initSessionDate } from "./../../redux/actions/Log";

const ErrorCaso = () => {
  const spaceStyle = getSpaceStyle();
  const comunClass = getComunStyle();
  // const blackStyle = getBlackTheme();
  const dispatch = useDispatch();

  const {
    addmissionForm: { mensajeErrorSAP }
  } = useSelector((state) => state, shallowEqual);
  const { microsoftReducer } = useSelector((state) => state, shallowEqual);

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={spaceStyle.space3} />
      <center>
        <div>
          <img
            alt='load'
            src={warning}
          />
        </div>
        <div className={spaceStyle.space1} />
        <Grid className={comunClass.textErrorP}>
          ¡Ha ocurrido un error
          <br />
          creando tu caso!
        </Grid>
        <div className={spaceStyle.space1} />

        <Grid className={comunClass.textErrorRed}>
          Error: "{String(mensajeErrorSAP).trim()}"
        </Grid>

        <Grid className={comunClass.textErrorS}>
          Por favor, vuelve a intentarlo
        </Grid>
        <div className={comunClass.bottomElement} style={{padding: '1.145em'}}>
          {/* <div className={comunClass.paddingElement}> */}
            <Button
              id='ErrorCaso-Btn1'
              className={[ comunClass.buttonAchs ]} // blackStyle.buttonFooterSpace
              variant='contained'
              onClick={() => { dispatch(handleSetStep(26.1)); } }
            >
              Volver a intentarlo
            </Button>
            <div className={spaceStyle.space1} />
            <Button
              id='ErrorCaso-Btn2'
              className={comunClass.buttonAchs2}
              variant='contained'
              onClick={() => { dispatch(initSessionDate("")); dispatch(handleSetStep(1)); dispatch(successCallLog(0)); }} // 1.1 Empecemos eliminada
            >
              Volver al inicio
            </Button>
          {/* </div>     */}
        </div>
      </center>
    </div>
  );
};

export default ErrorCaso;
