import React, {useState , useEffect} from 'react';
import { connect , useDispatch , useSelector} from 'react-redux';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import {getComunStyle} from '../../css/comun';
import {getSpaceStyle} from '../../css/spaceStyle';
import Cabecera from '../../components/cabecera/index';
import { handleSetStep } from '../../redux/actions/AdmissionAction';
import {getWelcomeStyle} from '../../css/welcomeStyle';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

//Action de Redux
 import {sendCargo} from '../../redux/actions/AdmissionAction';
import {searchCargos} from '../../redux/actions/WitnessResponsableAction';

  const DataWitness = (props) => {
    const { dispatch,addmissionForm } = props

    const welcomeStyle = getWelcomeStyle();  
    const classesComun = getComunStyle();
    const spaceStyle = getSpaceStyle();

     //State
    const [nombre , saveNombre] = useState('');
    const [cargos , saveCargos] = useState('');
    const [open, setOpen] = useState(false);

    // eslint-disable-next-line no-use-before-define
    const dispatch1 = useDispatch();

    useEffect( () => {       
        //Call Action
        const consultaCargos = () => dispatch1( searchCargos() );
        consultaCargos();
        // eslint-disable-next-line no-use-before-define
    }, []);

    const getCargos = useSelector(state => state.cargosForm.cargos);

    const loading = useSelector(state => state.cargosForm.loading);

    const clickSendCargo = () => {
        //Validar Formulario
        if(nombre.trim() === '' || cargos === null){
            console.log('Necesita llenar los campos');
            return;
        }

        dispatch1( sendCargo(nombre , cargos.cargo) );
        dispatch(handleSetStep(15.1));
    }

    return (
            <div className={classesComun.root}>
                <Cabecera dispatch={() => dispatch(handleSetStep(--addmissionForm.step))} percentage={addmissionForm.percentage} />
                <div>
                    <Typography variant="p" component="p" className={classesComun.pregunta}>
                    Ingresa los datos del testigo
                    </Typography>
                </div> 
                <div  className={spaceStyle.space1} />

                <div>
                    <Typography variant="p" component="p" className={[classesComun.textAchsContent,welcomeStyle.admisionText]}>
                            NOMBRE              
                    </Typography>
                </div>

                <div>
                    <TextField
                        id="nombre"
                        // label="Rut"
                        // value={formateaRut(values.rut)}
                        onChange={e => saveNombre(e.target.value)}
                        
                        helperText="Ejemplo: Luis Morales"
                        // error={touched.rut && Boolean(errors.rut)}
                        margin="dense"
                        variant="outlined"
                        fullWidth
                    />
                </div>

                <div  className={spaceStyle.space1} />

                <div>
                    <Typography variant="p" component="p" className={[classesComun.textAchsContent,welcomeStyle.admisionText]}>
                            CARGO            
                    </Typography>
                </div>

                <div>
                <Autocomplete
                            id="asynchronous-demo"
                            style={{ width: 310,
                                    height: 50 }}
                            open={open}
                            onOpen={() => {
                                setOpen(true);
                            }}
                            onClose={() => {
                                setOpen(false);
                            }}
                            getOptionSelected={(option, value) => option.cargo === value.cargo}
                            getOptionLabel={(option) => option.cargo}
                            options={getCargos.length !== 0 ? getCargos : []}
                            loading={loading}
                            value={cargos}
                            onChange={(event, newValue) => {
                                saveCargos(newValue);
                              }}
                            renderInput={(params) => (
                                <TextField
                                {...params}
                                helperText="Ejemplo: Vigilante,Jefe,Agente"
                                variant="outlined"
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                    <React.Fragment>
                                        {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                        {params.InputProps.endAdornment}
                                    </React.Fragment>
                                    ),
                                }}
                                />
                            )}
                            fullWidth
                            />
                </div>

                

                <div  className={spaceStyle.space10} />

                <div>
                  <Button className={classesComun.buttonAchs} variant="contained"  type="submit" onClick={()=>  clickSendCargo()}>
                      Agregar Testigo
                  </Button>
                </div>  
                           
            </div>
    );
}

function mapStateToProps({ addmissionForm }) {
    return {
        addmissionForm : addmissionForm
    }
}

export default connect(mapStateToProps)(DataWitness);

