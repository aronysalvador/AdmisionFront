import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { saveRut } from "../../redux/actions/AdmissionAction";
import Header from "../../components/header/index";

const LoadPersonalData = (props) => {
  const { addmissionForm, dispatch, microsoftReducer } = props;

  const initFn = useCallback(async () => {
    await dispatch(saveRut(addmissionForm.rut));
  }, [dispatch, addmissionForm ]);

  useEffect( () => {
    console.log("LOAD PERSONAL DATA...");  
    initFn()
     // eslint-disable-next-line
  },[]);

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
          <img
            alt="load"
            src="./static/validandoDatos.png"
            className={comunClass.imgLoadData}
          />
        </div>
        <div className={spaceStyle.space3} />
        <Typography
          color="textSecondary"
          gutterBottom
          className={comunClass.txtLoadData}
        >
          Estamos validando&nbsp;
          <br className={comunClass.displayMobile}/>
          tus datos
        </Typography>
        <div className={spaceStyle.space1} />
        <Typography
          color="textSecondary"
          gutterBottom
          className={comunClass.txtLoadData2}
        >
          Un momento por favor
        </Typography>
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
export default connect(mapStateToProps)(LoadPersonalData);
