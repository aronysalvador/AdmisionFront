import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import Divider from "@material-ui/core/Divider";

//Action de Redux
import { sendIsapres } from "../../redux/actions/AdmissionAction";
import Grid from '@material-ui/core/Grid';
import { Format } from "../../helpers/strings";
import {siniestroStyle} from '../../css/siniestroStyle';
import Header from "../../components/header/index";
import image from './../../img/relato.svg'
import check from './../../img/check.svg'

const HealthForecast = (props) => {
  const { dispatch, addmissionForm, microsoftReducer } = props;

  const dispatch1 = useDispatch();
  const [buttonOver1, setButtonOver1] = useState(false);
  const [buttonOver2, setButtonOver2] = useState(false);
  const [buttonOver3, setButtonOver3] = useState(false);
  const [buttonOver4, setButtonOver4] = useState(false);
  const [buttonOver5, setButtonOver5] = useState(false);
  const [buttonOver6, setButtonOver6] = useState(false);

  const getIsapres = useSelector((state) => state.previsionForm.isapres);

  const clickSendIsapres = (id) => {
    dispatch1(sendIsapres(id));
    dispatch(handleSetStep(19.2));
  };

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();
  const classes = siniestroStyle()

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal }/>
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(18.1))}
          percentage={addmissionForm.percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[comunClass.titleBlack, comunClass.textPrimaryDesk]}>
          Selecciona la 
          <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
          &nbsp;Previsión de salud
          </Grid>     
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="identify" src={image} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDeskCardBtn}>
        <div className={comunClass.displayMobile}> 
          <div className={spaceStyle.space2} />
        </div>
        {getIsapres.length > 0 && ( 
          <>
            <div className={comunClass.textCenter}>
              <Button
                className={[classes.button]}//comunClass.buttonAchs, comunClass.pregunta_temp
                style={{justifyContent: "center", height: "90px", color: "#373737"}}
                variant="contained"
                type="submit"
                disabled={getIsapres.length === 0}
                value={getIsapres.length !== 0 ? getIsapres[0].id : null}
                onClick={() => clickSendIsapres(getIsapres[0])}
                onMouseOver={() =>{ setButtonOver1(true) }}
                onMouseOut={() =>{ setButtonOver1(false) }}
              >
                {getIsapres.length !== 0 ? <p>{Format.formatizar(getIsapres[0].nombre)}</p> : null}
                {buttonOver1 && <img src={check} alt="check" style={{position: "absolute", top: "3px", right: "3px"}} /> }
              </Button>
            </div>
            <div className={comunClass.displayMobile}> 
              <div className={spaceStyle.space1} />
              <div className={comunClass.flexDivider}>
              <Divider className={comunClass.mediumDivider} />
              <em className={comunClass.emMargin} style={{ fontStyle: "inherit"}}> o </em>
              <Divider className={comunClass.mediumDivider} /> </div>
            </div>
            <div className={spaceStyle.space1} />

            <div>
              <Button
                className={comunClass.buttonAchsRight}
                // style={{justifyContent: "center"}}
                variant="contained"
                type="submit"
                disabled={getIsapres.length === 0}
                value={getIsapres.length !== 0 ? getIsapres[12].id : null}
                onClick={() => clickSendIsapres(getIsapres[12])}
                onMouseOver={() =>{ setButtonOver2(true) }}
                onMouseOut={() =>{ setButtonOver2(false) }}
              >
                {getIsapres.length !== 0 ? <p>{Format.formatizar(getIsapres[12].nombre)}</p> : null}
                {buttonOver2 && <img src={check} alt="check" style={{position: "absolute", top: "3px", right: "3px"}} /> }
              </Button>
              <Button
                className={comunClass.buttonAchsLeft}
                // style={{justifyContent: "center"}}
                variant="contained"
                type="submit"
                disabled={getIsapres.length === 0}
                value={getIsapres.length !== 0 ? getIsapres[25].id : null}
                onClick={() => clickSendIsapres(getIsapres[25])}
                onMouseOver={() =>{  setButtonOver3(true) }}
                onMouseOut={() =>{ setButtonOver3(false) }}
              >
                {getIsapres.length !== 0 ? <p>{Format.formatizar(getIsapres[25].nombre)}</p> : null}
                {buttonOver3 && <img src={check} alt="check" style={{position: "absolute", top: "3px", right: "3px"}} /> }
              </Button>
            </div>

            <div className={spaceStyle.space1} />

            <div>
              <Button
                className={comunClass.buttonAchsRight}
                variant="contained"
                type="submit"
                disabled={getIsapres.length === 0}
                value={getIsapres.length !== 0 ? getIsapres[9].id : null}
                onClick={() => clickSendIsapres(getIsapres[9])}
                onMouseOver={() =>{ setButtonOver4(true) }}
                onMouseOut={() =>{ setButtonOver4(false) }}
              >
                {getIsapres.length !== 0 ? <p>{Format.formatizar(getIsapres[9].nombre)}</p> : null}
                {buttonOver4 && <img src={check} alt="check" style={{position: "absolute", top: "3px", right: "3px"}} /> }
              </Button>
              <Button
                className={comunClass.buttonAchsLeft}
                variant="contained"
                type="submit"
                disabled={getIsapres.length === 0}
                value={getIsapres.length !== 0 ? getIsapres[11].id : null}
                onClick={() => clickSendIsapres(getIsapres[11])}
                onMouseOver={() =>{ setButtonOver5(true) }}
                onMouseOut={() =>{ setButtonOver5(false) }}
              >
                {getIsapres.length !== 0 ? <p>{Format.formatizar(getIsapres[11].nombre)}</p> : null}
                {buttonOver5 && <img src={check} alt="check" style={{position: "absolute", top: "3px", right: "3px"}} /> }
              </Button>
            </div>
          </>
        )}

        <div className={comunClass.bottomElement}>
          <Button
            className={classes.button}
            style={{justifyContent: "center", height: "90px", color: "#373737"}}
            variant="contained"
            type="submit"
            onClick={() => dispatch(handleSetStep(19.1))}
            onMouseOver={() =>{ setButtonOver6(true) }}
            onMouseOut={() =>{ setButtonOver6(false) }}
          >
            Otra Isapre
            {buttonOver6 && <img src={check} alt="check" style={{position: "absolute", top: "3px", right: "3px"}} /> }
          </Button>
        </div>
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </div>
  );
};

function mapStateToProps({ addmissionForm, microsoftReducer }) {
  return {
    addmissionForm: addmissionForm,
    microsoftReducer: microsoftReducer
  };
}

export default connect(mapStateToProps)(HealthForecast);
