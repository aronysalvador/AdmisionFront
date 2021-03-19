import { getComunStyle } from "../../css/comun";
import { Button } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Cabecera from "../../components/cabecera/index";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import Header from "../../components/header/index";
import image from './../../img/relato.svg'

const PruebasComplementarias = () => {
  const {
    addmissionForm: { percentage, AtencionMedica, CamposDocumentos }
  } = useSelector((state) => state, shallowEqual);
  const { microsoftReducer } = useSelector((state) => state, shallowEqual);
  const dispatch = useDispatch();

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const handleOnClick = (respuesta) => {
    dispatch(updateForm("PruebasComplementarias", respuesta));

    dispatch(updateForm(respuesta === "No" && (
      CamposDocumentos.anteceOtroC = "",
      CamposDocumentos.antecePartP = "",
      CamposDocumentos.anteceConst = "",
      CamposDocumentos.anteceVideS = "",
      CamposDocumentos.anteceComSe = "",
      CamposDocumentos.anteceOtro = "",
      CamposDocumentos.anteceNocuenta = "x",
      "CamposDocumentos", CamposDocumentos
    )))

    dispatch(handleSetStep(respuesta === "Si" ? 19.24 : 19.4))
  };

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => {
            dispatch(handleSetStep(AtencionMedica === "No" ? 19.201 : 19.21))
          }}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[ comunClass.titleBlack, comunClass.textPrimaryDesk ].join(' ')}>
          ¿El paciente presenta
          <Grid component='span' className={[ comunClass.titleBlue, comunClass.titleBlue2 ].join(' ')}>
            &nbsp;pruebas complementarias
          </Grid>
          ?
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component='span' className={comunClass.imgPrimaryDesk}>
            <img alt='identify' src={image} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.bottomElement}>
          <div className={comunClass.displayMobile}>
            <div className={spaceStyle.spaceMin1} />
          </div>
          <Button
            variant='contained'
            className={comunClass.buttonAchs}
            onClick={() => handleOnClick("Si")}
          >
            Sí
          </Button>
          <div className={spaceStyle.spaceMin1} />
          <Button
            className={comunClass.buttonAchs2}
            onClick={() => handleOnClick("No"
            // CamposDocumentos?.anteceOtroC = "",
            // CamposDocumentos?.antecePartP = "",
            // CamposDocumentos?.anteceConst = "",
            // CamposDocumentos?.anteceVideS = "",
            // CamposDocumentos?.anteceComSe = "",
            // CamposDocumentos?.anteceOtro = "",
            // CamposDocumentos?.anteceNocuenta = "x"
            )}
          >
            No
          </Button>
        </div>
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </div>
  );
};

export default PruebasComplementarias;
