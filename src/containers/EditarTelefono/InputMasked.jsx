import IMask from "imask";
import React from "react";
import { IMaskInput } from "react-imask";
import { Button, Typography, TextField } from "@material-ui/core";
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

export default function InputMasked({ mask, input, ...props }) {
  return (
    <IMaskInput
      onComplete={() => alert("xxxx")}
      className="rs-input"
      mask={IMask.createMask(mask)}
      {...props}
      inputRef={(el) => (TextField = el)}
    />
  );
}
