import React, { useState, useEffect, useCallback } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getAFP } from "../../redux/actions/AfpAction";
import {  Typography } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import BotonSeleccionarCustom from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustom";
import BotonSeleccionarCustomItem from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustomItem";

const BotonesAFP = () => {
  const {
    addmissionForm: { percentage, afpForm, responsable },
  } = useSelector((state) => state, shallowEqual);

  const {
    root,
    titleBlack,
    titleBlue
  } = getComunStyle();

  const tipoAFP = !afpForm ? "" : afpForm;

  const dispatch = useDispatch();

  const initFn = useCallback(() => {
    dispatch(getAFP(""));
  }, [dispatch]);

  useEffect(() => {
    initFn()
  }, []);
  

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
        <div className={titleBlue}>
          &nbsp;AFP o Previsión Social
        </div>
        &nbsp;a la que pertenece
      </Typography>

        <div
            style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            }}
        >
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
        style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            height: "90px",
            borderStyle: "solid",
            borderColor: "#787878",
            borderSpacing: "2px",
            borderRadius: "10px",
            paddingTop: "15px",
            paddingBottom: "10px",
        }}
        >
         Otra AFP
        </div> : null }
        
    </div>
  );
};

export default BotonesAFP;