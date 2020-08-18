import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { saveRut, handleSetStep } from "../../redux/actions/AdmissionAction";
import { Button } from "@material-ui/core";

const getUseStyles = makeStyles({
  center: {
    paddingLeft: "3.4375em",
    paddingRight: "3.4375em",
    padding: "0em",
  },
  img: {
    width: "15.625em",
  },
  text1: {
    textAlign: "center",
    fontFamily: "Catamaran",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "1.5625em",
    lineHeight: "1.6875em",
    alignItems: "center",
    color: "#081C15",
  },
  text2: {
    textAlign: "center",
    fontFamily: "Catamaran",
    fontStyle: "normal",
    fontSize: "1em",
    lineHeight: "1.5625em",
    alignItems: "center",
    color: "#081C15",
  },
  text3: {
    color: "#007A33",
    padding: "0 50px"
  },
  center2: {
    paddingLeft: "7.625em",
    paddingRight: "7.625em",
    padding: "0em",
  },
  img2: {
    width: "7.28125em",
  },
});

const SameDateSinister = (props) => {
  const { addmissionForm, dispatch } = props;

  const spaceStyle = getSpaceStyle();
  const useStyles = getUseStyles();
  const comunClass = getComunStyle();

  return (
    <div className={comunClass.root}>
      <div className={spaceStyle.space5} />
      <div className={useStyles.center}>
        <img alt="load" src="./static/notificacion.png" className={useStyles.img} />
      </div>
      <div className={spaceStyle.space3} />
      <Typography
        color="textSecondary"
        gutterBottom
        className={useStyles.text1}
      >
        ¡Atención!
      </Typography>
      <div className={spaceStyle.space1} />
      <Typography
        color="textSecondary"
        gutterBottom
        className={[useStyles.text3, useStyles.text2]}
      >
        Este paciente tiene un siniestro activo en la misma fecha
      </Typography>

      
      <div className={comunClass.bottomElement}>
        <Button
          className={comunClass.buttonAchs}
            onClick={() => dispatch(handleSetStep(5.1)) }
        >
          Entendido
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
export default connect(mapStateToProps)(SameDateSinister);
