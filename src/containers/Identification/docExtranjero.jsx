import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { TextField, Button } from "@material-ui/core";
// import { Rut, formateaRut } from "../../helpers/rut";
import { Format } from "../../helpers/strings";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Grid from "@material-ui/core/Grid";
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import specialBlue from "../../util/color/specialBlue";

const DocExtranjero = () => {
    const dispatch = useDispatch();

    const comunClass = getComunStyle();
    const spaceStyle = getSpaceStyle();
    const [ nroDocumento, setNroDocumento ] = useState("");
    const [ isValid, setIsValid ] = useState(true);

    const [ check, setCheck ] = useState({});

    const handleChange = (value) => {
      // let format = formateaRut(value)
      // setNroDocumento(value?(format!==undefined? format : value):"");
      // setIsValid(Rut.clean(value))
      setIsValid(value.length > 5 && value.length < 16);
      setNroDocumento(value);
    }

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
    <div>

        <div className='row'>
            <div className='col-md-6' style={{ marginBottom: "10px"}}>
                <div className={check.id === 1 ? comunClass.roundedBlue2 : comunClass.roundedNormal2}>
                    <div className={comunClass.containerOpction} style={{marginLeft: 0}}>
                        <BlueRadio
                            id='DocExtranjero-Check1'
                            checked={check.id === 1}
                            onChange={() => setCheck({ id: 1, description: "EX" })}
                            value={check.id}
                            name='radio-button-demo'
                            inputProps={{ 'aria-label': 'C' }}
                        />
                        <p className={comunClass.txtRadios} style={{ marginTop: "12px", marginBottom: "0px" }}>DNI</p>
                    </div>
                </div>
            </div>
            <div className='col-md-6'>
                <div className={check.id === 2 ? comunClass.roundedBlue2 : comunClass.roundedNormal2}>
                    <div className={comunClass.containerOpction} style={{marginLeft: 0}}>
                        <BlueRadio
                            id='DocExtranjero-Check2'
                            checked={check.id === 2}
                            onChange={() => { setCheck({ id: 2, description: "PS" }) }}
                            value={check.id}
                            name='radio-button-demo'
                            inputProps={{ 'aria-label': 'C' }}
                        />
                        <p className={comunClass.txtRadios} style={{ marginTop: "12px", marginBottom: "0px" }}>Pasaporte</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={spaceStyle.space1} />
        <Grid className={comunClass.tituloTextBox}>
          Numero de documento
        </Grid>
        <TextField
          id={"DocExtranjero-Lbl1"}
          type='text'
          value={nroDocumento}
          variant='outlined'
          size='small'
          margin='dense'
          fullWidth
          helperText={!isValid && "Documento no válido"}
          autoComplete='off'
          error={!isValid }
          inputProps={{ maxLength: 15 }}
          onChange={(e) => { handleChange(Format.caracteresInvalidos(e.target.value)) }}
        />
        <div className={comunClass.bottomElement}>
          <Button
            id={"DocExtranjero-Btn1"}
            className={comunClass.buttonAchs}
            variant='contained'
            disabled={!nroDocumento || !isValid || !check.id}
            onClick={() => {
              dispatch(updateForm("tipoDocumento", check.description));
              dispatch(updateForm("rut", nroDocumento));
              dispatch(handleSetStep(5));
            }}
          >
            Continuar
          </Button>
        </div>
    </div>
  );
};
export default DocExtranjero;
