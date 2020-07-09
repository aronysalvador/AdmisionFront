import React from 'react'
import { connect } from 'react-redux'
import { handleSetStep } from '../../redux/actions/AdmissionAction'
import BorderLinearProgress from '../../components/share/BorderLinearProgress/index'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import Link from '@material-ui/core/Link'
import IdentificationForm from '../../components/Identification/identificationForm'
import {identificationStyle} from '../../components/share/style/identificationStyle'
import {comun} from '../../components/share/style/comun'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const Identification = (props) => {
    const { dispatch, addmissionForm } = props

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
                    <Link href="#" onClick={()=> dispatch(handleSetStep(--addmissionForm.step))}>
                        <ArrowBackIosIcon style={{ color: "#373737" }} />
                    </Link>
                </Box>
                <Box component="div" m={1} className={classes.item4}>
                    <BorderLinearProgress variant="determinate" value={addmissionForm.percentage} />
                </Box>
                <Box component="div" m={1} className={classes.item5} />
                <Box component="div" m={1} className={classes.item6}>
                    <IdentificationForm />  
                </Box>
            </Box>
    );
}

const mapStateToProps = ({ addmissionForm }) =>{
    return {
        addmissionForm : addmissionForm
    }
}
export default connect(mapStateToProps)(Identification)

