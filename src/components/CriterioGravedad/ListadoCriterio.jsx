import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import AutoComplete from "@material-ui/lab/Autocomplete";
import { getComunStyle } from "../../css/comun";
import { withStyles } from '@material-ui/core/styles';

const CriterioList = (props) => {

  const { criterioGravedad: check, setCriterioGravedad: setCheck, title, listado, id } = props
  const [checkInt, setCheckInt] = useState(check ? check : "")

  // useEffect(()=>{
  //   if(check.otro===false){
  //     console.log("a verrr...")
  //     setCheckInt("")
  //   }
  // },[check])

  const comunClass = getComunStyle();

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
          <div className="" style={{padding: "5px"}}>

            <div className="row" style={{padding:0,margin:0,width:"100%"}}>
              <div className="col-md-1"></div>
              <div className="col-md-4" style={{alignSelf: "center", textAlign: "end"}}>
                <span className={comunClass.txtRadios}>{title}</span>
              </div>
              
              <div className="col-md-5">
                <NoPaddingAutocomplete
                  id={id+"Autocomplete"}
                  value={checkInt}
                  onChange={(event, value) => {
                      setCheckInt(value);
                      setCheck(value);
                  }}
                  getOptionSelected= {(
                    option,
                    value,
                  ) => value.value === option.value}
                  options={listado}
                  getOptionLabel={(option) => option.nombre}
                  renderInput={(params) => (
                    <TextField
                      id={id+"Input"}
                      {...params}
                      // label="Otros"
                      variant="outlined"
                      InputProps={{
                        ...params.InputProps,
                        style: {
                          paddingTop: "3px",
                          paddingBottom: "3px",
                          paddingLeft: "5xp",
                          marginTop: "14px",
                          backgroundColor:"white"
                        },
                      }}
                    />
                  )}
                />
              </div>
              <div className="col-md-2"></div>
            </div>

          </div>
        </div>
      </div>
  );
};

export default CriterioList;
