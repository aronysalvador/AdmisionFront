import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import AutoComplete from "@material-ui/lab/Autocomplete";
import { getComunStyle } from "../../css/comun";
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import specialBlue from "./../../util/color/specialBlue";

const AfpList = (props) => {
  

  const { checkedAfp: check, setCheckedAfp: setCheck, title, identificador, description, listado, id } = props
  const [checkInt, setCheckInt] = useState(check?check:"")

  useEffect(()=>{
    if(check.otro===false){
      // console.log("a verrr...")
      setCheckInt("")
    }
  },[check])

  const comunClass = getComunStyle();

  
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
          <div className={check.otro ? comunClass.roundedBlue : comunClass.roundedNormal} style={{padding: "5px", minWidth: '250px'}}>
           
          <div className="row" style={{padding:0,margin:0,width:"100%"}}>
          <div className="col-md-1">
              <BlueRadio
                  id={id+"-Check-Another"}
                  checked={check.otro }
                  onChange={()=>{ var temp = {}; temp[identificador]=""; temp[description]="Otro"; temp.otro=true;
                  setCheck(temp)}}
                  value={check}
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'C' }}
              />
          </div>
          <div className="col-md-3" style={{alignSelf: "center"}}>
              <span className={comunClass.txtRadios}>{title}</span>
          </div>
          
            <div className="col-md-8" style={{width:"64%"}}>
              <NoPaddingAutocomplete
                id={id+"Autocomplete"}
                // onOpen={()=>{ console.log("aca"); var temp = {}; temp[identificador]=""; temp[description]="Otro"; temp.otro=true;
                // setCheck(temp) }}
                // openOnFocus
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
                options={listado}
                getOptionLabel={(option) => option ? (option.nombre === "Otro" ? "" : option.nombre) : "" }
                renderInput={(params) => (
                  <TextField
                   id={id+"Input"}
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

      </div>
  );
};

export default AfpList;
