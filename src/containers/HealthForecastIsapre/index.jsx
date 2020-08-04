import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector, shallowEqual } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getWelcomeStyle } from "../../css/welcomeStyle";

//Action de Redux
import { sendIsapres } from "../../redux/actions/AdmissionAction";
import { searchIsapres } from "../../redux/actions/PrevisionAction";

const HealthForecastIsapre = (props) => {
  const { isapreSeleccionado } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );
  const { dispatch, addmissionForm } = props;

  const welcomeStyle = getWelcomeStyle();
  const classesComun = getComunStyle();
  const spaceStyle = getSpaceStyle();

  //State
  const [isapres, saveIsapres] = useState(isapreSeleccionado);
  const [open, setOpen] = useState(false);
  const [isIsapresValid, setIsIsapresValid] = useState(true);

  const dispatch1 = useDispatch();

  useEffect(() => {
    //Call Action
    const consultaIsapres = () => dispatch1(searchIsapres());
    consultaIsapres();
  }, []);

  const getIsapres = useSelector((state) => state.previsionForm.isapres);

  const loading = useSelector((state) => state.previsionForm.loading);

  const clickSendIsapres = () => {
    if (isapres === null) {
      setIsIsapresValid(false);
      return;
    }
    dispatch1(sendIsapres(isapres));
    dispatch(handleSetStep(20));
  };

  return (
    <div className={classesComun.root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(19))}
        percentage={addmissionForm.percentage}
      />
      <form>
        <div>
          <Typography
            variant="p"
            component="p"
            className={classesComun.pregunta}
          >
            Escribe tu ISAPRE
          </Typography>
        </div> 
        <div className={spaceStyle.space2} />
        <div>
          <Typography
            variant="p"
            component="p"
            className={[classesComun.tituloTextbox]}
          >
            ISAPRE
          </Typography>
        </div>
        <div>
          <Autocomplete
            id="asynchronous-demo"
            style={{ width: 300 }}
            open={open}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            getOptionSelected={(option, value) =>
              option.nombre === value.nombre
            }
            getOptionLabel={(option) => option.nombre}
            options={getIsapres.length !== 0 ? getIsapres : []}
            loading={loading}
            value={isapres}
            onChange={(event, newValue) => {
              saveIsapres(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                error={!isIsapresValid}
                helperText={
                  !isIsapresValid && "Escriba o Seleccione al menos una Isapres"
                }
                variant="outlined"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {loading ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
              />
            )}
            fullWidth
          />
        </div>
        <div className={classesComun.bottomElement}>
          <Button
           disabled={!isapres}
            className={classesComun.buttonAchs}
            variant="contained"
            onClick={() => clickSendIsapres()}
          >
            Siguiente
          </Button>
        </div>
      </form>
    </div>
  );
};
function mapStateToProps({ addmissionForm }) {
  return {
    addmissionForm: addmissionForm,
  };
}

export default connect(mapStateToProps)(HealthForecastIsapre);
