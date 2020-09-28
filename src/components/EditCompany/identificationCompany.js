import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Rut, formateaRut } from "../../helpers/rut";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { updateForm } from "../../redux/actions/AdmissionAction";

const IdentificationCompany = () => {
  const dispatch = useDispatch();
  const {
    addmissionForm: { rutEmpresa },
  } = useSelector((state) => state, shallowEqual);

  const [rut, setRut] = useState(() => {
    return !rutEmpresa ? "" : rutEmpresa;
  });

  const [isValid, setIsValid] = useState(true);

  const validar = async(rut) => {
    
    if (isValid) {
      
      const test = await fetch( process.env.REACT_APP_RAZON_SOCIAL_RUT+rut)
      const json = await test.json()


      if(json.content.response[0] !== undefined){

        dispatch(updateForm("razonSocial", json.content.response[0])) 
        dispatch(updateForm("razonSocialForm", json.content.response[0]?.name)) 
        //dispatch(updateForm("rutEmpresa", rut.replace(/\./g,'')));
        dispatch(updateForm("rutEmpresa", rut));
      }else{

       // dispatch(updateForm("rutEmpresa", rut.replace(/\./g,''))) 
       dispatch(updateForm("rutEmpresa", rut));
        dispatch(updateForm("razonSocial", "")) 
        dispatch(updateForm("razonSocialForm", "")) 
        
      }
      
    }else{
      
      dispatch(updateForm("rutEmpresa", "")) 
      dispatch(updateForm("razonSocial", "")) 
      dispatch(updateForm("razonSocialForm", "")) 
    }
  };


  return (
    <div>
      <TextField
        type="text"
        value={rut}
        variant="outlined"
        size="small"
        margin="dense"
        fullWidth
        helperText={!isValid && "RUT no válido"}              
        error={!isValid }
        onChange={(e) => {
          var format = formateaRut(e.target.value);
          setRut(format!==undefined ? format : e.target.value);       
          setIsValid(Rut.validaRut(format));   
        }}
        onBlur={() => validar(rut)}
      />{" "}
    </div>
  );
};
export default IdentificationCompany;
