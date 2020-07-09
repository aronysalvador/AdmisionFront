import React from 'react'
import { connect } from 'react-redux'
import {errorStyle} from '../../components/share/style/errorStyle'
import {comun} from '../../components/share/style/comun'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { handleSetStep } from '../../redux/actions/AdmissionAction'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { Alert, AlertTitle } from '@material-ui/lab'
import BorderLinearProgress from '../../components/share/BorderLinearProgress/index'
import {formateaRut} from "../../helpers/rut"

const PacienteNoAfiliadoError = (props) => {
    const { dispatch,addmissionForm } = props
    const classes = errorStyle();
    const comunClass = comun(); 

    return (<div m={1} className={comunClass.root}>
                <div m={1} className={classes.item1}>
                    <Typography variant="p" component="p" className={comunClass.tituloACHS}>
                            ACHS
                    </Typography>
                </div>
                <div m={1} className={classes.item2} />
                <div m={1} className={classes.item3}>
                    <Link href="#" onClick={()=> dispatch(handleSetStep(2))}>
                        <ArrowBackIosIcon style={{ color: "#373737" }} />
                    </Link>
                </div>
                <div className={classes.item4}>
                    <BorderLinearProgress variant="determinate" value={100} />
                </div>
                <div m={1} className={classes.item5} />
                <div m={1} className={classes.item6}>
                    <br />
                    <Alert severity="success">
                        <AlertTitle>Resumén</AlertTitle>
                        <strong>Rut Trabajador: </strong>{formateaRut(addmissionForm.rut)}<br />
                        <strong>Afiliado : </strong>{addmissionForm.isAfiliado}<br />
                        <hr />
                        <strong>Rut Empresa: </strong>{formateaRut(addmissionForm.rutEmpresa)}<br />
                        <strong>Nombre Empresa : </strong>{addmissionForm.empresa}
                        <hr />
                    </Alert>                    
                </div>
            </div>
    );
}

function mapStateToProps({ addmissionForm }) {
    return {
        addmissionForm : addmissionForm
    }
}

export default connect(mapStateToProps)(PacienteNoAfiliadoError);