import React, { useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import Cabecera from "../../components/cabecera/index";
import DireccionGeo from "../../components/share/DireccionGeo";
import { validarDireccion  } from "./../../helpers/utils";
import { Button, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import Header from "../../components/header/index";

const DireccionParticular = () => {
  const {
    addmissionForm: { percentage, urlMapaDireccionParticular,direccionParticularObj, creacionBP },
  } = useSelector((state) => state, shallowEqual)

  const {
    microsoftReducer
  } = useSelector((state) => state, shallowEqual)

  const [direccion, setDireccion] = useState(() => {
    return !direccionParticularObj ? "" : direccionParticularObj
  })

  const [mapaUrl, setMapaUrl] = useState(() => {
    return urlMapaDireccionParticular ? urlMapaDireccionParticular : ""
  })

  const [nombreComuna,setNombreComuna]=useState("")

  const clearData = () => {
    dispatch(updateForm("direccionParticularObj", ""))
    dispatch(updateForm("urlMapaDireccionParticular", ""))
  }

  const dispatch = useDispatch()

  const comunClass = getComunStyle()
  const spaceStyle = getSpaceStyle()
  const { googleMap } = getComunStyle()

  const [valido, setValido] = useState(false)
  React.useEffect(()=>{
    if(direccion){
      validaDireccion(direccion)      
    }else{
      setValido( false )
      setNombreComuna("")
    }
    // eslint-disable-next-line
  },[direccion])

  const validaDireccion = async()=>{
    const resultado = await validarDireccion(direccion)
    setNombreComuna(resultado.comuna)
    setValido(resultado.valida)
 }

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal }/>
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => ( creacionBP ? dispatch(handleSetStep(5.4)) : dispatch(handleSetStep(5.1)))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[comunClass.titleBlack, comunClass.titleBlack2, comunClass.textPrimaryDesk]}>
          Ingresa
          <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            &nbsp;la dirección en donde vive el paciente
          </Grid>                  
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="identify" src="static/identify.svg" className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.displayMobile}> 
          <div className={spaceStyle.space2} />
        </div>
        <div className={comunClass.containerTextBox}>
          <Typography className={comunClass.tituloTextBox} variant="subtitle2">
            Dirección particular
          </Typography>

          <DireccionGeo       
            comunStyle={getComunStyle()}
            direccion={direccion} 
            setMapa={setMapaUrl} 
            setDireccion={setDireccion} 
            clearData={clearData}
            showDinamicMap={()=> {
              setDireccion({description: ''}); 
              dispatch(handleSetStep(5.21))
            }}
          />
          <center>
            {(mapaUrl)?
            <img alt="MapaDireccionParticular" className={googleMap}  src={mapaUrl} />
            :null}
          </center>
        </div>

        <div className={comunClass.bottomElement}>
          <Button
            className={comunClass.buttonAchs}
            variant="contained"
            disabled={!valido}
            onClick={() => {
              dispatch(updateForm("direccionParticular", direccion.description))
              dispatch(updateForm("direccionParticularObj", direccion))
              dispatch(updateForm("comunaDireccionParticular", nombreComuna))
              creacionBP ? dispatch(handleSetStep(5.3)) : dispatch(handleSetStep(5.1));
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