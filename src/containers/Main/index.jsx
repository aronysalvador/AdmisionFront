import React from 'react'
import { connect } from 'react-redux'
import Welcome from '../Welcome/index'
import Identification from '../Identification/index'
import Sinister from '../Sinister/index'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import useStyles from '../../css/styles'
import PacienteNoAfiliadoError from '../Error/pacienteNoAfiliadoError'
import Consitions from '../Conditions/index'
import Resumen from '../Resumen/index'
import HealthForecast from '../HealthForecast/index'
import HealthForecastIsapre from '../HealthForecastIsapre/index'


const Main = (props) => {

    const classes = useStyles();
    const { addmissionForm } = props

    const renderForm = (step) => {
        switch(step){
            case 1: 
              return <Welcome />
            case 2: 
              return <Identification />
            case 3: 
              return <Sinister /> 
            case 4: 
              return <Consitions /> 
            case 5: 
              return <Resumen />                
            case 8: 
              return <HealthForecast />
            case 9: 
              return <HealthForecastIsapre />
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