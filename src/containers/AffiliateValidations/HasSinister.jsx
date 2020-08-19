import React from "react";
import { connect } from "react-redux";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { Button, Typography } from "@material-ui/core";
import { getBlackTheme } from "../../css/blackTheme";
import { handleSetStep } from '../../redux/actions/AdmissionAction'

const HasSinister = (props) => {
  const { dispatch } = props;

  const spaceStyle = getSpaceStyle();
  const comunClass = getComunStyle();
  const blackStyle = getBlackTheme();

  return (
    <div className={blackStyle.root}>
      <div className={spaceStyle.space2} />
        <img
          alt="load"
          src="./static/siniestro.png"
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
      <div className={spaceStyle.space2} />
      <Typography
        color="textSecondary"
        gutterBottom
        className={blackStyle.textMessage}
      >
        Este paciente ya tiene un siniestro
      </Typography>
      <div className={spaceStyle.space3} />
      <Typography
        color="textSecondary"
        gutterBottom
        className={blackStyle.textFinal}
      >
        Puedes:
      </Typography>
      <div className={comunClass.bottomElement}>
        <Button
          className={blackStyle.buttonFooter}
          onClick={() => {
            dispatch(handleSetStep(5.831));
          }}
        >
          Ver sus(s) siniestro(s)
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
export default connect(mapStateToProps)(HasSinister);
