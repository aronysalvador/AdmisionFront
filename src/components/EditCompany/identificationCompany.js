import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Rut, formateaRut } from "../../helpers/rut";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { updateForm } from "../../redux/actions/AdmissionAction";
import { replace } from "formik";

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
      
      const test = await fetch(`https://wa-desa-msorquestador.azurewebsites.net/api/sap/razonSocialByRut?rut=${rut}`)
      const json = await test.json()


      if(json.content.response[0] !== undefined){

        dispatch(updateForm("razonSocial", json.content.response[0])) 
        dispatch(updateForm("razonSocialForm", json.content.response[0]?.name)) 
        dispatch(updateForm("rutEmpresa", rut.replace(/\./g,'')));
      }else{

        dispatch(updateForm("rutEmpresa", rut.replace(/\./g,''))) 
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
        value={rut}
        variant="outlined"
        size="small"
        margin="dense"
        fullWidth
        helperText={!isValid && "RUT no válido"}
        
      
        error={!isValid }
        onChange={(e) => {
          //let rutFormateado = e.target.value
          //formateaRut(e.target.value)
          setIsValid(Rut.validaRut(formateaRut(e.target.value)));
          setRut(formateaRut(e.target.value));
          
        }}
        onBlur={() => validar(rut)}
      />{" "}
    </div>
  );
};
export default IdentificationCompany;
