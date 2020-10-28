import React from "react";
import { connect } from "react-redux";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { Button, Typography } from "@material-ui/core";
import { getBlackTheme } from "../../css/blackTheme";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import Header from "../../components/header/index";

const HasBP = (props) => {
 
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
        <div className={comunClass.displayMobile}>
          <div className={spaceStyle.space1} />
        </div>
        <Typography
          color="textSecondary"
          gutterBottom
          className={blackStyle.textMessage}
        >
          Este paciente&nbsp;
          <br className={comunClass.displayDesk}/>
          no tiene un BP creado
        </Typography>
        <div className={comunClass.displayMobile}>
          <div className={spaceStyle.space2} />
        </div>
        <Typography
          color="textSecondary"
          gutterBottom
          className={blackStyle.textFinal}
        >
          Atiéndelo usando SAP
        </Typography>
        <div className={comunClass.displayDesk}>
          <div className={spaceStyle.space2} />
        </div>
        <div className={comunClass.bottomElement}>
          <Button
            className={blackStyle.buttonFooter}
            onClick={() => {
              dispatch(handleSetStep(5.9));
            }}
          >
            Continuar en SAP
          </Button>
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
export default connect(mapStateToProps)(HasBP);
