import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { useSelector, shallowEqual } from "react-redux";
import AutoComplete from "@material-ui/lab/Autocomplete";
import { getComunStyle } from "../../css/comun";
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import specialBlue from "./../../util/color/specialBlue";

const AfpList = (props) => {
  

  const { checkedAfp: check, setCheckedAfp: setCheck } = props
  const [checkInt, setCheckInt] = useState("")

  useEffect(()=>{
    if(check.otro===false){
      console.log("a verrr...")
      setCheckInt("")
    }
  },[check])

  const comunClass = getComunStyle();

  const { data: afpList } = useSelector((state) => state.afpForm, shallowEqual);

  
  const BlueRadio = withStyles({
    root: {
      color: specialBlue,
      '&$checked': {
        color: specialBlue[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

  const NoPaddingAutocomplete = withStyles({
    inputRoot: {
      '&&[class*="MuiOutlinedInput-root"] $input': {
        padding: "1.5px 2px"
      }
    },
    input: {}
  })(AutoComplete);

  return (
      <div className=""> 
        <div className={['container', comunClass.backgroundWhite].join(' ')} >
          <div className={check.otro ? comunClass.roundedBlue : comunClass.roundedNormal} style={{padding: "5px"}}>
           
          <div className="col-md-1">
              <BlueRadio
                  checked={check.otro }
                  onChange={()=>{setCheck({ codigo:"", nombre: "Otro", otro: true  })}}
                  value={check}
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'C' }}
              />
          </div>
          <div className="col-md-3">
              <span className={comunClass.txtRadios}>Otra AFP</span>
          </div>
          
            <div className="col-md-8">
              <NoPaddingAutocomplete
                value={checkInt}
                onChange={(event, value) => {
                  if(value){
                    value.otro = true
                    setCheckInt(value);
                    setCheck(value);
                  }
                }}
                getOptionSelected= {(
                  option,
                  value,
               ) => value.value === option.value}
                options={afpList}
                getOptionLabel={(option) => option ? (option.nombre === "Otro" ? "" : option.nombre) : "" }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    InputProps={{
                      ...params.InputProps,
                      style: {
                        paddingTop: "3px",
                        paddingBottom: "3px",
                        paddingLeft: "5xp",
                        marginTop: "7px",
                        backgroundColor:"white"
                      },
                    }}
                  />
                )}
              />
            </div>

          </div>
        </div>

      </div>
  );
};

export default AfpList;
