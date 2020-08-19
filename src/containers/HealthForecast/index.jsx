import React, { useEffect, useCallback } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import Divider from "@material-ui/core/Divider";

//Action de Redux
import { sendIsapres } from "../../redux/actions/AdmissionAction";
import { searchIsapres } from "../../redux/actions/PrevisionAction";

const HealthForecast = (props) => {
  const { dispatch, addmissionForm } = props;

  const dispatch1 = useDispatch();

  const initFn = useCallback(() => {
    const consultaIsapres = () => dispatch1(searchIsapres());
    consultaIsapres();
  }, [dispatch1]);

  useEffect(() => {
    initFn();
  }, [initFn]);

  const getIsapres = useSelector((state) => state.previsionForm.isapres);

  const clickSendIsapres = (id) => {
    dispatch1(sendIsapres(id));
    dispatch(handleSetStep(19.2));
  };

  const classesComun = getComunStyle();
  const spaceStyle = getSpaceStyle();

  return (
    <div className={classesComun.root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(18))}
        percentage={addmissionForm.percentage}
      />
      <div>
        <Typography variant="p" component="p" className={classesComun.pregunta}>
          Selecciona tu Previsión de salud
        </Typography>
      </div>
      <div className={spaceStyle.space1} />
      <div>
        <Button
          className={[classesComun.buttonAchs, classesComun.pregunta_temp]}
          variant="contained"
          type="submit"
          value={getIsapres.length !== 0 ? getIsapres[0].id : null}
          onClick={() => clickSendIsapres(getIsapres[0])}
        >
          {getIsapres.length !== 0 ? <p>{getIsapres[0].nombre}</p> : null}
        </Button>
      </div>

      <div className={spaceStyle.space2} />
      <div className={classesComun.flexDivider}>
      <Divider className={classesComun.mediumDivider} />  
      <em className={classesComun.emMargin} style={{ fontStyle: "inherit"}}> o </em>
     
      <Divider className={classesComun.mediumDivider} /> </div>
      <div className={spaceStyle.space2} />

      <div>
        <Button
          className={classesComun.buttonAchsRight}
          variant="contained"
          type="submit"
          value={getIsapres.length !== 0 ? getIsapres[1].id : null}
          onClick={() => clickSendIsapres(getIsapres[1])}
        >
          {getIsapres.length !== 0 ? <p>{getIsapres[1].nombre}</p> : null}
        </Button>
        <Button
          className={classesComun.buttonAchsLeft}
          variant="contained"
          type="submit"
          value={getIsapres.length !== 0 ? getIsapres[2].id : null}
          onClick={() => clickSendIsapres(getIsapres[2])}
        >
          {getIsapres.length !== 0 ? <p>{getIsapres[2].nombre}</p> : null}
        </Button>
      </div>

      <div className={spaceStyle.space4} />

      <div>
        <Button
          className={classesComun.buttonAchsRight}
          variant="contained"
          type="submit"
          value={getIsapres.length !== 0 ? getIsapres[3].id : null}
          onClick={() => clickSendIsapres(getIsapres[3])}
        >
          {getIsapres.length !== 0 ? <p>{getIsapres[3].nombre}</p> : null}
        </Button>
        <Button
          className={classesComun.buttonAchsLeft}
          variant="contained"
          type="submit"
          value={getIsapres.length !== 0 ? getIsapres[4].id : null}
          onClick={() => clickSendIsapres(getIsapres[4])}
        >
          {getIsapres.length !== 0 ? <p>{getIsapres[4].nombre}</p> : null}
        </Button>
      </div>

      <div className={spaceStyle.space4} />

      <div>
        <Button
          className={classesComun.buttonAchsRight}
          variant="contained"
          type="submit"
          value={getIsapres.length !== 0 ? getIsapres[5].id : null}
          onClick={() => clickSendIsapres(getIsapres[5])}
        >
          {getIsapres.length !== 0 ? <p>{getIsapres[5].nombre}</p> : null}
        </Button>
        <Button
          className={classesComun.buttonAchsLeft}
          variant="contained"
          type="submit"
          value={getIsapres.length !== 0 ? getIsapres[6].id : null}
          onClick={() => clickSendIsapres(getIsapres[6])}
        >
          {getIsapres.length !== 0 ? <p>{getIsapres[6].nombre}</p> : null}
        </Button>
      </div>

      <div className={classesComun.bottomElement}>
        <Button
          className={classesComun.buttonAchs2}
          variant="contained"
          type="submit"
          onClick={() => dispatch(handleSetStep(19.1))}
        >
          Otra Isapre
        </Button>
      </div>
    </div>
  );
};

function mapStateToProps({ addmissionForm }) {
  return {
    addmissionForm: addmissionForm,
  };
}

export default connect(mapStateToProps)(HealthForecast);
