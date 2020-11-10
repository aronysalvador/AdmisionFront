import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import AutoComplete from "@material-ui/lab/Autocomplete";
import { Button, Typography } from "@material-ui/core";
import { getComunStyle } from "../../css/comun";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getSpaceStyle } from "../../css/spaceStyle";
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";

const CausaNoLaboral = () => {
  const {
    addmissionForm: { percentage, razonAlertaForm }, microsoftReducer
  } = useSelector((state) => state, shallowEqual);

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const [causas, setCausas] = useState(() => {
    return !razonAlertaForm ? "" : razonAlertaForm;
  });

  const dispatch = useDispatch();

  const { opciones: causasList } = useSelector(
    (state) => state.razonAlertaForm.data[0],
    shallowEqual
  );

  const [fixedCausasList, setFixedCausasList] = useState(causasList);

  useEffect(() => {
    setFixedCausasList(
      causasList.map(causa => {
        causa.glosa = causa.glosa.replace("prestación", "presentación");
        return causa
      })
    )
  }, [causasList])

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal }/>
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(26.2))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[comunClass.titleBlack, comunClass.textPrimaryDesk]}>
          Selecciona la razón de
          <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            &nbsp;posible causa no laboral
          </Grid>                  
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="relato" src="static/relato.svg" className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.displayMobile}>
          <div className={spaceStyle.space2} />
        </div>
        <div className={comunClass.containerTextBox}>
          <Typography className={comunClass.tituloTextBox} >
            Selecciona
          </Typography>
          <AutoComplete
            value={causas}
            onChange={(event, value) => {
              setCausas(value);
            }}
            options={fixedCausasList}
            getOptionLabel={(option) => option.glosa}
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
            variant="contained"
            className={comunClass.buttonAchs}
            disabled={!causas}
            onClick={() => {
              dispatch(updateForm("razonAlertaForm", {...razonAlertaForm, causasID:causas.id,causasGlosa:causas.glosa}));
              dispatch(handleSetStep(26.4));
            }}
          >
            Confirmar Alerta
          </Button>
        </div>
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </div>
  );
};

export default CausaNoLaboral;
