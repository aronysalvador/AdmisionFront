import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import BotonSeleccionarCustom from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustom";
import BotonSeleccionarCustomItem from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustomItem";
import Grid from '@material-ui/core/Grid';
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Header from "../../components/header/index";
import image from './../../img/relato.svg'

const TipoJornadaLaboral = () => {
  const {
    addmissionForm: { percentage, tipoJornadaForm }, microsoftReducer
  } = useSelector((state) => state, shallowEqual);

  const tipoJornadaLaboral = !tipoJornadaForm ? "" : tipoJornadaForm;

  const dispatch = useDispatch();

  const { data: tipoJornadaList } = useSelector(
    (state) => state.tipoJornadaLaboralForm, shallowEqual);

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(20))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[ comunClass.titleBlack, comunClass.textPrimaryDesk ].join(' ')}>
          Selecciona la opción que mejor defina el
          <Grid component='span' className={[ comunClass.titleBlue, comunClass.titleBlue2 ].join(' ')}>
            &nbsp;tipo de jornada
          </Grid>
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component='span' className={comunClass.imgPrimaryDesk}>
            <img alt='relato' src={image} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDeskCardBtn}>
        <div className={comunClass.cardsButtonAlign}>
          {tipoJornadaList.map((tipoJornada) => (
            <BotonSeleccionarCustom
              key={tipoJornada.id}
              data={tipoJornada}
              itemForm={"tipoJornadaForm"}
              selected={tipoJornada.id === tipoJornadaLaboral.id}
              step={22}
            >
              <BotonSeleccionarCustomItem {...tipoJornada} />
            </BotonSeleccionarCustom>
          ))}
        </div>
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </div>
  );
};

export default TipoJornadaLaboral;
