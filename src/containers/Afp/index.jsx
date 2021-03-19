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

const Afp = () => {
  const {
    addmissionForm: { percentage, afpForm }, microsoftReducer
  } = useSelector((state) => state, shallowEqual);

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const [ afp, setAFP ] = useState(() => {
    return !afpForm ? "" : afpForm;
  });
  const { data: afpList } = useSelector((state) => state.afpForm, shallowEqual);
  const dispatch = useDispatch();

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(18.1))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[ comunClass.titleBlack, comunClass.titleBlack2, comunClass.textPrimaryDesk ].join(' ')}>
          Escribe la
          <Grid component='span' className={[ comunClass.titleBlue, comunClass.titleBlue2 ].join(' ')}>
            &nbsp;AFP o Previsión Social
          </Grid>
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
            AFP
          </Typography>
          <AutoComplete
            value={afp}
            onChange={(event, value) => {
              setAFP(value);
            }}
            // style={{ width: 300 }}
            options={afpList}
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
            disabled={!afp}
            onClick={() => {
              dispatch(updateForm("afpForm", afp));
              dispatch(handleSetStep(19));
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

export default Afp;
