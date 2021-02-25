import React from "react";
// import { TextField } from "@material-ui/core";
import MaskedInput from 'react-text-mask';

export default function DateMasked(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[ /[0-3]/, /\d/, '/', /\d/, /\d/, '/', /[1-2]/, /\d/, /\d/, /\d/ ]}
      placeholderChar={'\u2000'}
      showMask
    />
  );

  // return (
  //   <TextField
  //     value={fechaNacimiento}
  //     variant="outlined"
  //     size="small"
  //     margin="dense"
  //     required
  //     fullWidth
  //     inputProps={{ inputMode: 'numeric'}}
  //   />
  // );
}
