import { useState, useEffect } from "react";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";
import BotonSeleccionarCustomSingle from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustomSingle";
import BotonSeleccionarCustomItemTipoAccidenteTrayecto from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustomItemTipoAccidenteTrayecto";
import { getSpaceStyle } from "../../css/spaceStyle";
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";
import relato from './../../img/relato.svg';
import LugarTrabajo from "../LugarSiniestroTrayecto/LugarTrabajo";
import { Button } from "@material-ui/core";

const TipoAccidenteTrayecto = () => {
  const {
    addmissionForm: { percentage, sucursalEmpresaSiniestro, DireccionEmpresa, comunaEmpresa, CamposDocumentos, comunaTrabajoTrayecto, sucursalTrabajoTrayecto, urlMapaTrabajoTrayecto, tipoAccidenteTrayectoForm},
    microsoftReducer
  } = useSelector((state) => state, shallowEqual);

  const dispatch = useDispatch();

  const { data: tipoAccidenteTrayectoList } = useSelector((state) => state.tipoAccidenteTrayectoForm, shallowEqual);
  let tipoAccidente = !tipoAccidenteTrayectoForm ? "" : tipoAccidenteTrayectoForm

  const [ sucursal, setSucursal ] = useState(sucursalTrabajoTrayecto ? sucursalTrabajoTrayecto : "");
  const [ mapaUrl, setMapaUrl ] = useState(urlMapaTrabajoTrayecto ? urlMapaTrabajoTrayecto : "");
  const [ nombreComuna, setNombreComuna ]=useState(comunaTrabajoTrayecto?comunaTrabajoTrayecto:"");
  const [ direccionValida, setDireccionValida ] = useState(false)

  const clearData = () => {
      dispatch(updateForm("sucursalEmpresaSiniestro", ""))
      dispatch(updateForm("urlMapasucursalEmpresaSiniestro", ""))
      dispatch(updateForm("sucursalTrabajoTrayecto", ""))
      dispatch(updateForm("urlMapaTrabajoTrayecto", ""))
  }

  const handleNext = () => {
    dispatch(updateForm("tipoAccTrayecto", tipoAccidente.key))
    dispatch(updateForm("sucursalTrabajoTrayecto", sucursal))
    dispatch(updateForm("urlMapaTrabajoTrayecto", mapaUrl))
    dispatch(updateForm("comunaTrabajoTrayecto", nombreComuna))
    dispatch(handleSetStep(6.02))
  }

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const [ activo, setActivo ] = useState(false)

  useEffect(() => {
    if (direccionValida && tipoAccidenteTrayectoForm)
      setActivo(false)
    else
      setActivo(true)

      // console.log(direccionValida)
      // console.log(tipoAccidenteTrayectoForm)
  }, [ direccionValida, tipoAccidenteTrayectoForm ])

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          id={"TipoAccidenteTrayecto-BtnBack"}
          dispatch={() => dispatch(handleSetStep(5.7))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[ comunClass.titleBlack, comunClass.textPrimaryDesk ].join(' ')}>
          Selecciona la opción que
          <Grid component='span' className={[ comunClass.titleBlue, comunClass.titleBlue2 ].join(' ')}>
            &nbsp;describa la ruta del accidente de trayecto
          </Grid>
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component='span' className={comunClass.imgPrimaryDesk}>
            <img alt='relato' src={relato} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={spaceStyle.space2} />
      <div className={comunClass.boxDeskCardBtn}>
        <div className={comunClass.cardBtn}>
          {tipoAccidenteTrayectoList.length>0 && (
            <div>
              {tipoAccidenteTrayectoList && tipoAccidenteTrayectoList.map((tipo) => (

                <BotonSeleccionarCustomSingle
                  id={"TipoAccidenteTrayecto-Btn"+tipo.key}
                  key={tipo.key}
                  data={tipo}
                  itemForm={"tipoAccidenteTrayectoForm"}
                  selected={tipo.key === tipoAccidente.key}
                  CamposDocumentos={CamposDocumentos}
                >
                  <BotonSeleccionarCustomItemTipoAccidenteTrayecto {...tipo} />
                </BotonSeleccionarCustomSingle>
              ))}
            </div>
          )}
        </div>
        <div className={spaceStyle.space2} />
        <div className='row' style={{margin: 'auto'}}>
          <div className='col-md-12'>
            <LugarTrabajo
              titulo={
                <Grid className={comunClass.textPrimaryDesk2}>
                  <Grid className={comunClass.titleBlue}>
                    Confirma
                  </Grid>
                  <Grid component='span' className={comunClass.subtitleBlack}>
                    &nbsp;o
                  </Grid>
                  <Grid className={comunClass.titleBlue}>
                    &nbsp;edita
                  </Grid>
                  <Grid component='span' className={comunClass.subtitleBlack}>
                    &nbsp;la dirección del lugar de trabajo del día del accidente
                  </Grid>
                </Grid>
              }
              sucursal={sucursal}
              setSucursal={setSucursal}
              mapaUrl={mapaUrl}
              setMapaUrl={setMapaUrl}
              nombreComuna={nombreComuna}
              setNombreComuna={setNombreComuna}
              valido={direccionValida}
              setValido={setDireccionValida}
              DireccionEmpresa={DireccionEmpresa}
              comunaEmpresa={comunaEmpresa}
              sucursalEmpresaSiniestro={sucursalTrabajoTrayecto ? sucursalTrabajoTrayecto :sucursalEmpresaSiniestro}
              clearData={clearData}
              tipoSiniestro={1}
              noFijarOption
            />
          </div>
        </div>

        <div className='col-md-12'>
          <div className={spaceStyle.space2} />
          <Button
            id={"TipoAccidenteTrayecto-BtnContinuar"}
            variant='contained'
            className={comunClass.buttonAchs}
            disabled={activo}
            onClick={() => handleNext() }
          >
            Continuar
          </Button>
        </div>
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </div>
  );
};

export default TipoAccidenteTrayecto;
