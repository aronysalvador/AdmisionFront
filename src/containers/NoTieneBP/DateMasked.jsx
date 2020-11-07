import React from "react";
import { TextField } from "@material-ui/core";

export default function DateMasked({
  mask,
  fechaNacimiento,
  ...props
}) {
  return (
    <TextField
      value={fechaNacimiento}
      variant="outlined"
      size="small"
      margin="dense"
      required
      fullWidth
      inputProps={{ inputMode: 'numeric'}}
    />
  );
}
