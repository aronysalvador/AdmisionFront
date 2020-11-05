import React, { useEffect, useCallback, useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getAFP } from "../../redux/actions/AfpAction";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import BotonSeleccionarCustom from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustom";
import BotonSeleccionarCustomItem from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustomItem";
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";

const BotonesAFP = () => {
  const {
    addmissionForm: { percentage, afpForm, responsable },
  } = useSelector((state) => state, shallowEqual);
  const { microsoftReducer } = useSelector((state) => state, shallowEqual);
  const dispatch = useDispatch();

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const tipoAFP = !afpForm ? "" : afpForm;
  const { data: afpList } = useSelector((state) => state.afpForm, shallowEqual);
  
  const initFn = useCallback(() => {
    dispatch(getAFP(""));
  }, [dispatch]);

  useEffect(() => {
    initFn()
  }, [initFn]);
  
  const [buttonOver, setButtonOver] = useState(false);

  let back = responsable?.nombre.length > 0 ?  17.1 : 15

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header
          userMsal={ microsoftReducer.userMsal }
          // step={1}
        />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(back))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[comunClass.titleBlack, comunClass.titleBlack2, comunClass.textPrimaryDesk]}>
          Ingresa la 
          <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            &nbsp;AFP o Previsión Social
          </Grid>            
          &nbsp;a la que pertenece
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="identify" src="static/relato.svg" className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.cardsButtonAlign}>
            {afpList.slice(0,6).map((afp) => (
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
          onClick={() => {dispatch(handleSetStep(18))}}
          className={comunClass.cardsButtonOther}
          onMouseOver={() =>{
            setButtonOver(true)
          }}
          onMouseOut={() =>{
              setButtonOver(false)
          }}
        >
          Otra AFP
          {buttonOver && <img src="./static/check.svg"alt="check" style={{position: "relative", bottom: "25px", left: "105px"}} /> }
        </div> : null }
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </div>
  );
};

export default BotonesAFP;
