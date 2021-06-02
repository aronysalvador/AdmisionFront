import { useState } from "react";
import { getComunStyle } from "../../css/comun";
import { Button, Typography, TextField } from "@material-ui/core";
import Cabecera from "../../components/cabecera/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";
import AutoComplete from "@material-ui/lab/Autocomplete";
import relato from './../../img/relato.svg';
import { Format } from "../../helpers/strings";

const MedioTransporteTrayecto = () => {
  let {
    addmissionForm: { percentage, CamposDocumentos }
  } = useSelector((state) => state, shallowEqual);

  const [ medioTransporte, setMedioTransporte ] = useState(() => {
    return !CamposDocumentos.MedioTransp ? "" : CamposDocumentos.MedioTransp;
  });

  const { microsoftReducer } = useSelector((state) => state, shallowEqual);
  const dispatch = useDispatch();

  const { data: sugerenciasMedios } = useSelector(
    (state) => state.mediosTransporteForm,
    shallowEqual
  );

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          id={"MedioTransporteTrayecto-BtnBack"}
          dispatch={() => dispatch(handleSetStep(6.01))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[ comunClass.titleBlack, comunClass.textPrimaryDesk ].join(' ')}>
        Indica
          <Grid component='span' className={[ comunClass.titleBlue, comunClass.titleBlue2 ].join(' ')}>
            &nbsp;el medio de transporte
          </Grid>
          &nbsp;que utilizaba al momento del accidente
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
          <Typography className={comunClass.tituloTextBox}>
            Medio de transporte
          </Typography>
          <AutoComplete
            id={"MedioTransporteTrayecto-Lbl1"}
            inputValue={medioTransporte}
            onInputChange={(event, value) => {
              let texto = Format.caracteresInvalidos(value);
              event&&setMedioTransporte(texto);
            }}
            freeSolo
            options={sugerenciasMedios}
            getOptionLabel={(option) => option.nombre }
            renderInput={(params) => (
              <TextField
                {...params}
                variant='outlined'
                InputProps={{
                  ...params.InputProps,
                  style: {
                    paddingTop: "3px",
                    paddingBottom: "3px",
                    paddingLeft: "5xp",
                    marginTop: "7px"
                  }
                }}
              />
            )}
          />
        </div>
        <div className={comunClass.bottomElement}>
          <Button
            id={"MedioTransporteTrayecto-Btn1"}
            disabled={medioTransporte?.length < 3}
            className={comunClass.buttonAchs}
            variant='contained'
            onClick={() => {
              dispatch(updateForm("CamposDocumentos", {...CamposDocumentos, MedioTransp: medioTransporte}));
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
