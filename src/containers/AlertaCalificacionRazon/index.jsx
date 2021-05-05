import { useEffect, useState } from "react";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";
import BotonSeleccionarRadioCustom from "../../components/BotonSeleccionarCustom/BotonSeleccionarRadioCustom";
import BotonSeleccionarCustomItemAlerta from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustomItemAlerta";
import { getSpaceStyle } from "../../css/spaceStyle";
import { Button } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";
import image from './../../img/relato.svg'

const AlertaCalificacionRazon = () => {
  const {
    addmissionForm: { percentage, razonAlertaForm, tipoSiniestro }
  } = useSelector((state) => state, shallowEqual);
  const { microsoftReducer } = useSelector((state) => state, shallowEqual);

  const { data: razonAlertaList } = useSelector(
    (state) => state.razonAlertaForm,
    shallowEqual
  );

  const razon = !razonAlertaForm ? "" : razonAlertaForm
  const dispatch = useDispatch();

  const [ listado, setListado ] = useState([])
  const [ btnSelect, setBtnSelect ] = useState(!razonAlertaForm || razonAlertaForm.glosa ==="Posible causa no laboral" && true)

  const handlerGuradarSucursalTexto = (isSelected) => {
    setBtnSelect(isSelected)
  };

  useEffect(() => {
    if (razonAlertaList.length>0)
      FilterbySinister()
    // eslint-disable-next-line
  }, [razonAlertaList]);

  const FilterbySinister = () => {
    let response = []
    switch (tipoSiniestro.Id){
      // Caso Acciddente de Trabajo
      case 1:
        response = razonAlertaList
        break;
      // Caso Accidente de Trayecto
      case 2:
        response = razonAlertaList.slice(1, razonAlertaList.length)
        break;
      // Caso Enfermedad Profesional
      case 3:
        response = razonAlertaList.filter((value, i) => [ 1, 2, 5 ].includes(i))
        break;
      default:
        response = razonAlertaList
        break;
    }
    setListado(response)
  }
  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          id='AlertaCalificacionRazon-BtnBack'
          dispatch={() => dispatch(handleSetStep(26.1))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[ comunClass.titleBlack, comunClass.textPrimaryDesk ].join(' ')}>
          Selecciona
          <Grid component='span' className={[ comunClass.titleBlue, comunClass.titleBlue2 ].join(' ')}>
            &nbsp;la razón de la alerta
          </Grid>
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component='span' className={comunClass.imgPrimaryDesk}>
            <img alt='relato' src={image} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDeskCardBtn2}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          {listado && listado.map((razonAlerta, i) => (
            <BotonSeleccionarRadioCustom
              id={"AlertaCalificacionRazon"+i}
              key={"key"+i}
              data={razonAlerta}
              itemForm={"razonAlertaForm"}
              selected={razonAlerta.glosa === razon.glosa}
              handlerGuardarData={handlerGuradarSucursalTexto}
              listado={listado.length}
            >
              <BotonSeleccionarCustomItemAlerta {...razonAlerta} />
            </BotonSeleccionarRadioCustom>
          ))}
        </div>
        <div className={spaceStyle.space1} />
        <Button
          id='CrearCaso'
          variant='contained'
          className={comunClass.buttonAchs}
          disabled={btnSelect}
          onClick={() => dispatch(handleSetStep(26.4)) }
        >
          Listo, crear caso
        </Button>
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </div>
  );
};

export default AlertaCalificacionRazon;
