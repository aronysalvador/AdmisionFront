import React from "react"
import { getComunStyle } from "../../css/comun"
import { useDispatch } from "react-redux"
import { handleSetStep } from "../../redux/actions/AdmissionAction"
import DireccionGeo from '../../components/share/DireccionGeo'
import { validarDireccionSN } from '../../helpers/utils'
import Grid from '@material-ui/core/Grid';

export default (props) => {

  const { sucursal, setSucursal, setMapaUrl, comunaEmpresa, setNombreComuna, setValido, DireccionEmpresa, sucursalEmpresaSiniestro, clearData, noFijarOption } = props 

  const dispatch = useDispatch();
  const comunClass = getComunStyle();

  React.useEffect(()=>{
    if(sucursal){
      validaDireccion(sucursal)      
    }else{
      setValido( false )
      setNombreComuna("")
    }
    // eslint-disable-next-line
  },[sucursal])
  
  const validaDireccion = async()=>{
    const resultado = await validarDireccionSN(sucursal)
    setNombreComuna(resultado.comuna)
    setValido(resultado.valida)
  }

  return (
    <div>
      <Grid
        className={comunClass.tituloTextBox}
        style={{marginBottom:'8px', textAlign: "left"}}
      >
        Dirección de trabajo
      </Grid> 
      <DireccionGeo
        id={"InfoAccidente-LblLugar"}
        comunStyle={getComunStyle()}
        direccion={sucursal} 
        setMapa={setMapaUrl} 
        setDireccion={setSucursal} 
        clearData={clearData}
        showDinamicMap={()=> {
          setSucursal({description: ''}); 
          dispatch(handleSetStep(12.4))
        }}
        direccionTemporal={!sucursalEmpresaSiniestro?`${DireccionEmpresa}, ${comunaEmpresa}`:""}
        small
        background={"#fff"}
        noFijarOption={noFijarOption}
      />
    </div> 
  )
}