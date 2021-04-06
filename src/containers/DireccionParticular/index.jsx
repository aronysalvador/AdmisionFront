import { useEffect, useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import Cabecera from "../../components/cabecera/index";
import DireccionGeo from "../../components/share/DireccionGeo";
import { validarDireccionSN } from "./../../helpers/utils";
import { Button, Typography, withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import Header from "../../components/header/index";
import image from './../../img/identify.svg'
import Switch from '@material-ui/core/Switch';
import { getWelcomeStyle } from "../../css/welcomeStyle";
import { ErrorOutline } from "@material-ui/icons";

const DireccionParticular = () => {
  const {
    addmissionForm: { percentage, urlMapaDireccionParticular, direccionParticularObj, creacionBP, telefonoParticular }
  } = useSelector((state) => state, shallowEqual)

  const {
    microsoftReducer
  } = useSelector((state) => state, shallowEqual)

  const [ direccion, setDireccion ] = useState(() => {
    return !direccionParticularObj ? "" : direccionParticularObj
  })

  const [ mapaUrl, setMapaUrl ] = useState(() => {
    return urlMapaDireccionParticular ? urlMapaDireccionParticular : ""
  })

  const [ nombreComuna, setNombreComuna ]=useState("")

  const [ stateCheck, setStateCheck ] = useState(false);

  const handleChange = (event) => {
    setStateCheck(event.target.checked);
    if (event.target.checked){
      setTimeout(() => {
        dispatch(handleSetStep(5.22))
      }, 1000);
    }
  };

  const clearData = () => {
    dispatch(updateForm("direccionParticularObj", ""))
    dispatch(updateForm("urlMapaDireccionParticular", ""))
  }

  const dispatch = useDispatch()

  const comunClass = getComunStyle()
  const spaceStyle = getSpaceStyle()
  const welcomeStyle = getWelcomeStyle();
  const { googleMap } = getComunStyle()

  const [ valido, setValido ] = useState(false)
  useEffect(() => {
    if (direccion){
      validaDireccion(direccion)
    } else {
      setValido(false)
      setNombreComuna("")
    }
    // eslint-disable-next-line
  },[direccion])

  const validaDireccion = async() => {
    const resultado = await validarDireccionSN(direccion)
    if (resultado.valida){
      const { codigo_region, codigo_comuna } = resultado.comuna;
      let comuna = "0000000"+codigo_region+codigo_comuna;
      setNombreComuna(comuna)
    }
    setValido(resultado.valida)
 }

 const CustomSwitch = withStyles({
    switchBase: {
      color: "#FAFAFA",
      '&$checked': {
        color: "#00B2A9"
      },
      '&$checked + $track': {
        backgroundColor: "#00B2A9"
      }
    },
    checked: {},
    track: {}
  })(Switch);

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          id={"DireccionParticular-BtnBack"}
          dispatch={() => (creacionBP ? dispatch(handleSetStep(5.4)) : dispatch(handleSetStep(5.1)))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[ comunClass.titleBlack, comunClass.titleBlack2, comunClass.textPrimaryDesk ].join(' ')}>
          Ingresa
          <Grid component='span' className={[ comunClass.titleBlue, comunClass.titleBlue2 ].join(' ')}>
            &nbsp;la dirección en donde vive el paciente
          </Grid>
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component='span' className={comunClass.imgPrimaryDesk}>
            <img alt='identify' src={image} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.displayMobile}>
          <div className={spaceStyle.space2} />
        </div>
        <div className={comunClass.containerTextBox3}>
          <Typography className={comunClass.tituloTextBox} variant='subtitle2' style={{marginBottom: '8px'}}>
            Dirección particular
          </Typography>

          <DireccionGeo
            id={"DireccionParticular-Lbl1"}
            comunStyle={getComunStyle()}
            direccion={direccion}
            setMapa={setMapaUrl}
            setDireccion={setDireccion}
            clearData={clearData}
            showDinamicMap={() => {
              setDireccion({description: ''});
              dispatch(handleSetStep(5.21))
            }}
          />
          <center>
            {(mapaUrl)?
            <img alt='MapaDireccionParticular' className={googleMap} src={mapaUrl} />
            :null}
          </center>
        </div>
        <div className={spaceStyle.space1} />
        <div className={welcomeStyle.titleContainerCardsEmail2}>
            <div className={welcomeStyle.divRowBottomEmail}>
              <ErrorOutline />
              <Typography className={welcomeStyle.itemText2}>
                ¿No encuentras la dirección?
              </Typography>
              <div style={{ marginLeft:"235px", top:"12px", position:"relative"}}>
                <CustomSwitch
                  id='ValidarCorreoElectronico-CustomSwitch1'
                  checked={stateCheck}
                  onChange={handleChange}
                  color='default'
                />
              </div>
            </div>
            <div className={welcomeStyle.divRowBottomEmail}>
              <Typography className={welcomeStyle.pBegin}>
                Ingresa la dirección del paciente de manera manual
              </Typography>
            </div>
        </div>
        <div className={comunClass.bottomElement}>
          <Button
            id={"DireccionParticular-Btn1"}
            className={comunClass.buttonAchs}
            variant='contained'
            disabled={!valido}
            onClick={() => {
              dispatch(updateForm("direccionParticular", direccion.description))
              dispatch(updateForm("direccionParticularObj", direccion))
              dispatch(updateForm("comunaDireccionParticular", nombreComuna))
              if (creacionBP){
                if (telefonoParticular)
                  dispatch(handleSetStep(5.1))
                else
                  dispatch(handleSetStep(5.3))
              }
              else
                { dispatch(handleSetStep(5.1)) }
            }}
          >
            Guardar dirección
          </Button>
        </div>
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </div>
  )
}
export default DireccionParticular