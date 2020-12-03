import React, { useState, useEffect, useCallback } from "react";
import { getComunStyle } from "../../css/comun";
import { Button, Typography, TextField } from "@material-ui/core";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";
// import { Format } from "../../helpers/strings";
import relato from './../../img/relato.svg';
import AutoComplete from "@material-ui/lab/Autocomplete";
import {getPartesCuerpo} from "../../redux/actions/ParteCuerpoAction";

const ParteCuerpoAfectada = () => {
  let {
    addmissionForm: { percentage, CamposDocumentos },
  } = useSelector((state) => state, shallowEqual);

  const [parteAfectada, setParteAfectada] = useState(() => {
    return !CamposDocumentos.parteAfectada ? "" : CamposDocumentos.parteAfectada;
  });

  // const [parteAfectadaValid, setParteAfectadaValid] = useState(true);

  const [otrasCircunstancias, setOtrasCircunstancias] = useState(() => {
    return !CamposDocumentos.otrasCircunstancias ? "" : CamposDocumentos.otrasCircunstancias;
  });
  
  const { microsoftReducer } = useSelector((state) => state, shallowEqual);
  const dispatch = useDispatch();

  const initFn = useCallback(() => {
    dispatch(getPartesCuerpo());
  }, [dispatch]);

  useEffect(() => {
    initFn();
  }, [initFn]);

  const { data: sugerenciasParteCuerpo } = useSelector(
    (state) => state.parteCuerpoAfectadaForm, shallowEqual );

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal }/>
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(8.1))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[comunClass.titleBlack, comunClass.textPrimaryDesk]}>
          Ahora, completa la información adicional del accidente 
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
            Ingresa la parte del cuerpo lesionada
          </Typography>
          <AutoComplete
            inputValue={parteAfectada}
            onInputChange={(event, value) => {
              event&&setParteAfectada(value);
            }}
            freeSolo
            options={sugerenciasParteCuerpo}
            getOptionLabel={(option) =>  option.nombre }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                InputProps={{
                  ...params.InputProps,
                  style: {
                    paddingTop: 0,
                    paddingBottom: "1px",
                    paddingLeft: "5xp",
                    marginTop: "7px",
                    height: "50px"
                  },
                }}
                inputProps={{ maxLength: 100 }}
              />
            )}
          /> 

          <div className={spaceStyle.space2} />

          <Typography className={comunClass.tituloTextBox}>
            Ingresa la información adicional al relato
          </Typography>
          <TextField
            value={otrasCircunstancias}
            margin="dense"
            variant="outlined"
            fullWidth
            rows={4}
            multiline
            inputProps={{ maxLength: 200 }}
            onChange={(e) => { setOtrasCircunstancias(e.target.value);
              // let texto = Format.caracteresInvalidos(e.target.value);
              // setOtrasCircunstancias(texto);
            }}
          />
        <label className={comunClass.pullRight}>{otrasCircunstancias.length}/200</label>
          
        </div>
        <div className={comunClass.bottomElement}>
          <Button
            disabled={(parteAfectada?.length < 3)}
            className={comunClass.buttonAchs}
            variant="contained"
            onClick={() => {
              dispatch(updateForm("CamposDocumentos", {...CamposDocumentos, parteAfectada, otrasCircunstancias}));
              dispatch(handleSetStep(10));
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

export default ParteCuerpoAfectada;
