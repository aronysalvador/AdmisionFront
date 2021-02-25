import { useState, useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import specialBlue from "../../util/color/specialBlue";

const AfpButtons = (props) => {
    const { data, itemForm, selected, step, handlerGuardarData } = props;
    const dispatch = useDispatch();

    const [ isSelected, setIsSelected ] = useState();

    const { botonSeleccionado, cardsButton } = getComunStyle();

    useEffect(() => {
        setIsSelected(selected);
    }, [ selected ]);

    return (
    <div
      onClick={() => {
        setIsSelected((selected) => !selected);
        if (!isSelected) {
          // if (itemForm === "SucursalEmpresa") {
          //   handlerGuardarData(itemForm, data, step);
          //   dispatch(
          //     updateForm(
          //       "SucursalEmpresaObjeto",
          //       !isSelected ? { ...data, selected: !isSelected } : {}
          //     )
          //   );
          //   setTimeout(function(){ dispatch(handleSetStep(step)); }, 1000);
          //   //dispatch(handleSetStep(step));
          // }
          // else {
            dispatch(
              updateForm(
                itemForm,
                !isSelected ? { ...data, selected: !isSelected } : {}
              )
            );
            setTimeout(function(){ dispatch(handleSetStep(step)); }, 1000);
            // dispatch(handleSetStep(step));
          // }
          // dispatch(handleSetStep(step));
        }
      }}
      className={isSelected ? botonSeleccionado : cardsButton}
    >
      {props.children}

    </div>
    )
}

export default AfpButtons