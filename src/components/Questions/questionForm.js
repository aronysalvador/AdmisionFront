import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";

const FormQuestion = (props) => {
  const { titulo, pregunta, placeholder, accion, valueFromState } = props;

  //const [localValue, setLocalValue] = useState("")
  const [localValue, setLocalValue] = useState(() => {
    return !valueFromState ? "" : valueFromState;
  });

  const onChangeHandler = (event) => {
    setLocalValue(event.target.value);
  };
  const classesComun = getComunStyle();
  const spaceStyle = getSpaceStyle();
  const isDisabled = () => {
    return localValue.length < 5;
  };

  return (
    <form onSubmit={() => accion(localValue)}>
      <div>
        <Typography
          variant="h1"
          component="h1"
          className={classesComun.pregunta}
        >
          {titulo}
        </Typography>
      </div>

      <div className={spaceStyle.space2}></div>
      <div>
        <Typography
          variant="h2"
          component="h2"
          className={classesComun.pregunta}
        >
          {pregunta}
        </Typography>
      </div>
      <div>
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
      <label className={classesComun.pullRight}>{localValue.length}/200</label>
      <div className={classesComun.bottomElement}>
        <Button
          className={classesComun.buttonAchs}
          variant="contained"
          type="submit"
          disabled={isDisabled()}
        >
          Continuar
        </Button>
      </div>
    </form>
  );
};

export default FormQuestion;
