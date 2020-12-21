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
import Header from "../../components/header/index";

//Action de Redux
import { sendIsapres } from "../../redux/actions/AdmissionAction";
import { searchIsapres } from "../../redux/actions/PrevisionAction";
import image from './../../img/relato.svg'

const HealthForecastIsapre = (props) => {
  const { isapreSeleccionado } = useSelector(
    (state) => state.addmissionForm, shallowEqual);

  const { dispatch, addmissionForm } = props;
  const { microsoftReducer } = useSelector((state) => state, shallowEqual);
  const comunClass = getComunStyle();
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
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header
          userMsal={ microsoftReducer.userMsal }
          // step={1}
        />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(19))}
          percentage={addmissionForm.percentage}
        />
      </div>
      <form>
        <div className={comunClass.titlePrimaryDesk}>
          <Grid
            className={[comunClass.titleBlack, comunClass.titleBlack2, comunClass.textPrimaryDesk]}
          >
            Escribe la 
            <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
              &nbsp;Isapre
            </Grid>                    
          </Grid>
          <div className={comunClass.displayDeskImg}>
            <Grid component="span" className={comunClass.imgPrimaryDesk}>
              <img alt="relato" src={image} className={comunClass.imgPrimaryWidth} />
            </Grid>
          </div>
        </div>
        <div className={comunClass.boxDesk}>
          <div className={comunClass.displayMobile}>
            <div className={spaceStyle.space2} />
          </div>
          <div className={comunClass.containerTextBox}>
            <Typography className={comunClass.tituloTextBox}>
              Isapre
            </Typography>
            <Autocomplete
              id="asynchronous-demo"
              open={open}
              onOpen={() => { setOpen(true) }}
              onClose={() => { setOpen(false) }}
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
          <div className={comunClass.bottomElement}>
            <Button
              disabled={!isapres}
              className={comunClass.buttonAchs}
              variant="contained"
              onClick={() => clickSendIsapres()}
            >
              Continuar
            </Button>
          </div>
        </div>
        <div className={comunClass.displayDesk}>
          <div className={spaceStyle.space2} />
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
