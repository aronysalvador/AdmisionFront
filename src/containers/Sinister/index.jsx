import React from 'react'
import { connect } from 'react-redux'
import { handleSetStep } from '../../redux/actions/AdmissionAction'
import Typography from '@material-ui/core/Typography'
import {siniestroStyle} from '../../css/siniestroStyle'
import Button from "@material-ui/core/Button"
import {getComunStyle} from '../../css/comun'
import {getSpaceStyle} from '../../css/spaceStyle'
import Cabecera from '../../components/cabecera/index'

const Identification = (props) => {

    const { dispatch, addmissionForm } = props
    const classes = siniestroStyle()
    const comunClass = getComunStyle()
    const spaceStyle = getSpaceStyle()

    return (<div className={comunClass.root}>

                <Cabecera dispatch={() => dispatch(handleSetStep(--addmissionForm.step))} percentage={addmissionForm.percentage} />
                <div>
                    <Typography variant="p" component="p" className={comunClass.pregunta}>
                        ¿Qué problema tuvo?
                    </Typography>
                </div>
                <div className={spaceStyle.space2} />
                <div>
                    <Button className={classes.button} variant="contained" onClick={()=> dispatch(handleSetStep(5))}>
                        <img alt="Accidente de Trabajo" src="./static/trabajo.png" className={classes.img} />&nbsp;Accidente Trabajo
                    </Button>
                </div>
                <div  className={spaceStyle.space1} />
                <div>
                    <Button className={classes.button} variant="contained" disabled={true} >
                        <img alt="Accidente de Trayecto" src="./static/trayecto.png" className={classes.img}/>&nbsp;Accidente Trayecto 
                    </Button>
                </div>
                <div  className={spaceStyle.space1} />
                <div>
                    <Button  className={classes.button} variant="contained" disabled={true}>
                        <img alt="Enfermedad Profesional" src="./static/ep.png" className={classes.img} />&nbsp;Enfermedad Profesional
                    </Button>
                </div>                                
            </div>
        );
    }

const mapStateToProps = ({ addmissionForm }) =>{
    return {
        addmissionForm : addmissionForm
    }
}
export default connect(mapStateToProps)(Identification);
