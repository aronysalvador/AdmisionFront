import React, { useState } from "react";
import { getComunStyle } from "../../css/comun";
import { useDispatch } from "react-redux";
import { updateForm } from "../../redux/actions/AdmissionAction";

const BotonSeleccionarCustom = (props) => {
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(false);
  const { botonSeleccionado } = getComunStyle();
  const { data, itemForm } = props;

  return (
    <div
      onClick={() => {
        setIsSelected((selected) => !selected);

        dispatch(updateForm(itemForm, !isSelected ? data : {}));
      }}
      className={isSelected === true ? botonSeleccionado : ""}
      style={{
        marginTop: "10px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        width: "45%",
        height: "100px",
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
