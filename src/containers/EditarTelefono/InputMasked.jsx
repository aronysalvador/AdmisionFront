import React from "react";
import { TextField } from "@material-ui/core";

export default function InputMasked({
  mask,
  setTelefonoIsValid,
  setTelefono,
  handleOnChange,
  telefono,
  ...props
}) {
  return (
    <TextField
      value={telefono}
      variant="outlined"
      size="small"
      margin="dense"
      required
      fullWidth
      helperText={"Ingresa tu numero personal"}
      onChange={(e) => handleOnChange(e)}
      inputProps={{ inputMode: 'numeric'}}
    />
  );
}
