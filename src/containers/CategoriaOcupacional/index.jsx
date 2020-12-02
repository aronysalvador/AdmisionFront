import React, { useEffect, useCallback } from "react";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";
import BotonSeleccionarCustom from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustom";
import BotonSeleccionarCustomItem from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustomItem";
import { getCategoriaOcupacionalPrincipal } from "./../../redux/actions/CategoriaOcupacionalAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";
import image from './../../img/relato.svg'

const CategoriaOcupacional = () => {
  const {
    addmissionForm: { percentage, categoriaOcupacionalForm }, microsoftReducer
  } = useSelector((state) => state, shallowEqual);

  const categoriaOcupacional = !categoriaOcupacionalForm ? "" : categoriaOcupacionalForm

  const dispatch = useDispatch();

  const spaceStyle = getSpaceStyle();
  const comunClass = getComunStyle();

  const initFn = useCallback(() => {
    dispatch(getCategoriaOcupacionalPrincipal(""));
  }, [dispatch]);

  useEffect(() => {
    initFn();
  }, [initFn]);

  const { data: categoriaList } = useSelector(
    (state) => state.categoriaOcupacionalForm,
    shallowEqual
  );

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal }/>
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(24))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[comunClass.titleBlack, comunClass.textPrimaryDesk]}>
          Selecciona la  
          <Grid component="span" className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            &nbsp;categoría ocupacional
          </Grid>         
          &nbsp;más adecuada
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="relato" src={image} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>

      <div className={comunClass.boxDeskCardBtn}>
        <div className={comunClass.displayMobile}> 
          <div className={spaceStyle.space2} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {categoriaList.map((categoria) => (
            <BotonSeleccionarCustom
              key={categoria.id}
              data={categoria}
              itemForm={"categoriaOcupacionalForm"}
              selected={categoria.id === categoriaOcupacional.id}
              step={26}
            >
              <BotonSeleccionarCustomItem {...categoria} />
            </BotonSeleccionarCustom>
          ))}
        </div>
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </div>
  );
};

export default CategoriaOcupacional;
