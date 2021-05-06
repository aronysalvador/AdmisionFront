import { useEffect } from "react";
import { getComunStyle } from "../../css/comun"
// import { useDispatch } from "react-redux"
// import { handleSetStep } from "../../redux/actions/AdmissionAction"
import DireccionGeo from '../../components/share/DireccionGeo'
import { validarDireccionSN } from '../../helpers/utils'

export default (props) => {
  const { titulo, sucursal, setSucursal, setMapaUrl, comunaEmpresa, setNombreComuna, setValido, DireccionEmpresa, sucursalEmpresaSiniestro, clearData, noFijarOption, tipoSiniestro } = props

  // const dispatch = useDispatch();

  useEffect(() => {
    if (sucursal.description){
      validaDireccion(sucursal)
      setValido(true)
    } else {
      setValido(false)
      setNombreComuna("")
    }
    // eslint-disable-next-line
  },[sucursal])

  const validaDireccion = async() => {
    const resultado = await validarDireccionSN(sucursal)
    setNombreComuna(resultado.comuna?resultado.comuna:"")
    // setValido(resultado.valida)
  }

  return (
    <div>
       {titulo}
      <DireccionGeo
        id={"InfoAccidente-LblLugar"}
        comunStyle={getComunStyle()}
        direccion={sucursal}
        setMapa={setMapaUrl}
        setDireccion={setSucursal}
        clearData={clearData}
        showDinamicMap={() => {
       return
        }}
        direccionTemporal={(!sucursalEmpresaSiniestro && tipoSiniestro===1)?`${DireccionEmpresa}, ${comunaEmpresa}`:""}
        small
        background={"#fff"}
        noFijarOption={noFijarOption}
        showInputValue
      />
    </div>
  )
}