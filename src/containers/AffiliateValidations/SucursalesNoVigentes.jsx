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

const SucursalesNoVigentes = (props) => {

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
          id={"SucursalesNoVigentes-BtnBack"}
          dispatch={() => dispatch(handleSetStep(5.4))} 
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
          La empresa seleccionada no tiene sucursales vigentes
        </Typography>
        <div className={spaceStyle.space1} />

        <NoAfiliateCard />
  
        <div className={comunClass.bottomElement}>
        <div className={comunClass.displayMobile}>
          <div className={spaceStyle.space2} />
        </div>
          <Button
            id={"SucursalesNoVigentes-Btn1"}
            className={blackStyle.buttonFooter}
            onClick={() => { dispatch(handleSetStep(1)) }} // 1.1 Empecemos eliminada
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
export default connect(mapStateToProps)(SucursalesNoVigentes);
