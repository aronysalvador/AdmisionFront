import React from "react";
import { connect } from "react-redux";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { Button, Typography } from "@material-ui/core";
import { getBlackTheme } from "../../css/blackTheme";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import CabeceraSinBarra from "../../components/cabecera/cabeceraSinBarra";
import NoQuotesCard from './NoQuotesCard';

const NoQuotes = (props) => {

  const { dispatch } = props;

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
          No tenemos cotizaciones por este paciente
        </Typography>
        <div className={spaceStyle.space1} />
  
        <div className={comunClass.bottomElement}>
          <NoQuotesCard />
          <div className={spaceStyle.space2} />
          <Button
            className={blackStyle.buttonFooter}
            onClick={() => {
              dispatch(handleSetStep(5.7));
            }}
          >
            Continuar admisión
          </Button>
          <div className={spaceStyle.spaceMin1} />
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
  );
};
const mapStateToProps = ({ addmissionForm }) => {
  return {
    addmissionForm: addmissionForm,
  };
};
export default connect(mapStateToProps)(NoQuotes);
