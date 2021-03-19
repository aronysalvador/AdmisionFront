import { useState } from "react";
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
import image from './../../img/relato.svg'

const Profesion = () => {
  const {
    addmissionForm: { percentage, profesionForm }, microsoftReducer
  } = useSelector((state) => state, shallowEqual);

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const [ profesion, setProfesion ] = useState(() => {
    return !profesionForm ? "" : profesionForm;
  });

  const dispatch = useDispatch();

  const { data: profesionList } = useSelector(
    (state) => state.profesionForm,
    shallowEqual
  );

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(19.2))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[ comunClass.titleBlack, comunClass.textPrimaryDesk ].join(' ')}>
          Selecciona la
          <Grid component='span' className={[ comunClass.titleBlue, comunClass.titleBlue2 ].join(' ')}>
            &nbsp;profesión u oficio
          </Grid>
          &nbsp;que mejor se ajusta al paciente
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component='span' className={comunClass.imgPrimaryDesk}>
            <img alt='relato' src={image} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>

      <div className={comunClass.boxDesk}>
        <div className={comunClass.displayMobile}>
          <div className={spaceStyle.space2} />
        </div>
        <div className={comunClass.containerTextBox}>
          <Typography className={comunClass.tituloTextBox}>
            Profesión u oficio
          </Typography>
          <AutoComplete
            value={profesion}
            onChange={(event, value) => {
              setProfesion(value);
            }}
            // style={{ width: 300 }}
            options={profesionList}
            getOptionLabel={(option) => option.nombre}
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
            variant='contained'
            className={comunClass.buttonAchs}
            disabled={!profesion}
            onClick={() => {
              dispatch(updateForm("profesionForm", profesion));
              dispatch(handleSetStep(20));
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

export default Profesion;
