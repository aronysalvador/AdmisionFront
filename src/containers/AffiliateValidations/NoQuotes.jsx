import React from "react";
import { connect } from "react-redux";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { Button, Typography } from "@material-ui/core";
import { getBlackTheme } from "../../css/blackTheme";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import CabeceraSinBarra from "../../components/cabecera/cabeceraSinBarra";
import NoQuotesCard from './NoQuotesCard';
import Header from "../../components/header/index";

const NoQuotes = (props) => {

  const { dispatch, microsoftReducer } = props;

  const spaceStyle = getSpaceStyle();
  const comunClass = getComunStyle();
  const blackStyle = getBlackTheme();

  return (
    <div>
      <div className={comunClass.displayDesk}> 
        <Header
          userMsal={ microsoftReducer.userMsal }
          // step={1}
        />
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space1} />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <CabeceraSinBarra
          dispatch={() => dispatch(handleSetStep(5.1))} 
          color="#FFFFFF"
        />
      </div>
      <div className={blackStyle.root}>
      {/* style={{height: "40em"}}  */}
        <img
          alt="load"
          src="./static/error-siniestro.svg"
          className={blackStyle.imgNoAfiliate}
        />
        <div className={spaceStyle.space1} />
        <Typography
          color="textSecondary"
          className={blackStyle.textWarning}
        >
        ¡Atención!
        </Typography>
        <Typography
          color="textSecondary"
          className={blackStyle.textNoAfiliate}
        >
          No tenemos cotizaciones&nbsp;
          <br className={comunClass.displayDesk}/> 
          por este paciente
        </Typography>
        <div className={spaceStyle.space1} />
        <div className={comunClass.displayDesk}>
          <div className={spaceStyle.space1} />
        </div>

        <NoQuotesCard />
        <div className={blackStyle.containerBottom}>
          <div className={comunClass.bottomElement}>
            <Button
              className={blackStyle.buttonFooter}
              onClick={() => {
                dispatch(handleSetStep(5.7));
              }}
            >
              Continuar admisión
            </Button>
            {/* <div className={spaceStyle.spaceMin1} /> */}
            <Button
              className={blackStyle.buttonFooter2}
              onClick={() => {
                dispatch(handleSetStep(1.1));
              }}
            >
              Volver al inicio
            </Button>
          </div>
        </div> 
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </div>
  );
};
const mapStateToProps = ({ addmissionForm, microsoftReducer }) => {
  return {
    addmissionForm: addmissionForm,
    microsoftReducer: microsoftReducer
  };
};
export default connect(mapStateToProps)(NoQuotes);
