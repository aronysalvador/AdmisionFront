import React, { useState, useEffect, useCallback } from "react";
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
import Grid from '@material-ui/core/Grid';

//Action de Redux
import { sendIsapres } from "../../redux/actions/AdmissionAction";
import { searchIsapres } from "../../redux/actions/PrevisionAction";

const HealthForecastIsapre = (props) => {
  const { isapreSeleccionado } = useSelector(
    (state) => state.addmissionForm,
    shallowEqual
  );
  const { dispatch, addmissionForm } = props;

  const classesComun = getComunStyle();
  const spaceStyle = getSpaceStyle();

  //State
  const [isapres, saveIsapres] = useState(isapreSeleccionado);
  const [open, setOpen] = useState(false);
  const [isIsapresValid, setIsIsapresValid] = useState(true);

  const dispatch1 = useDispatch();

  const initFn = useCallback(() => {
    const consultaIsapres = () => dispatch1(searchIsapres());
    consultaIsapres();
  }, [dispatch1]);

  useEffect(() => {
    initFn();
  }, [initFn]);

  const getIsapres = useSelector((state) => state.previsionForm.isapres);

  const loading = useSelector((state) => state.previsionForm.loading);

  const clickSendIsapres = () => {
    if (isapres === null) {
      setIsIsapresValid(false);
      return;
    }
    dispatch1(sendIsapres(isapres));
    dispatch(handleSetStep(19.2));
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
            className={classesComun.titleBlack}
          >
            Escribe la 
            <Grid component="span"  className={classesComun.titleBlue}>
              &nbsp;Isapre
            </Grid>                    
          </Typography>
        </div>
        <div className={spaceStyle.space2} />
        <div>
          <Typography
            variant="p"
            component="p"
            className={[classesComun.tituloTextbox]}
          >
            Isapre
          </Typography>
        </div>
        <div>
          <Autocomplete
            id="asynchronous-demo"
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
                  !isIsapresValid && "Escribe o Selecciona al menos una Isapre"
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
                  style: {
                    paddingTop: "3px",
                    paddingBottom: "3px",
                    paddingLeft: "5xp",
                    marginTop: "7px",
                  },
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
            Continuar
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
