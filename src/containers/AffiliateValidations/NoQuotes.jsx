import { connect } from "react-redux";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { Button, Typography } from "@material-ui/core";
import { getBlackTheme } from "../../css/blackTheme";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { successCallLog } from "../../redux/actions/Log";
import CabeceraSinBarra from "../../components/cabecera/cabeceraSinBarra";
import NoQuotesCard from './NoQuotesCard';
import Header from "../../components/header/index";
import image from './../../img/error-siniestro.svg'

const NoQuotes = (props) => {
  const { dispatch, microsoftReducer } = props;

  const spaceStyle = getSpaceStyle();
  const comunClass = getComunStyle();
  const blackStyle = getBlackTheme();

  return (
    <div>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
        <div style={{position: 'absolute', width: '100%', height: '92%', backgroundColor: '#373737'}} />
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space1} />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <CabeceraSinBarra
          id={"NoQuotes-BtnBack"}
          dispatch={() => dispatch(handleSetStep(5.1))}
          color='#FFFFFF'
        />
      </div>
      <div className={blackStyle.root}>
      {/* style={{height: "40em"}}  */}
        <img
          alt='load'
          src={image}
          className={blackStyle.imgNoAfiliate}
        />
        <div className={spaceStyle.space1} />
        <Typography
          color='textSecondary'
          className={blackStyle.textWarning}
        >
        ¡Atención!
        </Typography>
        <Typography
          color='textSecondary'
          className={blackStyle.textNoAfiliate}
        >
          No tenemos cotizaciones por este paciente
        </Typography>
        <div className={spaceStyle.space1} />
        <div className={comunClass.displayDesk}>
          <div className={spaceStyle.space1} />
        </div>

        <NoQuotesCard />
        <div className={blackStyle.containerBottom}>
          <div className={comunClass.bottomElement}>
            <div className={comunClass.paddingElement}>
              <Button
                id={"NoQuotes-Btn1"}
                className={[ blackStyle.buttonFooter, blackStyle.buttonFooterSpace ].join(' ')}
                onClick={() => {
                  dispatch(handleSetStep(5.7)); // ("x", 5.12)
                }}
              >
                Continuar admisión
              </Button>

              <Button
                id={"NoQuotes-Btn2"}
                className={blackStyle.buttonFooter2}
                onClick={() => {
                  dispatch(handleSetStep(1)); // 1.1 Empecemos eliminada
                  dispatch(successCallLog(0));
                }}
              >
                Volver al inicio
              </Button>
            </div>
          </div>
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
    addmissionForm,
    microsoftReducer
  };
};
export default connect(mapStateToProps)(NoQuotes);
