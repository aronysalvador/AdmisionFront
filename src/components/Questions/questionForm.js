import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";

const FormQuestion = (props) => {
  const { titulo, titulo2, pregunta, pregunta2, placeholder, accion, valueFromState } = props;

  //const [localValue, setLocalValue] = useState("")
  const [localValue, setLocalValue] = useState(() => {
    return !valueFromState ? "" : valueFromState;
  });

  const onChangeHandler = (event) => {
    setLocalValue(event.target.value);
  };
  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();
  const isDisabled = () => {
    return localValue.length < 5;
  };

  return (
    <form onSubmit={() => accion(localValue)}>
      <div className={comunClass.titlePrimaryDesk}>
        <Typography
          variant="h1"
          component="h1"
          className={[comunClass.titleBlue, comunClass.titleBlue2, comunClass.textPrimaryDesk]}
        >
          {titulo}
          <Grid component="span"  className={[comunClass.titleBlack, comunClass.titleBlack2]}>
            &nbsp;{titulo2}
          </Grid> 
          <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            &nbsp;{pregunta}
          </Grid>
          <Grid component="span"  className={[comunClass.titleBlack, comunClass.titleBlack2]}>
            &nbsp;{pregunta2}
          </Grid>
        </Typography>
        <div className={comunClass.displayDeskImg}>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="identify" src="static/relato.svg" className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.displayMobile}>
        <div className={spaceStyle.space2}></div>
      </div>
      {/* <div>
        <Typography
          variant="h2"
          component="h2"
          className={[comunClass.titleBlack, comunClass.titleBlack2]}
        >
          {pregunta}
        </Typography>
      </div> */}
      <div className={comunClass.boxDesk} style={{textAlign: 'right'}}>
        <div>
        {/* className={comunClass.scrollText} */}
          <TextField
            id="txtRespuesta"
            placeholder={placeholder}
            label=""
            value={localValue}
            margin="dense"
            variant="outlined"
            fullWidth
            rows={5}
            multiline
            inputProps={{ maxLength: 200 }}
            onChange={onChangeHandler}
          />
        </div>
        <label className={comunClass.pullRight}>{localValue.length}/200</label>
        <div className={comunClass.bottomElement}>
          <Button
            className={comunClass.buttonAchs}
            variant="contained"
            type="submit"
            disabled={isDisabled()}
          >
            Continuar
          </Button>
        </div>
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </form>
  );
};

export default FormQuestion;
