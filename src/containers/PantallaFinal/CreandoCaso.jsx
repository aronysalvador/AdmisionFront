import React, { useEffect } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { crearAdmisionSiniestroSAP } from "../../redux/actions/AdmissionAction";
import Header from "../../components/header/index";

const CreandoCaso = (props) => {
  const { dispatch, microsoftReducer } = props;

  useEffect(() => {
    dispatch(crearAdmisionSiniestroSAP());
     // eslint-disable-next-line
  }, [crearAdmisionSiniestroSAP]);

  const spaceStyle = getSpaceStyle();
  const comunClass = getComunStyle();

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header
          userMsal={ microsoftReducer.userMsal }
          // step={1}
        />
      </div>
      <div className={spaceStyle.space5} />
      <center>
        <div>
          <img alt="load" 
            src="./static/caso2.png" 
            className={comunClass.imgLoadData} />
        </div>
        <div className={spaceStyle.space3} />
        <Grid
          className={comunClass.txtLoadData}
        >
          Estamos creando&nbsp;
          <br className={comunClass.displayMobile}/>
          tu caso
        </Grid>
        <div className={spaceStyle.space1} />
        <Grid
          className={comunClass.txtLoadData2}
        >
          Un momento por favor
        </Grid>
        <div>
          <img
            alt="load"
            src="./static/Loader_1.gif"
            className={comunClass.imgLoadData2}
          />
        </div>
      </center>
    </div>
  );
};
const mapStateToProps = ({ addmissionForm, microsoftReducer }) => {
  return {
    addmissionForm: addmissionForm,
    microsoftReducer: microsoftReducer
  };
};
export default connect(mapStateToProps)(CreandoCaso);
