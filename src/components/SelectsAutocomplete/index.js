import React from 'react'import { getComunStyle } from "../../css/comun";
import AutoComplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";

export default (props) => {
    const comunClass = getComunStyle();

    const { first, txt1, txt2, data, setData, listado, options, id } = props

    const NoPaddingAutocomplete = withStyles({
        inputRoot: {
          '&&[class*="MuiOutlinedInput-root"] $input': {
            padding: "5.5px 2px"
          },
          '&& .MuiOutlinedInput-notchedOutline': {
            top: "-2px"
          }
        },
        input: {}
      })(AutoComplete);

    return (
        <div>
            <div className={comunClass.containerTextBoxDataCont}>
                {first==="dark" ? (
                    <Grid className={[ comunClass.titleBlackDataCont, comunClass.textPrimaryDeskDataCont ]}>
                        {txt1}
                        <Grid component='span' className={[ comunClass.titleBlue, comunClass.titleBlueDataCont ]}>
                            &nbsp; {txt2}
                        </Grid>
                    </Grid>
                ) : (
                    <Grid className={[ comunClass.titleBlackDataCont, comunClass.textPrimaryDeskDataCont ]}>
                        <Grid component='span' className={[ comunClass.titleBlue, comunClass.titleBlueDataCont ]}>
                            {txt1}
                        </Grid>
                        &nbsp; {txt2}
                    </Grid>
                )}

                <NoPaddingAutocomplete
                    id={id}
                    value={data}
                    onChange={(event, value) => {
                    setData(value);
                    }}
                    options={!listado.error ? (listado.data.length>0 ? listado.data : []): []}
                    getOptionSelected= {(
                        option,
                        value
                     ) => value.value === option.value}
                    getOptionLabel={(option) => {
                        let response = ""
                        if (option){
                            if (options.length>0){
                                for (let index = 0; index < options.length; index++) {
                                    const element = options[index];
                                    response += option[element]+" ";
                                }
                            }
                        }

                        return response
                    }}
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        variant='outlined'
                        InputProps={{
                        ...params.InputProps,
                        style: {
                            paddingTop: "3px",
                            paddingBottom: "3px",
                            paddingLeft: "5xp",
                            marginTop: "7px",
                            background: "#ffff"
                        }
                        }}
                    />
                    )}
                />
            </div>
        </div>
    )
}