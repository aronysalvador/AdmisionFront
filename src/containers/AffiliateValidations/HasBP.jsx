import React, { useEffect, useCallback } from "react";
import { connect, useSelector, shallowEqual } from "react-redux";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { Button, Typography } from "@material-ui/core";
import { getBlackTheme } from "../../css/blackTheme";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { ExitLog } from "../../redux/actions/Log";

const HasBP = (props) => {
 
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
    <div className={blackStyle.root}>
      <div className={spaceStyle.space2} />
        <img
          alt="load"
          src="./static/error-siniestro.svg"
          className={blackStyle.img}
        />
      <div className={spaceStyle.space3} />
      <Typography
        color="textSecondary"
        gutterBottom
        className={blackStyle.textWarning}
      >
       ¡Atención!
      </Typography>
      <div className={spaceStyle.space1} />
      <Typography
        color="textSecondary"
        gutterBottom
        className={blackStyle.textMessage}
      >
        Este paciente no tiene un BP creado
      </Typography>
      <div className={spaceStyle.space2} />
      <Typography
        color="textSecondary"
        gutterBottom
        className={blackStyle.textFinal}
      >
        Atiéndelo usando SAP
      </Typography>
      <div className={comunClass.bottomElement}>
        <Button
          className={blackStyle.buttonFooter}
          onClick={() => {
            dispatch(handleSetStep(5.9));
          }}
        >
          Continuar en SAP
        </Button>
      </div>
    </div>
  );
};
const mapStateToProps = ({ addmissionForm }) => {
  return {
    addmissionForm: addmissionForm,
  };
};
export default connect(mapStateToProps)(HasBP);
