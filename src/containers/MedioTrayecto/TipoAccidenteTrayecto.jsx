import React, { useState } from "react";
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
import Lugar from "../LugarSiniestroTrayecto/Lugar";
import { Button } from "@material-ui/core";

const TipoAccidenteTrayecto = () => {
  const {
    addmissionForm: { percentage, sucursalEmpresaSiniestro, urlMapasucursalEmpresaSiniestro, comunaSiniestro, DireccionEmpresa, comunaEmpresa, tipoAccidenteTrayectoForm, CamposDocumentos },
    microsoftReducer
  } = useSelector((state) => state, shallowEqual);
  
  const dispatch = useDispatch();

  const { data: tipoAccidenteTrayectoList } = useSelector((state) => state.tipoAccidenteTrayectoForm, shallowEqual);
  let tipoAccidente = !tipoAccidenteTrayectoForm ? "" : tipoAccidenteTrayectoForm

  const [sucursal, setSucursal] = useState(sucursalEmpresaSiniestro ? sucursalEmpresaSiniestro : "");
  const [mapaUrl, setMapaUrl] = useState(urlMapasucursalEmpresaSiniestro ? urlMapasucursalEmpresaSiniestro : "");
  const [nombreComuna,setNombreComuna]=useState(comunaSiniestro?comunaSiniestro:"");
  const [direccionValida, setDireccionValida] = useState(false)
      
  const clearData = () => {
      dispatch(updateForm("sucursalEmpresaSiniestro", ""))
      dispatch(updateForm("urlMapasucursalEmpresaSiniestro", ""))
  }

  const handleNext = () => {
    console.log("tipoAccTrayecto", tipoAccidente.key);
    // dispatch(updateForm("tipoAccTrayecto", tipoAccidente.key))
    // dispatch(updateForm("sucursalEmpresaSiniestro", sucursal))
    // dispatch(updateForm("urlMapasucursalEmpresaSiniestro", mapaUrl))
    // dispatch(updateForm("comunaSiniestro", nombreComuna))
    // dispatch(handleSetStep(6.02))
  }
  
  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal }/>
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          id={"TipoAccidenteTrayecto-BtnBack"}
          dispatch={() => dispatch(handleSetStep(5.1))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[comunClass.titleBlack, comunClass.textPrimaryDesk]}>
          Selecciona la opción que
          <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            &nbsp;describa la ruta del accidente de trayecto
          </Grid>          
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="relato" src={relato} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={spaceStyle.space2} />
      <div className={comunClass.boxDeskCardBtn}>
        <div className={comunClass.cardBtn}>
          {tipoAccidenteTrayectoList.length>0 && ( 
            <>
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
            </>
          )}
        </div>
        <div className={spaceStyle.space2} />
        <div className="row" style={{width: '70%', margin: 'auto', minWidth: '300px'}}>
          <div className="col-md-12">
            <Lugar     
              titulo={"Lugar de trabajo del día del accidente"}                                               
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
              sucursalEmpresaSiniestro={sucursalEmpresaSiniestro}
              clearData={clearData}
            />
          </div>
        </div>

        <div className="col-md-12">
          <div className={spaceStyle.space2} />
          <Button
            id={"TipoAccidenteTrayecto-BtnContinuar"}
            variant="contained"
            className={comunClass.buttonAchs}
            // disabled={!tipoAccidenteTrayectoForm || !direccionValida}
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
