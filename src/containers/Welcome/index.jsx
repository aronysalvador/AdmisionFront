import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { handleSetStep } from '../../redux/actions/AdmissionAction'
import {welcomeStyle} from '../../components/share/style/welcomeStyle'
import Link from '@material-ui/core/Link'
import '../../css/catamaranFont.css'
import '../../css/sfUiDisplayCufonfonts.css'
import {comun} from '../../components/share/style/comun'

const Welcome = (props) => {

    const { dispatch, addmissionForm } = props

    const classes = welcomeStyle();  
    const comunClass = comun();  
    
    return (
            <div   className={comunClass.root}>
                <div   className={classes.item1}>
                    <img alt="Ejecutivo de admisión" src="static/admisionista.jpg" className={classes.avatar} />
                </div>
                <div   className={classes.item2}>
                    <Typography variant="p" component="p" className={classes.bienvenido}>
                        Bienvenido/a
                    </Typography>
                </div>
                <div   className={classes.item3} />
                <div   className={classes.item4}>
                    <Typography variant="p" component="p" className={classes.admisionText}>
                            Vamos a hacer una admisión:
                            <br />
                            <br />
                            - Lorem ipsum dolor sit amet 
                            <br /> 
                            - Consectetur adipiscing elit  
                            <br />
                            - Adipiscing velit et, non sed curabitur    
                    </Typography>
                </div>
                <div   className={classes.item5} />
                <div   className={classes.item6}>
                        <Button
                            className={comunClass.boton}
                            variant="contained"
                            onClick={()=> dispatch(handleSetStep(++addmissionForm.step))}>
                            Empecemos
                        </Button>
                </div>
                <div   className={classes.item7} />
                <div   className={classes.item8}>
                    <Typography variant="p" component="p" display="block" className={classes.terminos} >
                        Al hacer click en Empecemos,
                    </Typography>
                    <Typography variant="p" component="p" display="block" className={classes.terminos} >
                        aceptas nuestros  
                        <Link className={classes.terminosLink} component="button" variant="body2" onClick={()=> dispatch(handleSetStep(4))}>
                        <u>Términos y condiciones</u>
                        </Link>
                    </Typography>
                </div>
            </div>   
    );
}

function mapStateToProps({ addmissionForm }) {
    return {
        addmissionForm : addmissionForm
    }
}
export default connect(mapStateToProps)(Welcome);