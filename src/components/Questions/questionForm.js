import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import { Format } from "../../helpers/strings";
import image from './../../img/relato.svg'

const FormQuestion = (props) => {
  const { titulo, titulo2, pregunta, pregunta2, placeholder, accion, valueFromState } = props;

  // const [localValue, setLocalValue] = useState("")
  const [ localValue, setLocalValue ] = useState(() => {
    return !valueFromState ? "" : valueFromState;
  });

  const onChangeHandler = (event) => {
    setLocalValue(Format.caracteresInvalidos(event.target.value));
  };
  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();
  const isDisabled = () => {
    return localValue.length < 5;
  };

  return (
    <form onSubmit={() => accion(localValue)}>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid
          className={[ comunClass.titleBlue, comunClass.titleBlue2, comunClass.textPrimaryDesk ]}
        >
          {titulo}
          <Grid component='span' className={[ comunClass.titleBlack, comunClass.titleBlack2 ]}>
            &nbsp;{titulo2}
          </Grid>
          <Grid component='span' className={[ comunClass.titleBlue, comunClass.titleBlue2 ]}>
            &nbsp;{pregunta}
          </Grid>
          <Grid component='span' className={[ comunClass.titleBlack, comunClass.titleBlack2 ]}>
            &nbsp;{pregunta2}
          </Grid>
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component='span' className={comunClass.imgPrimaryDesk}>
            <img alt='relato' src={image} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.displayMobile}>
        <div className={spaceStyle.space2} />
      </div>
      <div className={comunClass.boxDesk} style={{textAlign: 'right'}}>
        <div>
          <TextField
            id='txtRespuesta'
            placeholder={placeholder}
            label=''
            value={localValue}
            margin='dense'
            variant='outlined'
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
            variant='contained'
            type='submit'
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
