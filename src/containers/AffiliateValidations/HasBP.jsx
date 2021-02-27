import { connect } from "react-redux";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { Button, Typography } from "@material-ui/core";
import { getBlackTheme } from "../../css/blackTheme";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import Header from "../../components/header/index";
import image from './../../img/error-siniestro.svg'

const HasBP = (props) => {
  const { dispatch, microsoftReducer } = props;

  const spaceStyle = getSpaceStyle();
  const comunClass = getComunStyle();
  const blackStyle = getBlackTheme();

  return (
  <>
    <div className={comunClass.displayDesk}>
      <Header userMsal={ microsoftReducer.userMsal } />
      <div style={{position: 'absolute', width: '100%', height: '92%', backgroundColor: '#373737'}} />
    </div>
    <div className={blackStyle.root}>
      <div className={spaceStyle.space2} />
      <img
        alt='load'
        src={image}
        className={blackStyle.img}
      />
      <div className={spaceStyle.space3} />
      <Typography className={blackStyle.textWarning}>
        ¡Atención!
      </Typography>
      <div className={comunClass.displayMobile}>
        <div className={spaceStyle.space1} />
      </div>
      <Typography className={blackStyle.textMessage}>
        Este paciente no tiene un BP creado
      </Typography>
      <div className={comunClass.displayMobile}>
        <div className={spaceStyle.space2} />
      </div>
      <Typography className={blackStyle.textFinal}>
        Atiéndelo usando SAP
      </Typography>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space1} />
      </div>
      <div className={comunClass.bottomElement}>
        <Button
          id={"HasBP-Btn1"}
          className={blackStyle.buttonFooter}
          onClick={() => {
            dispatch(handleSetStep(5.9));
          }}
        >
          Continuar en SAP
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
    addmissionForm,
    microsoftReducer
  };
};
export default connect(mapStateToProps)(HasBP);
