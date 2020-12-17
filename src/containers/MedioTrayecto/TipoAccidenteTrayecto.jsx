import React from "react";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";
import BotonSeleccionarCustomSingle from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustomSingle";
import BotonSeleccionarCustomItemTipoAccidenteTrayecto from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustomItemTipoAccidenteTrayecto";
import { getSpaceStyle } from "../../css/spaceStyle";
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";
import relato from './../../img/relato.svg';

const TipoAccidenteTrayecto = () => {
  const {
    addmissionForm: { percentage, tipoAccidenteTrayectoForm, CamposDocumentos },
    microsoftReducer
  } = useSelector((state) => state, shallowEqual);
  
  
  const dispatch = useDispatch();

  const { data: tipoAccidenteTrayectoList } = useSelector((state) => state.tipoAccidenteTrayectoForm, shallowEqual);

  let tipoAccidente = !tipoAccidenteTrayectoForm ? "" : tipoAccidenteTrayectoForm
  
  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal }/>
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(5.7))}
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
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </div>
  );
};

export default TipoAccidenteTrayecto;
