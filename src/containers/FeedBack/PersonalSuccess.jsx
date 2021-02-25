import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import Indiciaciones from "../../components/Indicaciones";
import Cabecera from "../../components/cabecera/cabeceraSinBarra";
import Header from "../../components/header/index";
import { Grid } from '@material-ui/core';
import { getWelcomeStyle } from "../../css/welcomeStyle";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import check from './../../img/icon-check.png'
import excelent from './../../img/excelent.svg'
import espera from './../../img/espera.svg'
import sms from './../../img/sms.svg'
import work from './../../img/work.svg'

const PersonalSuccess = (props) => {
    const { dispatch, microsoftReducer } = props;
    const welcomeStyle = getWelcomeStyle();
    const comunStyle = getComunStyle();
    const spaceStyle = getSpaceStyle();

    return (
      <div className={comunStyle.rootBegin}>
        <div className={comunStyle.displayDesk}>
          <Header userMsal={ microsoftReducer.userMsal } />
        </div>
        <div className={welcomeStyle.backgroundBoxAchsDesk}>
          <div className={welcomeStyle.beginContainer}>
            <div className={comunStyle.displayMobile}>
              <Cabecera
                id={"PersonalSuccess-BtnBack"}
                dispatch={() => dispatch(handleSetStep(5.1))}
                color={"#373737" }
                percentage={-1}
                noSpace
              />
            </div>
            <div className={comunStyle.displayDesk}>
              <Cabecera
                id={"PersonalSuccess-BtnBack"}
                dispatch={() => dispatch(handleSetStep(5.1))}
                color={"#fff" }
                percentage={-1}
                noSpace
              />
            </div>
            <div className={comunStyle.displayMobile}>
              <div className={welcomeStyle.avatarContainerRight}>
                <Avatar className={welcomeStyle.avatar}>
                  {microsoftReducer.userMsal.iniciales}
                </Avatar>
              </div>
              <div className={spaceStyle.space6} />
            </div>
            <div className={comunStyle.titleDesk}>
              <div className={welcomeStyle.TextContainer}>
                <div className={comunStyle.displayMobile}>
                  <img alt='Excelente' src={check} className={welcomeStyle.iconCircular} />
                </div>
                <Typography className={welcomeStyle.titleBegin}>
                  ¡Excelente!
                </Typography>
                <div style={{display: 'flex'}}>
                  <Typography className={welcomeStyle.titleBegin}>
                    Usuario Identificado&nbsp;
                  </Typography>
                  <div className={comunStyle.displayDeskInline}>
                    <img alt='Excelente' src={check} className={welcomeStyle.iconCircular} />
                  </div>
                </div>
              </div>

              <div className={comunStyle.displayDeskInline}>
                <Grid component='span' className={comunStyle.imgPrimaryDesk}>
                  <img alt='excelente' src={excelent} />
                </Grid>
              </div>
            </div>
          </div>
        </div>
        <div className={welcomeStyle.beginContainer}>
          <div className={comunStyle.displayDesk}>
            <div className={spaceStyle.space1} />
          </div>
          <div className={comunStyle.textCenterDesk}>
            <Typography className={welcomeStyle.subTitleBegin}>
              Ahora capturarás el relato:
            </Typography>
            <div className={comunStyle.displayDesk}>
              <div className={spaceStyle.space1} />
            </div>
            <div className={comunStyle.boxDesk}>
              <Indiciaciones
                indicaciones={[
                  {
                    icono: espera,
                    textoPrimario: "Completa las frases",
                    textoSecundario: "mientras escuchas con atención",
                    clase: welcomeStyle.divRowBottom
                  },
                  {
                    icono: sms,
                    textoPrimario: "Transcribe con fidelidad",
                    textoSecundario: "usando los tiempos verbales sugeridos",
                    clase: welcomeStyle.divRowBottom
                  },
                  {
                    icono: work,
                    textoPrimario: "Mantén la autenticidad",
                    textoSecundario: "sin alterar los sucesos",
                    clase: welcomeStyle.divRow2
                  }
                ]}
              />
              <div className={comunStyle.displayMobile}>
                <div className={spaceStyle.space2} />
              </div>
              <div className={welcomeStyle.bottomBegin}>
                <Button
                  id={"PersonalSuccess-Btn1"}
                  className={comunStyle.buttonAchs}
                  variant='contained'
                  onClick={() => dispatch(handleSetStep("x", 5.7)) }
                >
                  Capturar el relato
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className={comunStyle.displayDesk}>
          <div className={spaceStyle.space1} />
        </div>
      </div>
    )
}

function mapStateToProps({ addmissionForm, microsoftReducer}) {
    return {
        addmissionForm,
        microsoftReducer
    }
}
export default connect(mapStateToProps)(PersonalSuccess)