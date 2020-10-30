import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { Button } from "@material-ui/core";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { getBlackTheme } from "../../css/blackTheme";
import Header from "../../components/header/index";

const NoCuentaSap = (props) => {
  const { dispatch, microsoftReducer } = props;

  const spaceStyle = getSpaceStyle();
  const comunClass = getComunStyle();
  const blackStyle = getBlackTheme();

  return (
    <>
      <div className={comunClass.displayDesk}> 
        <Header
            userMsal={ microsoftReducer.userMsal }
            // step={1}
        />
      </div>
      <div className={blackStyle.root}>
        <div className={spaceStyle.space5} />
        <div>
        <img
            alt="load"
            src="./static/error-siniestro.svg"
            className={blackStyle.img}
          />
        </div>
        <div className={spaceStyle.space2} />
        <Typography
          color="textSecondary"
          gutterBottom
          className={blackStyle.textWarning}
        >
          ¡Lo sentimos!
        </Typography>
        <div className={spaceStyle.space1} />
        <Typography
          color="textSecondary"
          gutterBottom
          className={blackStyle.textNoAfiliate}
        >
          No tienes cuenta SAP&nbsp;
          <br className={comunClass.displayDesk}/>
          con permisos para realizar esta acción
        </Typography>
        <div className={spaceStyle.space1} />
        <Typography
          color="textSecondary"
          gutterBottom
          className={blackStyle.textDetailSimpleNoSAP}
        >
          Comunicate con tu administrador de cuenta
        </Typography>

        <div className={comunClass.bottomElement}>
          <Button
            className={blackStyle.buttonFooter}
              onClick={() => dispatch(handleSetStep(0)) }
          >
            Entendido
          </Button>
        </div>
        <div className={comunClass.displayDesk}>
          <div className={spaceStyle.space2} />
        </div>
      </div>
    </>
  );
};
const mapStateToProps = ({ addmissionForm, microsoftReducer }) => {
  return {
    addmissionForm: addmissionForm,
    microsoftReducer: microsoftReducer
  };
};
export default connect(mapStateToProps)(NoCuentaSap);
