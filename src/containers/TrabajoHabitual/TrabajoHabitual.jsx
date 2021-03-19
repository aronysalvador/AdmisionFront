import { getComunStyle } from "../../css/comun";
import { Button } from "@material-ui/core";
import Cabecera from "../../components/cabecera/index";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import TrabajoHabitualCard from "./TrabajoHabitualCard";
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";
import image from './../../img/relato.svg'

const TrabajoHabitual = () => {
  const {
    addmissionForm: { step, percentage }
  } = useSelector((state) => state, shallowEqual);
  const { microsoftReducer } = useSelector((state) => state, shallowEqual);
  const dispatch = useDispatch();
  let stepx = step;

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const handleOnClick = (respuesta) => {
    dispatch(updateForm("desarrollarTrabajoHabitual", respuesta));
    dispatch(handleSetStep(++stepx));
  };

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(8.1))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[ comunClass.titleBlack, comunClass.textPrimaryDesk ].join(' ')}>
          ¿Al momento del accidente, desarrollaba su
          <Grid component='span' className={[ comunClass.titleBlue, comunClass.titleBlue2 ].join(' ')}>
            &nbsp;trabajo habitual
          </Grid>
          ?
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component='span' className={comunClass.imgPrimaryDesk}>
            <img alt='relato' src={image} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.bottomElement}>
          <TrabajoHabitualCard />
          <div className={comunClass.displayMobile}>
            <div className={spaceStyle.spaceMin1} />
          </div>
          <Button
            variant='contained'
            className={comunClass.buttonAchs}
            onClick={() => handleOnClick("Si")}
          >
            Sí
          </Button>
          <div className={spaceStyle.spaceMin1} />
          <Button
            className={comunClass.buttonAchs2}
            onClick={() => handleOnClick("No")}
          >
            No
          </Button>
        </div>
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </div>
  );
};

export default TrabajoHabitual;
