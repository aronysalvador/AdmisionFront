import React, { useState, useEffect, useCallback } from "react";
import { getComunStyle } from "../../css/comun";
import { Button, Typography, TextField, } from "@material-ui/core";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";
import AutoComplete from "@material-ui/lab/Autocomplete";
import { getMediosTransporteTrayecto } from "../../redux/actions/TrayectoAction";
import relato from './../../img/relato.svg';

const MedioTransporteTrayecto = () => {
  let {
    addmissionForm: { percentage,  CamposDocumentos  },
  } = useSelector((state) => state, shallowEqual);

  const [medioTransporte, setMedioTransporte] = useState(() => {
    return !CamposDocumentos.medioTransporte ? "" : CamposDocumentos.medioTransporte;
  });

  const { microsoftReducer } = useSelector((state) => state, shallowEqual);
  const dispatch = useDispatch();

  const initFn = useCallback(() => {
    dispatch(getMediosTransporteTrayecto());
  }, [dispatch]);

  useEffect(() => {
    initFn();
  }, [initFn]);

  const { data: sugerenciasMedios } = useSelector(
    (state) => state.mediosTransporteForm,
    shallowEqual
  );
console.log(sugerenciasMedios);

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  console.log(sugerenciasMedios)

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal }/>
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(6.01))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[comunClass.titleBlack, comunClass.textPrimaryDesk]}>
        Indica  
          <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            &nbsp;el medio de transporte
          </Grid>        
          &nbsp;que utilizaba al momento del accidente
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="relato" src={relato} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.displayMobile}>
          <div className={spaceStyle.space2} />
        </div>
        <div className={comunClass.containerTextBox}>
          <Typography className={comunClass.tituloTextBox}>
            Medio de transporte
          </Typography>
          <AutoComplete
            inputValue={medioTransporte}
            onInputChange={(event, value) => {
              event&&setMedioTransporte(value);
              
            }}
            freeSolo
            options={sugerenciasMedios}
           
            getOptionLabel={(option) =>  option.nombre }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                InputProps={{
                  ...params.InputProps,
                  style: {
                    paddingTop: "3px",
                    paddingBottom: "3px",
                    paddingLeft: "5xp",
                    marginTop: "7px",
                  },
                }}
              />
            )}
          />
        </div>
        <div className={comunClass.bottomElement}>
          <Button
            disabled={!medioTransporte}
            className={comunClass.buttonAchs}
            variant="contained"
            onClick={() => {
              dispatch(updateForm("CamposDocumentos", {medioTransporte}));
              dispatch(handleSetStep(6.03));
            }}
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

export default MedioTransporteTrayecto;
