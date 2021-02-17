import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { updateForm } from "../../redux/actions/AdmissionAction";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";
// import { id } from "date-fns/locale";

const BotonSeleccionarCustom = (props) => {
  const { id, data, itemForm, selected, step, handlerGuardarData } = props;

  const {
    addmissionForm: { razonAlertaForm }
  } = useSelector((state) => state, shallowEqual);

  const dispatch = useDispatch();

  const [isSelected, setIsSelected] = useState();
  const { botonSeleccionado, cardsButton } = getComunStyle();

  useEffect(() => {
    setIsSelected(selected);

  }, [selected]);

  useEffect(() => {
    if(itemForm === "razonAlertaForm"){
      if(isSelected !== undefined){
        if(!isSelected && data?.id=== razonAlertaForm?.id){
          dispatch(updateForm("razonAlertaForm", { id: 7 , glosa: ""}));
          setTimeout(function(){ dispatch(handleSetStep(26.4)); }, 500);
        }
      }
    }
    // eslint-disable-next-line
  }, [isSelected]);

  return (
    <div
      id={id}
      onClick={() => {
        setIsSelected((selected) => !selected);
        if (!isSelected) {
          if (itemForm === "SucursalEmpresa") {
            handlerGuardarData(itemForm, data, step);
            dispatch(
              updateForm(
                "SucursalEmpresaObjeto",
                !isSelected ? { ...data, selected: !isSelected } : {}
              )
            );
            setTimeout(function(){ dispatch(handleSetStep(step)); }, 1000);
            //dispatch(handleSetStep(step));
          } else if (itemForm === "razonAlertaForm") {
            if (data.glosa === "Posible causa no laboral") {
              dispatch(updateForm("razonAlertaForm", { id: 1 , glosa: data.glosa}));
              setTimeout(function(){ dispatch(handleSetStep(26.3)); }, 1000);
              //dispatch(handleSetStep(26.3));
            } else {
              
                dispatch(
                  updateForm(
                    itemForm,
                    !isSelected ? { ...data, selected: !isSelected } : {}
                  )
                );
              setTimeout(function(){ dispatch(handleSetStep(26.4)); }, 1000);
            }
          } 
          
          else if (itemForm === "categoriaOcupacionalForm") {
            if (data.nombre === "Empleadores" || data.nombre === "Cuenta Propia") {
              dispatch(
                updateForm(
                  itemForm,
                  !isSelected ? { ...data, selected: !isSelected } : {}
                )
              );
              setTimeout(function(){ dispatch(handleSetStep(25.1)); }, 1000);
            } else {
              dispatch(
                updateForm(
                  itemForm,
                  !isSelected ? { ...data, selected: !isSelected } : {}
                )
              );
              setTimeout(function(){ dispatch(handleSetStep(26)); }, 1000);
              //dispatch(handleSetStep(26.4));
            }
          }
          else if (itemForm === "tipoAccidenteTrayectoForm") {
            dispatch(
              updateForm(
                itemForm,
                !isSelected ? { ...data, selected: !isSelected } : {}
              )
            );
            setTimeout(function(){ dispatch(handleSetStep(6.02)); }, 1000);
          }
          else {
            dispatch(
              updateForm(
                itemForm,
                !isSelected ? { ...data, selected: !isSelected } : {}
              )
            );
            setTimeout(function(){ dispatch(handleSetStep(step)); }, 1000);
            //dispatch(handleSetStep(step));
          }
          //dispatch(handleSetStep(step));
        }
      }}
      className={isSelected ? botonSeleccionado : cardsButton} >
      {props.children}
      
    </div>
  );
};

export default BotonSeleccionarCustom;
