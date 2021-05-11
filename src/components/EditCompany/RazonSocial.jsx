import { useState } from "react";
import { TextField } from "@material-ui/core";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { updateForm } from "../../redux/actions/AdmissionAction";
import { getSucursales } from "../../redux/actions/SucursalesAction";
import Autocomplete from '@material-ui/lab/Autocomplete';

const RazonSocial = () => {
  
  const {
    addmissionForm: { razonSocial },
    microsoftReducer: {token}
  } = useSelector((state) => state, shallowEqual);

  const dispatch = useDispatch();
  const [ open, setOpen ] = useState(false);
  
  const header = {
    headers: {
      "x-access-token": token
    }
  }
  const [ options, setOptions ] = useState([]);  
  const loading = open && options.length === 0;
  const [ requestActive, setRequestActive ] = useState(false); 

  const reset = (predictions, status)=>{
    if(Array.isArray(predictions))
      setOptions(predictions)
    setRequestActive(status)   
  }
  const getPredictions = (json) => {
    return (Array.isArray(json.content?.response)) ? json.content.response : []
  }

  const getData = async(newInputValue) => {
        reset(null,true)
        if ((newInputValue.length % 5 === 0) || (!requestActive && newInputValue.length >= 3)) {
          fetch(window.REACT_APP_RAZONSOCIAL+ newInputValue, header).then((response) => {
            if(response.ok) { 
                 response.json().then((json) =>{
                  reset(getPredictions(json),false)
              }).catch(() =>{
                reset([],false)
              })
            }
          }).catch(()=>{
            reset([],false)
          })
        }
    }

  return (
    <div style={{padding: "0"}}>
        <Autocomplete
          id={"RazonSocial-Lbl1"}
          value={razonSocial}
          style={{ width: '100%' }}
          size='small'
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
            value
          ) => value.value === option.value}
          onInputChange={(event, newInputValue) => {
            getData(newInputValue)
          }}
          onChange={(event, value) => {
            dispatch(getSucursales(value?.rut.replace(/\./g,'').toUpperCase()))
            dispatch(updateForm("razonSocial", value))
            dispatch(updateForm("razonSocialForm", value?.name))
            dispatch(updateForm("rutEmpresa", value?.rut));
          }
          }
          loadingText='cargando'
          renderInput={(params) => {
            return (
              <TextField
              {...params}
              style={{color: 'red'}}
              variant='outlined'
              />
          ) }}

        />
    </div>
  );
};

export default RazonSocial;
