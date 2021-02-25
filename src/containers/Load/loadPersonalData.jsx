import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { saveRut } from "../../redux/actions/AdmissionAction";
import Header from "../../components/header/index";
import image from './../../img/validandoDatos.svg'
import loader from './../../img/Loader_2.gif'

const LoadPersonalData = (props) => {
  const { addmissionForm, dispatch, microsoftReducer } = props;

  const initFn = useCallback(async () => {
    await dispatch(saveRut(addmissionForm.rut));
  }, [ dispatch, addmissionForm ]);

  useEffect(() => {
    initFn()
     // eslint-disable-next-line
  },[]);

  const spaceStyle = getSpaceStyle();
  const comunClass = getComunStyle();

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={spaceStyle.space5} />
      <center>
        <div>
          <img
            alt='load'
            src={image}
            className={comunClass.imgLoadData}
          />
        </div>
        <div className={spaceStyle.space3} />
        <Grid className={comunClass.txtLoadData}>
          Estamos validando&nbsp;
          <br className={comunClass.displayMobile} />
          tus datos
        </Grid>
        <div className={spaceStyle.space1} />
        <Grid className={comunClass.txtLoadData2}>
          Un momento por favor
        </Grid>
        <div>
          <img
            alt='load'
            src={loader}
            className={comunClass.imgLoadData2}
          />
        </div>
      </center>
    </div>
  );
};
const mapStateToProps = ({ addmissionForm, microsoftReducer }) => {
  return {
    addmissionForm,
    microsoftReducer
  };
};
export default connect(mapStateToProps)(LoadPersonalData);
