import React, { useEffect, useCallback } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getAFP } from "../../redux/actions/AfpAction";
import {  Typography } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import BotonSeleccionarCustom from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustom";
import BotonSeleccionarCustomItem from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustomItem";
import Grid from '@material-ui/core/Grid';

const BotonesAFP = () => {
  const {
    addmissionForm: { percentage, afpForm, responsable },
  } = useSelector((state) => state, shallowEqual);

  const {
    root,
    titleBlack,
    titleBlue,
    cardsButtonOther,
    cardsButtonAlign
  } = getComunStyle();

  const tipoAFP = !afpForm ? "" : afpForm;

  const dispatch = useDispatch();

  const initFn = useCallback(() => {
    dispatch(getAFP(""));
  }, [dispatch]);

  useEffect(() => {
    initFn()
  }, [initFn]);
  

  const { data: afpList } = useSelector((state) => state.afpForm, shallowEqual);

  let back = responsable?.nombre.length > 0 ?  17.1 : 15

  return (
    <div className={root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(back))}
        percentage={percentage}
      />
      <Typography className={titleBlack}>
        Ingresa la 
        <Grid component="span"  className={titleBlue}>
              &nbsp;o Previsión Social
        </Grid>            
        &nbsp;a la que pertenece
      </Typography>

        <div className={cardsButtonAlign}>
            {afpList.slice(0,6).map((afp) => (
            <BotonSeleccionarCustom
                key={afp.codigo}
                data={afp}
                itemForm={"afpForm"}
                selected={afp.codigo === tipoAFP.codigo}
                step={19}
            >
                <BotonSeleccionarCustomItem {...afp} />
                {/* <img src="./static/check.svg"alt="check" style={{position: "absolute", top: "3px", right: "3px"}} />  */}
            </BotonSeleccionarCustom>
            ))}
        </div>

        { afpList.length !== 0 ? 
        
        <div
          onClick={() => {dispatch(handleSetStep(18))}}
          className={cardsButtonOther}
        >
          Otra AFP
        </div> : null }
        
    </div>
  );
};

export default BotonesAFP;
