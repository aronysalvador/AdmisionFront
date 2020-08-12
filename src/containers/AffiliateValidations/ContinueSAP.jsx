import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { Button, Typography } from "@material-ui/core";
import { getBlackTheme } from "../../css/blackTheme";

const ContinueSAP = (props) => {
  //const { addmissionForm, dispatch } = props;

  useEffect(() => {
    //dispatch(saveRut(addmissionForm.rut));
  });

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
        Entendido Continíua en SAP
      </Typography>
      <div className={spaceStyle.space2} />
      <Typography
        color="textSecondary"
        gutterBottom
        className={blackStyle.textFinal}
      >
        Atiéndelo usando SAP
      </Typography>
    </div>
  );
};
const mapStateToProps = ({ addmissionForm }) => {
  return {
    addmissionForm: addmissionForm,
  };
};
export default connect(mapStateToProps)(ContinueSAP);
