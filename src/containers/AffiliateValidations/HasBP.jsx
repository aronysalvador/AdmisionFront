import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { saveRut } from "../../redux/actions/AdmissionAction";
import { Button, Typography } from "@material-ui/core";

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
  center2: {
    paddingLeft: "7.625em",
    paddingRight: "7.625em",
    padding: "0em",
  },
  img2: {
    width: "7.28125em",
  },
});

const HasBP = (props) => {
  const { addmissionForm, dispatch } = props;

  useEffect(() => {
    console.log("MANDO EL RUT: ", addmissionForm.rut);
    //dispatch(saveRut(addmissionForm.rut));
  });

  const spaceStyle = getSpaceStyle();
  const useStyles = getUseStyles();
  const comunClass = getComunStyle();

  return (
    <div className={comunClass.rootBlack}>
      <div className={spaceStyle.space2} />
      <div className={useStyles.center}>
        <img
          alt="load"
          src="./static/validandoDatos.png"
          className={useStyles.img}
        />
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
        className={useStyles.text2}
      >
        Este paciente no tiene un BP creado
      </Typography>
      <Typography
        color="textSecondary"
        gutterBottom
        className={useStyles.text2}
      >
        Atiéndelo usando SAP
      </Typography>
      <div className={comunClass.bottomElement}>
        <Button
          className={comunClass.buttonAchs}
          onClick={() => {
            //dispatch(handleSetStep(17.1));
          }}
        >
          Siguiente
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
