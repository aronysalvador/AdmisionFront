import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { saveRut } from "../../redux/actions/AdmissionAction";

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

const LoadPersonalData = (props) => {
  const { addmissionForm, dispatch } = props;

  const initFn = useCallback(async () => {
    await dispatch(saveRut(addmissionForm.rut));
  }, [dispatch, addmissionForm ]);

  useEffect( () => {
     console.log("LOAD PERSONAL DATA...");  
     initFn()
     // eslint-disable-next-line
  },[]);

  const spaceStyle = getSpaceStyle();
  const useStyles = getUseStyles();
  const comunClass = getComunStyle();

  return (
    <div className={comunClass.root}>
      <div className={spaceStyle.space5} />
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
        Estamos validando
        <br />
        tus datos
      </Typography>
      <div className={spaceStyle.space1} />
      <Typography
        color="textSecondary"
        gutterBottom
        className={useStyles.text2}
      >
        Un momento por favor
      </Typography>
      <div className={useStyles.center2}>
        <img
          alt="load"
          src="./static/Loader_1.gif"
          className={useStyles.img2}
        />
      </div>
    </div>
  );
};
const mapStateToProps = ({ addmissionForm }) => {
  return {
    addmissionForm: addmissionForm,
  };
};
export default connect(mapStateToProps)(LoadPersonalData);
