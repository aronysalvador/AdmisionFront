import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { Button } from "@material-ui/core";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { getBlackTheme } from "../../css/blackTheme";
import Header from "../../components/header/index";
import image from './../../img/error-siniestro.svg'

const ErrorApi = (props) => {
  const { dispatch, microsoftReducer, addmissionForm: {mensajeErrorApi} } = props;

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
            src={image}
            className={blackStyle.img}
          />
        </div>
        <div className={spaceStyle.space2} />
        <Grid
          className={blackStyle.textWarning}
        >
          ¡Lo sentimos!
        </Grid>
        <div className={spaceStyle.space1} />
        <Grid
          className={blackStyle.textNoAfiliate}
        >
          Hay un error con la siguiente API&nbsp;
          <br className={comunClass.displayDesk}/>
          {mensajeErrorApi}
        </Grid>
        <div className={spaceStyle.space1} />
        <Grid
          className={blackStyle.textDetailSimpleNoSAP}
        >
          Comunicate con tu administrador de cuenta
        </Grid>

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
export default connect(mapStateToProps)(ErrorApi);
