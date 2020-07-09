import React from 'react'
import { connect } from 'react-redux'
import { handleSetStep } from '../../redux/actions/AdmissionAction'
import BorderLinearProgress from '../../components/share/BorderLinearProgress/index'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import {siniestroStyle} from '../../components/share/style/siniestroStyle'
import Button from "@material-ui/core/Button"
import {comun} from '../../components/share/style/comun'

const Identification = (props) => {

    const { dispatch, addmissionForm } = props
    const classes = siniestroStyle(); 
    const comunClass = comun();   

    return (<div component="div" className={comunClass.root}>
                <div component="div" className={classes.item1}>
                    <Typography variant="p" component="p" className={comunClass.tituloACHS}>
                            ACHS
                    </Typography>
                </div>
                <div component="div" className={classes.item2} />
                <div component="div" className={classes.item3}>
                    <Link href="#" onClick={()=> dispatch(handleSetStep(--addmissionForm.step))}>
                        <ArrowBackIosIcon style={{ color: "#373737" }} />
                    </Link>
                </div>
                <div component="div" className={classes.item4}>
                    <BorderLinearProgress variant="determinate" value={addmissionForm.percentage} />
                </div>
                <div component="div" className={classes.item5} />
                <div component="div" className={classes.item6}>
                    <Typography variant="p" component="p" className={comunClass.pregunta}>
                        ¿Qué problema tuvo?
                    </Typography>
                </div>
                <div component="div" className={classes.item7} />
                <div component="div" className={classes.item8}>
                    <Button className={classes.button} variant="contained" onClick={()=> dispatch(handleSetStep(5))}>
                        <img alt="Accidente de Trabajo" src="./static/trabajo.png" className={classes.img} />&nbsp;Accidente Trabajo
                    </Button>
                </div>
                <div component="div" className={classes.item9} />
                <div component="div" className={classes.item8}>
                    <Button className={classes.button} variant="contained" disabled={true} >
                        <img alt="Accidente de Trayecto" src="./static/trayecto.png" className={classes.img}/>&nbsp;Accidente Trayecto 
                    </Button>
                </div>
                <div component="div" className={classes.item9} />
                <div component="div" className={classes.item8}>
                    <Button  className={classes.button} variant="contained" disabled={true}>
                        <img alt="Enfermedad Profesional" src="./static/ep.png" className={classes.img} />&nbsp;Enfermedad Profesional
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
export default connect(mapStateToProps)(Identification);
