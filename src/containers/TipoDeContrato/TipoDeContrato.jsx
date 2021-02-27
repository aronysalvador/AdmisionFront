import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import BotonSeleccionarCustom from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustom";
import BotonSeleccionarCustomItem from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustomItem";
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";
import image from './../../img/relato.svg'

const TipoDeContrato = () => {
  const dispatch = useDispatch();
  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();
  const { step, percentage, tipoDeContrato } = useSelector(
    (state) => state.addmissionForm, shallowEqual);
  const { microsoftReducer } = useSelector((state) => state, shallowEqual);

  const { data: contratoList } = useSelector(
    (state) => state.tipoContratoForm, shallowEqual);

  return (
    <div className={comunClass.root}>
       <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
       </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(step - 1))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[ comunClass.titleBlack, comunClass.titleBlack2, comunClass.textPrimaryDesk ]}>
          ¿Qué
          <Grid component='span' className={[ comunClass.titleBlue, comunClass.titleBlue2 ]}>
            &nbsp;tipo de contrato
          </Grid>
          &nbsp;tiene el paciente?
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component='span' className={comunClass.imgPrimaryDesk}>
            <img alt='relato' src={image} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>

      <div className={comunClass.boxDeskCardBtn}>
        <div className={comunClass.displayMobile}>
          <div className={spaceStyle.space2} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
        {contratoList.map((contrato) => (
          <BotonSeleccionarCustom
            key={contrato.id}
            data={contrato}
            itemForm={"tipoDeContrato"}
            selected={tipoDeContrato.id === contrato.id}
            step={24}
          >
            <BotonSeleccionarCustomItem {...contrato} />
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

export default TipoDeContrato;
