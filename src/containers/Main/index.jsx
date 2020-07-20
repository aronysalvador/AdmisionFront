import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import Identification from '../Identification/index'
import Sinister from '../Sinister/index'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import useStyles from '../../css/styles'
import PacienteNoAfiliadoError from '../Error/pacienteNoAfiliadoError'
import Consitions from '../Conditions/index'
import PersonalData from '../PersonalData/index'
import LoadPersonalData from '../Load/loadPersonalData'
import Session from '../Welcome/Session'
import FechaHoraSiniestro from "../FechaHoraSiniestro/FechaHoraSiniestro";
import LugarExactoSiniestro from "../LugarSiniestro/LugarExactoSiniestro";
import LugarReferenciaSiniestro from "../LugarSiniestro/LugarReferenciaSiniestro";
import Load from '../Load/load'
import WelcomeEjecutivo from '../Welcome/WelcomeEjecutivo'
import { getAccount } from '../../redux/actions/microsoft.action'
import HealthForecast from "../HealthForecast/index";
import HealthForecastIsapre from "../HealthForecastIsapre/index";
import AccidentPlaceForm from '../Questions/lugarAccidente'
import AccidentDescription from '../Questions/descripcionAccidente'
import AccidentObjectForm from '../Questions/objetoAccidente'


const Main = (props) => {

    const classes = useStyles();
    const { addmissionForm,dispatch } = props

    const localGetAccount = () => dispatch(getAccount())

    useEffect(() => {localGetAccount()},[]);

    const renderForm = (step) => {

        switch(step){
          case -1: 
              return <Load />
            case 0: 
              return <Session />
           case 1: 
              return <WelcomeEjecutivo />
            case 2: 
              return <Identification />
            case 3: 
              return <Sinister /> 
            case 4: 
              return <Consitions />
            case 5:    
              return <LoadPersonalData />                
            case 51: 
              return <PersonalData />   
            case 6:
                return <FechaHoraSiniestro />;
            case 7:
                return <LugarExactoSiniestro />;
            case 8:
                return <LugarReferenciaSiniestro />;
            case 9:
                return <HealthForecast />;
            case 10:
                return <HealthForecastIsapre />;
            case 11: 
                return <AccidentPlaceForm />            
            case 12: 
                return <AccidentDescription /> 
            case 13: 
                return <AccidentObjectForm />                                               
            case 500:
                return <PacienteNoAfiliadoError />                                                      
            default:
              return <div>Error</div> 
        
        }
    }

    return (
        <MuiThemeProvider>
            <CssBaseline />
            <div className={classes.layout}>
              <Paper className={classes.paper}>
                {renderForm(addmissionForm.step)}
              </Paper>
            </div>
        </MuiThemeProvider>
    )
}

function mapStateToProps({ addmissionForm }) {
    return {
      addmissionForm : addmissionForm
    }
}

export default connect(mapStateToProps)(Main);