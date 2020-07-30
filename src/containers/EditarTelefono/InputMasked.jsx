import IMask from "imask";
import React, { useState } from "react";
import { Pipes } from "./phone";
import { TextField } from "@material-ui/core";
/**
 * Wrapper for IMaskInput
 *
 * using example:
 *  <InputMasked
 *      mask={ PhoneMask }
 *      radix="."
 *      value="123"
 *      unmask={ true } // true|false|'typed'
 *      inputRef={ el => this.input = el }  // access to nested input
 *      // DO NOT USE onChange TO HANDLE CHANGES!
 *      // USE onAccept INSTEAD
 *      onAccept={
 *          // depending on prop above first argument is
 *          // `value` if `unmask=false`,
 *          // `unmaskedValue` if `unmask=true`,
 *          // `typedValue` if `unmask='typed'`
 *          (value, mask) => console.log(value)
 *      }
 *      // ...and more mask props in a guide
 *
 *      // input props also available
 *      placeholder='Enter phone number here'
 *  />
 *
 * @see https://www.npmjs.com/package/react-imask
 * @param {any} props component props.
 *
 * @returns {JSX} masked input.
 */
export default function InputMasked({ mask, setTelefonoIsValid, ...props }) {
  const [state, setState] = useState("+56 9");

  const handleOnChange = (e) => {
    const value = e.target.value;
    if (value !== state) {
      const result = Pipes.advanced(value);
      const isValid = /^\+?56\d{9}$/.test(result.replace(/\s/g, ""));
      setState(result);
      setTelefonoIsValid(isValid);
    }
  };
  return (
    <TextField
      value={state}
      variant="outlined"
      size="small"
      margin="dense"
      required
      fullWidth
      helperText={"Ingresa tu numero personal"}
      onChange={(e) => handleOnChange(e)}
    />
  );
}
