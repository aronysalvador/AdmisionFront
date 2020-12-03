import React from "react";
import { TextField } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";
import { IconButton } from "material-ui";
import ClearIcon from "@material-ui/icons/Clear";

export default function InputMasked({
  mask,
  setTelefonoIsValid,
  setTelefono,
  handleOnChange,
  telefono,
  disabled,
  step,
  ...props
}) {
  return (
    <TextField
      value={disabled ? "" : telefono}
      variant="outlined"
      size="small"
      margin="dense"
      required
      fullWidth
      helperText={disabled ? "" : "Ingresa 9 dígitos"}
      onChange={(e) => handleOnChange(e)}
      InputProps={  step ===14 ?  { 
        inputMode: 'numeric',
         endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => { setTelefono("") }}>
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        )
      } : {inputMode: 'numeric'}
    }
      disabled={disabled}
    />
  );
}
