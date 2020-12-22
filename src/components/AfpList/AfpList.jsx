import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import AutoComplete from "@material-ui/lab/Autocomplete";
import { getComunStyle } from "../../css/comun";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";

import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import specialBlue from "./../../util/color/specialBlue";

const AfpList = () => {
  const {
    addmissionForm: { afpForm }, microsoftReducer
  } = useSelector((state) => state, shallowEqual);

  const comunClass = getComunStyle();

  const [afp, setAFP] = useState(() => {
    return !afpForm ? "" : afpForm;
  });
  const { data: afpList } = useSelector((state) => state.afpForm, shallowEqual);
  const dispatch = useDispatch();
  const [check, setCheck] = useState(afpForm ? afpForm : { id:1, description:"Presencial" })
  
  const BlueRadio = withStyles({
    root: {
      color: specialBlue,
      '&$checked': {
        color: specialBlue[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

  return (
      <div className=""> 
      {/* {comunClass.containerTextBox} */}
        <div style={{width: "100%", backgroundColor: "white"}}>
          <div className={comunClass.containerOpctionCompl}>
            <BlueRadio
                checked={check.id === 5}
                onChange={()=>{setCheck({ id:5, description: "Otro", nombre: "" })}}
                value={check.id}
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'C' }}
            />
            <p className={comunClass.txtRadios}>Otra AFP</p>
          </div>
          <div className={comunClass.widthOtro} style={{ padding: '0 10px 5px' }}>
            <AutoComplete
              value={afp}
              onChange={(event, value) => {
                setAFP(value);
              }}
              options={afpList}
              getOptionLabel={(option) => option.nombre}
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
  );
};

export default AfpList;
