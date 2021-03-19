import { useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import BotonSeleccionarCustom from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustom";
import BotonSeleccionarCustomItem from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustomItem";
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";
import image from './../../img/relato.svg'
import check from './../../img/check.svg'

const BotonesAFP = () => {
  const {
    addmissionForm: { percentage, afpForm, responsable }, microsoftReducer
  } = useSelector((state) => state, shallowEqual);

  const dispatch = useDispatch();

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const tipoAFP = !afpForm ? "" : afpForm;
  const { data: afpList } = useSelector((state) => state.afpForm, shallowEqual);

  const [ buttonOver, setButtonOver ] = useState(false);

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(responsable?.nombre?.length > 0 ? 17.1 : 15, 18.1))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[ comunClass.titleBlack, comunClass.textPrimaryDesk ].join(' ')}>
          Ingresa la
          <Grid component='span' className={[ comunClass.titleBlue, comunClass.titleBlue2 ].join(' ')}>
            &nbsp;AFP o Previsión Social
          </Grid>
          &nbsp;a la que pertenece
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component='span' className={comunClass.imgPrimaryDesk}>
            <img alt='identify' src={image} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDeskCardBtn}>
        <div className={comunClass.cardsButtonAlign}>
            {afpList.slice(0, 6).map((afp) => (
            <BotonSeleccionarCustom
                key={afp.codigo}
                data={afp}
                itemForm={"afpForm"}
                selected={afp.codigo === tipoAFP.codigo}
                step={19}
            >
                <BotonSeleccionarCustomItem {...afp} />
            </BotonSeleccionarCustom>
            ))}
        </div>

        { afpList.length !== 0 ?

        <div
          onClick={() => { dispatch(handleSetStep(18)) }}
          className={comunClass.cardsButtonOther}
          onMouseOver={() => {
            setButtonOver(true)
          }}
          onMouseOut={() => {
              setButtonOver(false)
          }}
        >
          Otra AFP
          {buttonOver && <img src={check} alt='check' className={comunClass.cardsButtonOtherCheck} /> }
        </div> : null }
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </div>
  );
};

export default BotonesAFP;
