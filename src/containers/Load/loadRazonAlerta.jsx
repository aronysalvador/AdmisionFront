import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Grid from '@material-ui/core/Grid';
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import Header from "../../components/header/index";
import exito from './../../img/exito.svg'
import loader from './../../img/Loader_2.gif'

const LoadRazonAlerta = () => {
  const dispatch = useDispatch();
  const { microsoftReducer } = useSelector((state) => state, shallowEqual);

  useEffect(() => {
    setTimeout(function () {
      dispatch(handleSetStep(1000));
    }, 2000);
    // eslint-disable-next-line
  },[]);

  const spaceStyle = getSpaceStyle();
  const comunClass = getComunStyle();

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={spaceStyle.space5} />
      <center>
        <div>
          <img
            alt='load'
            src={exito}
            className={comunClass.imgLoadData}
          />
        </div>
        <div className={spaceStyle.space3} />
        <Grid className={comunClass.txtLoadDataGreen}>
          ¡EXCELENTE!
        </Grid>
        <Grid
          className={comunClass.txtLoadData2}
        >
          Tu alerta ha sido ingresada
        </Grid>
        <div className={spaceStyle.space1} />
        <Grid
          className={comunClass.txtLoadData2}
        >
          Un momento por favor
        </Grid>
        <div>
          <img
            alt='load'
            src={loader}
            className={comunClass.imgLoadData2}
          />
        </div>
      </center>
    </div>
  );
};

export default LoadRazonAlerta;
