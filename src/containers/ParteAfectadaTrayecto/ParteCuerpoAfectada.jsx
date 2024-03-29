import { useState } from "react";
import { getComunStyle } from "../../css/comun";
import { Button, TextField } from "@material-ui/core";
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

const ParteCuerpoAfectada = () => {
  let {
    addmissionForm: { percentage, CamposDocumentos }
  } = useSelector((state) => state, shallowEqual);

  const [ parteAfectada, setParteAfectada ] = useState(() => {
    return !CamposDocumentos.ParteAfecta ? "" : CamposDocumentos.ParteAfecta;
  });

  // const [parteAfectadaValid, setParteAfectadaValid] = useState(true);

  const [ otrasCircunstancias, setOtrasCircunstancias ] = useState(() => {
    return !CamposDocumentos.Otras ? "" : CamposDocumentos.Otras;
  });

  const { microsoftReducer } = useSelector((state) => state, shallowEqual);
  const dispatch = useDispatch();

  const { data: sugerenciasParteCuerpo } = useSelector(
    (state) => state.parteCuerpoAfectadaForm, shallowEqual);

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          id={"ParteCuerpoAfectada-BtnBack"}
          dispatch={() => dispatch(handleSetStep(8.1))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[ comunClass.titleBlack, comunClass.textPrimaryDesk ].join(' ')}>
          Ahora, completa la información adicional del accidente
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component='span' className={comunClass.imgPrimaryDesk}>
            <img alt='relato' src={relato} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.displayMobile}>
          <div className={spaceStyle.space2} />
        </div>
        <div className={comunClass.containerTextBox}>
          <Grid className={comunClass.tituloTextBox} style={{marginBottom: '10px'}}>
            Ingresa la parte del cuerpo lesionada
          </Grid>
          <AutoComplete
            id={"ParteCuerpoAfectada-Lbl1"}
            inputValue={parteAfectada}
            freeSolo
            size='small'
            options={sugerenciasParteCuerpo}
            onInputChange={(event, value) => {
              event&&setParteAfectada(value);
            }}
            getOptionLabel={(option) => option.nombre }
            renderInput={(params) => (
              <TextField
                {...params}
                variant='outlined'
                size='small'
                inputProps={{
                  ...params.inputProps,
                  maxLength: 100
                  // style: { marginTop: "7px" },
                }}
              />
            )}
          />

          <div className={spaceStyle.space2} />

          <Grid className={comunClass.tituloTextBox}>
            Ingresa la información adicional al relato
          </Grid>
          <TextField
            id={"ParteCuerpoAfectada-Lbl2"}
            value={otrasCircunstancias}
            margin='dense'
            variant='outlined'
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
            id={"ParteCuerpoAfectada-Btn1"}
            disabled={parteAfectada?.length < 3}
            className={comunClass.buttonAchs}
            variant='contained'
            onClick={() => {
              dispatch(updateForm("CamposDocumentos", {...CamposDocumentos, ParteAfecta: parteAfectada, Otras: otrasCircunstancias}));
              // dispatch(handleSetStep(10));
              dispatch(handleSetStep(10.1));
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
