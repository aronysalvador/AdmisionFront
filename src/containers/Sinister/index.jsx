import React from 'react'
import { connect } from 'react-redux'
import { handleSetStep } from '../../redux/actions/AdmissionAction'
import BorderLinearProgress from '../../components/share/BorderLinearProgress/index'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import {siniestroStyle} from '../../components/share/style/siniestroStyle'
import Button from "@material-ui/core/Button"
import Box from '@material-ui/core/Box'
import {comun} from '../../components/share/style/comun'

const Identification = (props) => {

    const { dispatch, addmissionForm } = props
    const classes = siniestroStyle(); 
    const comunClass = comun();   

    return (<Box component="div" m={1} className={classes.root}>
                <Box component="div" m={1} className={classes.item1}>
                    <Typography variant="p" component="p" className={comunClass.tituloACHS}>
                            ACHS
                    </Typography>
                </Box>
                <Box component="div" m={1} className={classes.item2} />
                <Box component="div" m={1} className={classes.item3}>
                    <Link href="#" onClick={()=> dispatch(handleSetStep(--addmissionForm.step))}>
                        <ArrowBackIosIcon style={{ color: "#373737" }} />
                    </Link>
                </Box>
                <Box component="div" m={1} className={classes.item4}>
                    <BorderLinearProgress variant="determinate" value={addmissionForm.percentage} />
                </Box>
                <Box component="div" m={1} className={classes.item5} />
                <Box component="div" m={1} className={classes.item6}>
                    <Typography variant="p" component="p" className={comunClass.pregunta}>
                        ¿Qué problema tuvo?
                    </Typography>
                </Box>
                <Box component="div" m={1} className={classes.item7} />
                <Box component="div" m={1} className={classes.item8}>
                    <Button className={classes.button} variant="contained">
                        <img alt="Accidente de Trabajo" src="./static/trabajo.png" className={classes.img} />&nbsp;Accidente Trabajo
                    </Button>
                </Box>
                <Box component="div" m={1} className={classes.item9} />
                <Box component="div" m={1} className={classes.item8}>
                    <Button className={classes.button} variant="contained">
                        <img alt="Accidente de Trayecto" src="./static/trayecto.png" className={classes.img}/>&nbsp;Accidente Trayecto 
                    </Button>
                </Box>
                <Box component="div" m={1} className={classes.item9} />
                <Box component="div" m={1} className={classes.item8}>
                    <Button  className={classes.button} variant="contained">
                        <img alt="Enfermedad Profesional" src="./static/ep.png" className={classes.img} />&nbsp;Enfermedad Profesional
                    </Button>
                </Box>                                
            </Box>
        );
    }

function mapStateToProps({ addmissionForm }) {
    return {
        addmissionForm : addmissionForm
    }
}
export default connect(mapStateToProps)(Identification);
