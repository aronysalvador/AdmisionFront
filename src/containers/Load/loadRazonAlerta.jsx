import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import Header from "../../components/header/index";

const LoadRazonAlerta = () => {
  const dispatch = useDispatch();
  const { microsoftReducer } = useSelector((state) => state, shallowEqual);

  useEffect(() => {
    setTimeout(function () {
      dispatch(handleSetStep(26.1));
    }, 2000);
  });

  const spaceStyle = getSpaceStyle();
  const comunClass = getComunStyle();

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header
          userMsal={ microsoftReducer.userMsal }
          // step={1}
        />
      </div>
      <div className={spaceStyle.space5} />
      <center>
        <div>
          <img
            alt="load"
            src="./static/validandoAlerta.png"
            className={comunClass.imgLoadData}
          />
        </div>
        <div className={spaceStyle.space3} />
        <Typography variant="p" component="p" className={comunClass.txtLoadDataGreen}>
          ¡EXCELENTE!
        </Typography>
        <Typography
          color="textSecondary"
          gutterBottom
          className={comunClass.txtLoadData2}
        >
          Tu alerta ha sido ingresada
        </Typography>
        <div className={spaceStyle.space1} />
        <Typography
          color="textSecondary"
          gutterBottom
          className={comunClass.txtLoadData2}
        >
          Un momento por favor
        </Typography>
        <div>
          <img
            alt="load"
            src="./static/Loader_1.gif"
            className={comunClass.imgLoadData2}
          />
        </div>
      </center>
    </div>
  );
};

export default LoadRazonAlerta;
