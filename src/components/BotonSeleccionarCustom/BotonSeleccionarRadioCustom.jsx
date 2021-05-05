import { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { updateForm } from "../../redux/actions/AdmissionAction";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import specialBlue from "../../util/color/specialBlue";

const BotonSeleccionarRadioCustom = (props) => {
  const { id, data, itemForm, selected, handlerGuardarData, children, listado } = props;

  const {
    addmissionForm: { razonAlertaForm }
  } = useSelector((state) => state, shallowEqual);

  const dispatch = useDispatch();

  const [ isSelected, setIsSelected ] = useState();

  useEffect(() => {
    setIsSelected(selected);
  }, [ selected ]);

  useEffect(() => {
    if (itemForm === "razonAlertaForm"){
      if (isSelected !== undefined){
        if (!isSelected && data?.id=== razonAlertaForm?.id){
          dispatch(updateForm("razonAlertaForm", { id: 0, glosa: "No registra alerta"}));
          setTimeout(function(){ dispatch(handleSetStep(26.4)); }, 500);
        }
      }
    }
    // eslint-disable-next-line
  }, [isSelected]);

  const comunClass = getComunStyle();

  const BlueRadio = withStyles({
    root: {
      color: specialBlue,
      '&$checked': {
        color: specialBlue[600]
      }
    },
    checked: {}
  })((props) => <Radio color='default' {...props} />);

  return (

    <div className={isSelected ? comunClass.roundedRadioBlue : comunClass.roundedRadioNormal} style={ (children?.props?.id === 6) && (listado === 5 || listado === 3) ? { width: "346px", height: "47px", marginBottom: "20px", margin: "auto" } : { width: "346px", height: "47px", marginBottom: "20px" }}>
    <BlueRadio
      id={id}
      checked={isSelected}
      onClick={() => {
        setIsSelected((selected) => !selected)
            if (data.glosa === "Posible causa no laboral") {
              handlerGuardarData(!isSelected, data)
              dispatch(updateForm("razonAlertaForm", { id: 1, glosa: data.glosa}));
              dispatch(handleSetStep(26.3));
              // dispatch(handleSetStep(26.3));
            } else {
                dispatch(
                  updateForm(
                    itemForm,
                    !isSelected ? { ...data, selected: !isSelected } : {}
                  )
                );
                handlerGuardarData(isSelected, data);
            }
      }}
    />
      {children}

    </div>
  );
};

export default BotonSeleccionarRadioCustom;
