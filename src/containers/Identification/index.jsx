import React from 'react'
import { connect } from 'react-redux'
import { handleSetStep } from '../../redux/actions/AdmissionAction'
import BorderLinearProgress from '../../components/share/BorderLinearProgress/index'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import Link from '@material-ui/core/Link'
import IdentificationForm from '../../components/Identification/identificationForm'
import {identificationStyle} from '../../components/share/style/identificationStyle'
import {comun} from '../../components/share/style/comun'
import Typography from '@material-ui/core/Typography'

const Identification = (props) => {
    const { dispatch, addmissionForm } = props

    const classes = identificationStyle();
    const comunClass = comun();  

    return (<div className={comunClass.root}>
                <div className={classes.item1}>
                    <Typography variant="p" component="p" className={comunClass.tituloACHS}>
                            ACHS
                    </Typography>
                </div> 
                <div className={classes.item2} />
                <div className={classes.item3}>
                    <Link href="#" onClick={()=> dispatch(handleSetStep(--addmissionForm.step))}>
                        <ArrowBackIosIcon style={{ color: "#373737" }} />
                    </Link>
                </div> 
                <div className={classes.item4}>
                    <BorderLinearProgress variant="determinate" value={addmissionForm.percentage} />
                </div> 
                <div className={classes.item5} />
                <div className={classes.item6}>
                    <IdentificationForm />  
                </div> 
            </div> 
    );
}

const mapStateToProps = ({ addmissionForm }) =>{
    return {
        addmissionForm : addmissionForm
    }
}
export default connect(mapStateToProps)(Identification)

