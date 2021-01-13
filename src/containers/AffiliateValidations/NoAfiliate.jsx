import React from "react";
import { connect } from "react-redux";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { Button, Typography } from "@material-ui/core";
import { getBlackTheme } from "../../css/blackTheme";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import CabeceraSinBarra from "../../components/cabecera/cabeceraSinBarra";
import NoAfiliateCard from './NoAfiliateCard';
import Header from "../../components/header/index";
import image from './../../img/error-siniestro.svg'

const NoAfiliate = (props) => {

  const { dispatch, microsoftReducer } = props;

  const spaceStyle = getSpaceStyle();
  const comunClass = getComunStyle();
  const blackStyle = getBlackTheme();

  return (
    <div>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal }/>
        <div style={{position: 'absolute', width: '100%', height:'92%', backgroundColor: '#373737'}}></div>
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space1} />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <CabeceraSinBarra
          dispatch={() => dispatch(handleSetStep(5.1))} // 5.1
          color="#FFFFFF"
        />
      </div>
      <div className={blackStyle.root}>
      {/* style={{height: "40em"}}  */}
        <img
          alt="load"
          src={image}
          className={blackStyle.imgNoAfiliate}
        />
        <div className={spaceStyle.space1} />
        <Typography className={blackStyle.textWarning}>
          ¡Atención!
        </Typography>
        <Typography className={blackStyle.textNoAfiliate}>
          Empresa de este paciente no presenta afiliación en ACHS
        </Typography>
        <div className={spaceStyle.space1} />
        <div className={comunClass.displayDesk}>
          <div className={spaceStyle.space1} />
        </div>

        <NoAfiliateCard />
        
        <div className={comunClass.bottomElement}>
          <Button
            className={blackStyle.buttonFooter}
            onClick={() => { dispatch(handleSetStep(1.1)) }}
          >
            Volver al inicio
          </Button>
        </div>
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </div>
  );
};
const mapStateToProps = ({ addmissionForm, microsoftReducer }) => {
  return {
    addmissionForm: addmissionForm,
    microsoftReducer: microsoftReducer
  };
};
export default connect(mapStateToProps)(NoAfiliate);
