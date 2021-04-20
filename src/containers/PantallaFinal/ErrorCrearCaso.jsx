import Grid from "@material-ui/core/Grid";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Header from "../../components/header/index";
import warning from './../../img/errorCaso.svg'

const ErrorCrearCaso = () => {
  const spaceStyle = getSpaceStyle();
  const comunClass = getComunStyle();

  const dispatch = useDispatch();
  const { microsoftReducer } = useSelector((state) => state, shallowEqual);
  const { addmissionForm: { mensajeErrorSAP } } = useSelector((state) => state, shallowEqual);

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={spaceStyle.space6} />
      <center>
        <div>
          <img
            alt='load'
            src={warning}
          />
        </div>
        <div className={spaceStyle.space2} />
        <Grid className={comunClass.textErrorP}>
          ¡Ha ocurrido un error
          <br />
          creando tu caso!
        </Grid>
        <div className={spaceStyle.space1} />

        <Grid className={comunClass.textErrorS}>
            Inténtalo de nuevo o ingresa al paciente por SAP
        </Grid>

        {mensajeErrorSAP && (
          <>
            <div className={spaceStyle.space1} />
            <Grid className={comunClass.textsmallErrorRed}>
              Error: "{String(mensajeErrorSAP).trim()}"
            </Grid>
          </>
        )}

        <div className={spaceStyle.space2} />

        <div className={comunClass.bottomElement}>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3' />
                    <div className='col-md-6'>
                        <Button
                            id='ErrorCrearCaso-Btn1'
                            className={[ comunClass.buttonAchs ]}
                            variant='contained'
                            onClick={() => dispatch(handleSetStep(27))}
                        >
                            Volver a intentarlo
                        </Button>
                    </div>
                    <div className='col-md-3' />
                </div>
            </div>

        </div>

      </center>
    </div>
  );
};

export default ErrorCrearCaso;
