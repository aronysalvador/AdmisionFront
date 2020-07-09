import React from 'react'
import { connect } from 'react-redux'
import {identificationStyle} from '../../components/share/style/identificationStyle'
import {comun} from '../../components/share/style/comun'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { handleSetStep } from '../../redux/actions/AdmissionAction'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { Alert } from '@material-ui/lab';


const PacienteNoAfiliadoError = (props) => {
    const { dispatch } = props
    const classes = identificationStyle();
    const comunClass = comun(); 

    return (<Box component="div" m={1} className={classes.root}>
                <Box component="div" m={1} className={classes.item1}>
                    <Typography variant="p" component="p" className={comunClass.tituloACHS}>
                            ACHS
                    </Typography>
                </Box>
                <Box component="div" m={1} className={classes.item2} />
                <Box component="div" m={1} className={classes.item3}>
                    <Link href="#" onClick={()=> dispatch(handleSetStep(2))}>
                        <ArrowBackIosIcon style={{ color: "#373737" }} />
                    </Link>
                </Box>
                <Box component="div" m={1} className={classes.item4} />
                <Box component="div" m={1} className={classes.item5} />
                <Box component="div" m={1} className={classes.item6}>
                    <Alert variant="filled" severity="error">
                        Paciente no afiliado a la ACHS.
                    </Alert>
                </Box>
            </Box>
    );
}

function mapStateToProps({ addmissionForm }) {
    return {
        addmissionForm : addmissionForm
    }
}

export default connect(mapStateToProps)(PacienteNoAfiliadoError);
