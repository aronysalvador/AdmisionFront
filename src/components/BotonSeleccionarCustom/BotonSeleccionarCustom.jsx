import React, { useState, useEffect } from "react";
import { getComunStyle } from "../../css/comun";
import { useDispatch } from "react-redux";
import { updateForm } from "../../redux/actions/AdmissionAction";
import { handleSetStep } from "../../redux/actions/AdmissionAction";

const BotonSeleccionarCustom = (props) => {
  const { data, itemForm, selected, step, handlerGuardarData } = props;

  const dispatch = useDispatch();

  const [isSelected, setIsSelected] = useState();
  const { botonSeleccionado } = getComunStyle();

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);
  console.log({ data, isSelected });
  return (
    <div
      onClick={() => {
        setIsSelected((selected) => !selected);

        if (itemForm === "SucursalEmpresa") {
          handlerGuardarData(itemForm, data, step);
          dispatch(
            updateForm(
              itemForm,
              !isSelected ? { ...data, selected: !isSelected } : {}
            )
          );
        } else {
          dispatch(
            updateForm(
              itemForm,
              !isSelected ? { ...data, selected: !isSelected } : {}
            )
          );
        }
        dispatch(handleSetStep(step));
      }}
      className={isSelected ? botonSeleccionado : ""}
      style={{
        marginTop: "10px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        width: "45%",
        height: "90px",
        borderStyle: "solid",
        borderColor: "#787878",
        borderSpacing: "2px",
        borderRadius: "10px",
        paddingTop: "15px",
        paddingBottom: "10px",
      }}
    >
      {props.children}
    </div>
  );
};

export default BotonSeleccionarCustom;
