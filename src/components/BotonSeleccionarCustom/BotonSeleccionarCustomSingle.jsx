import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateForm } from "../../redux/actions/AdmissionAction";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";

const BotonSeleccionarCustomSingle = (props) => {
  const { id, data, itemForm, selected, step } = props;

  const dispatch = useDispatch();

  const [ isSelected, setIsSelected ] = useState();
  const { botonSeleccionadoSingle, cardsButtonTipoAccidenteTrayecto } = getComunStyle();

  useEffect(() => {
    setIsSelected(selected);
  }, [ selected ]);

  return (
    <div
      id={id}
      onClick={() => {
        setIsSelected((selected) => !selected);
        if (!isSelected) {
          if (itemForm === "tipoAccidenteTrayectoForm") {
            dispatch(
              updateForm(
                itemForm,
                !isSelected ? { ...data, selected: !isSelected } : {}
              )
            );

             dispatch(updateForm("tipoAccTrayecto", data.key));
            // setTimeout(function(){ dispatch(handleSetStep(6.02)); }, 1000);
          }
          else {
            dispatch(
              updateForm(
                itemForm,
                !isSelected ? { ...data, selected: !isSelected } : {}
              )
            );
            setTimeout(function(){ dispatch(handleSetStep(step)); }, 1000);
          }
        }
      }}
      className={isSelected ? botonSeleccionadoSingle : cardsButtonTipoAccidenteTrayecto}
    >
      {props.children}
    </div>
  );
};

export default BotonSeleccionarCustomSingle;
