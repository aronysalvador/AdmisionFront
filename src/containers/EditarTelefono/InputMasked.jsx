import React from "react";
import { TextField } from "@material-ui/core";

export default function InputMasked({
  mask,
  setTelefonoIsValid,
  setTelefono,
  handleOnChange,
  telefono,
  disabled,
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
      inputProps={{ inputMode: 'numeric'}}
      disabled={disabled}
    />
  );
}
