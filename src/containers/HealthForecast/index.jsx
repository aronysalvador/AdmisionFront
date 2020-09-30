import React, { useEffect, useCallback, useState } from "react";
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
import Grid from '@material-ui/core/Grid';
import { Format } from "../../helpers/strings";
import {siniestroStyle} from '../../css/siniestroStyle';

const HealthForecast = (props) => {
  const { dispatch, addmissionForm } = props;

  const dispatch1 = useDispatch();
  const [buttonOver1, setButtonOver1] = useState(false);
  const [buttonOver2, setButtonOver2] = useState(false);
  const [buttonOver3, setButtonOver3] = useState(false);
  const [buttonOver4, setButtonOver4] = useState(false);
  const [buttonOver5, setButtonOver5] = useState(false);
  const [buttonOver6, setButtonOver6] = useState(false);

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
  const classes = siniestroStyle()

  return (
    <div className={classesComun.root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(18.1))}
        percentage={addmissionForm.percentage}
      />
      <div>
        <Typography variant="p" component="p" className={classesComun.titleBlack}>
          Selecciona la 
          <Grid component="span"  className={classesComun.titleBlue}>
          &nbsp;Previsión de salud
          </Grid>     
        </Typography>
      </div>

      <div className={spaceStyle.space2} />

      {getIsapres.length > 0 && ( 
        <>

          <div className={classesComun.textCenter}>
          <Button
            className={[classes.button]}//classesComun.buttonAchs, classesComun.pregunta_temp
            style={{justifyContent: "center", height: "90px", color: "#373737"}}
            variant="contained"
            type="submit"
            disabled={getIsapres.length === 0}
            value={getIsapres.length !== 0 ? getIsapres[0].id : null}
            onClick={() => clickSendIsapres(getIsapres[0])}
            onMouseOver={() =>{
              setButtonOver1(true)
            }}
            onMouseOut={() =>{
                setButtonOver1(false)
            }}
          >
            {getIsapres.length !== 0 ? <p>{Format.formatizar(getIsapres[0].nombre)}</p> : null}
            {buttonOver1 && <img src="./static/check.svg"alt="check" style={{position: "absolute", top: "3px", right: "3px"}} /> }
          </Button>
          </div>

          <div className={spaceStyle.space1} />
          <div className={classesComun.flexDivider}>
          <Divider className={classesComun.mediumDivider} />
          <em className={classesComun.emMargin} style={{ fontStyle: "inherit"}}> o </em>

          <Divider className={classesComun.mediumDivider} /> </div>
          <div className={spaceStyle.space1} />

          <div>
          <Button
          className={classesComun.buttonAchsRight}
          // style={{justifyContent: "center"}}
          variant="contained"
          type="submit"
          disabled={getIsapres.length === 0}
          value={getIsapres.length !== 0 ? getIsapres[12].id : null}
          onClick={() => clickSendIsapres(getIsapres[12])}
          onMouseOver={() =>{
            setButtonOver2(true)
          }}
          onMouseOut={() =>{
              setButtonOver2(false)
          }}
          >
          {getIsapres.length !== 0 ? <p>{Format.formatizar(getIsapres[12].nombre)}</p> : null}
          {buttonOver2 && <img src="./static/check.svg"alt="check" style={{position: "absolute", top: "3px", right: "3px"}} /> }
          </Button>
          <Button
          className={classesComun.buttonAchsLeft}
          // style={{justifyContent: "center"}}
          variant="contained"
          type="submit"
          disabled={getIsapres.length === 0}
          value={getIsapres.length !== 0 ? getIsapres[25].id : null}
          onClick={() => clickSendIsapres(getIsapres[25])}
          onMouseOver={() =>{
            setButtonOver3(true)
          }}
          onMouseOut={() =>{
              setButtonOver3(false)
          }}
          >
          {getIsapres.length !== 0 ? <p>{Format.formatizar(getIsapres[25].nombre)}</p> : null}
          {buttonOver3 && <img src="./static/check.svg"alt="check" style={{position: "absolute", top: "3px", right: "3px"}} /> }
          </Button>
          </div>

          <div className={spaceStyle.space1} />

          <div>
          <Button
            className={classesComun.buttonAchsRight}
            variant="contained"
            type="submit"
            disabled={getIsapres.length === 0}
            value={getIsapres.length !== 0 ? getIsapres[9].id : null}
            onClick={() => clickSendIsapres(getIsapres[9])}
            onMouseOver={() =>{
              setButtonOver4(true)
            }}
            onMouseOut={() =>{
                setButtonOver4(false)
            }}
          >
            {getIsapres.length !== 0 ? <p>{Format.formatizar(getIsapres[9].nombre)}</p> : null}
            {buttonOver4 && <img src="./static/check.svg"alt="check" style={{position: "absolute", top: "3px", right: "3px"}} /> }
          </Button>
          <Button
            className={classesComun.buttonAchsLeft}
            variant="contained"
            type="submit"
            disabled={getIsapres.length === 0}
            value={getIsapres.length !== 0 ? getIsapres[11].id : null}
            onClick={() => clickSendIsapres(getIsapres[11])}
            onMouseOver={() =>{
              setButtonOver5(true)
            }}
            onMouseOut={() =>{
                setButtonOver5(false)
            }}
          >
            {getIsapres.length !== 0 ? <p>{Format.formatizar(getIsapres[11].nombre)}</p> : null}
            {buttonOver5 && <img src="./static/check.svg"alt="check" style={{position: "absolute", top: "3px", right: "3px"}} /> }
          </Button>
          </div>

        </>
        )}

      <div className={classesComun.bottomElement}>
        <Button
          className={classes.button}
          style={{justifyContent: "center", height: "90px", color: "#373737"}}
          variant="contained"
          type="submit"
          onClick={() => dispatch(handleSetStep(19.1))}
          onMouseOver={() =>{
            setButtonOver6(true)
          }}
          onMouseOut={() =>{
              setButtonOver6(false)
          }}
          >
          Otra Isapre
          {buttonOver6 && <img src="./static/check.svg"alt="check" style={{position: "absolute", top: "3px", right: "3px"}} /> }
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
