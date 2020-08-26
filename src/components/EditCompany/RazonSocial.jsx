import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { updateForm } from "../../redux/actions/AdmissionAction";
import Autocomplete from '@material-ui/lab/Autocomplete'
//import CircularProgress from '@material-ui/core/CircularProgress';

const RazonSocial = () => {
  const {
    addmissionForm: { razonSocial },
  } = useSelector((state) => state, shallowEqual);

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const [options, setOptions] = useState([]);

    const loading = open && options.length === 0;

    const getData = async(newInputValue) =>{ 
      if(newInputValue){
        
          const test = await fetch(process.env.REACT_APP_RAZONSOCIAL+ newInputValue)
          const json = await test.json()
          var predictions = (Array.isArray(json.content?.response)) ? json.content.response : []           
          setOptions(predictions)
      }
    }

   

    useEffect(() => {
      if (!loading) {
        return undefined;
      }
    }, [loading]);

  return (
    <div>
                <Autocomplete
                  value={razonSocial}
                  style={{ width: '100%' }}
                  size="small"
                  fullWidth
                  onOpen={() => {
                    setOpen(true);
                  }}
                  onClose={() => {
                    setOpen(false);
                  }}
                  getOptionLabel={(option) => option ? option.name : ""}
                  options={options}
                  loading={loading}
                  getOptionSelected= {(
                    option,
                    value,
                 ) => value.value === option.value}
                  onInputChange={(event,newInputValue) => {
                    getData(newInputValue)
                    
                  }}
                  onChange={(event,value) => {
                    dispatch(updateForm("razonSocial", value)) 
                    dispatch(updateForm("razonSocialForm", value?.name)) 
                    dispatch(updateForm("rutEmpresa", value?.rut));        
                  }
                  }
                  
                  loadingText='cargando'
                  renderInput={(params) => {
                    return(
                      <TextField 
                      {...params} 
                      style={{color:'red'}} 
                      variant="outlined" 
                      // InputProps={{
                      //   ...params.InputProps,
                      //   endAdornment: (
                      //     <>
                      //       {loading ? <CircularProgress color="inherit" size={20} /> : null}           
                      //     </>
                      //   ),
                      // }}
                      />
                  )}}
                  
                />
            </div>
  );
};

export default RazonSocial;
