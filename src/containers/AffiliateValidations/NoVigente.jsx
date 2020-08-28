import React, { useEffect, useCallback } from "react";
import { connect, useSelector, shallowEqual } from "react-redux";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { Button, Typography } from "@material-ui/core";
import { getBlackTheme } from "../../css/blackTheme";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import CabeceraSinBarra from "../../components/cabecera/cabeceraSinBarra";
import NoAfiliateCard from './NoAfiliateCard';
import { ExitLog } from "../../redux/actions/Log";

const NoVigente = (props) => {

  const { dispatch } = props;

  const { LogForm: {ID} } = useSelector((state) => state, shallowEqual);
  const initFn = useCallback(() => {
    if(ID>0){
      console.log("exit")
      dispatch(ExitLog());
    }
  }, [dispatch,ID]);

  useEffect(() => {
    initFn()
  }, [initFn]);

  const spaceStyle = getSpaceStyle();
  const comunClass = getComunStyle();
  const blackStyle = getBlackTheme();

  return (
    <div>
      <CabeceraSinBarra
        dispatch={() => dispatch(handleSetStep(5.1))} // 5.1
        color="#FFFFFF"
      />
      <div className={blackStyle.root} style={{height: "37.2em"}}>
        <img
          alt="load"
          src="./static/error-siniestro.svg"
          className={blackStyle.imgNoAfiliate}
        />
        <div className={spaceStyle.space1} />
        <Typography
          color="textSecondary"
          gutterBottom
          className={blackStyle.textWarning}
        >
        ¡Atención!
        </Typography>
        <Typography
          color="textSecondary"
          gutterBottom
          className={blackStyle.textNoAfiliate}
        >
          Sucursal de este paciente no está vigente en ACHS
        </Typography>
        <div className={spaceStyle.space1} />
  
        <div className={comunClass.bottomElement}>
          <NoAfiliateCard />
          <div className={spaceStyle.space2} />
          <Button
            className={blackStyle.buttonFooter}
            onClick={() => {
              dispatch(handleSetStep(1.1));
            }}
          >
            Volver al inicio
          </Button>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ addmissionForm }) => {
  return {
    addmissionForm: addmissionForm,
  };
};
export default connect(mapStateToProps)(NoVigente);