import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateForm } from "../../redux/actions/AdmissionAction";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";

const BotonSeleccionarCustom = (props) => {
  const { data, itemForm, selected, step, handlerGuardarData } = props;

  const dispatch = useDispatch();

  const [isSelected, setIsSelected] = useState();
  const { botonSeleccionado, cardsButton } = getComunStyle();

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  return (
    <div
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
              //dispatch(handleSetStep(26.4));
            }
          } else {
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
