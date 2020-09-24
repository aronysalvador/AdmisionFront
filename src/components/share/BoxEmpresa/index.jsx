import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch } from "react-redux";
import { handleSetStep } from "../../../redux/actions/AdmissionAction";
import { Format } from '../../../helpers/strings';

const useStyles = makeStyles({
    tituloConteiner: {
        height: '2.5em',
        left: '1em',
        right: '1em',
        top: '0.5em',
        background: '#007A33',
        borderRadius: '0.25em 0.25em 0em 0em',
        border : '0px',
        margin : '0px'
    },
    tituloText : {
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '1.25',
        lineHeight: '1.75',
        display: 'flex',
        alignItems: 'center',
        color: '#F8F9FA',
        padding :'0.25em 0.25em 0.25em 0.8em',
        justifyContent: 'space-between',
        marginRight: '5px'
    },
    contentConteiner:{
        left: '21.5em',
        right: '-19.5em',
        top: '9.25em',
        bottom: '-5.75em',
        background: '#FFFFFF',
        borderRadius: '0.25em',
        boxShadow: '0em 0.125em 0.375em rgba(203, 203, 203, 0.4)',
        padding : '0.5em'
    },
    contentText:{
        left: '2em',
        right: '2em',
        top: '3.5em',
        bottom: '1em',
        fontFamily: 'Helvetica',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '1em',
        lineHeight: '1.25',
        color: '#373737',
    },
    textDireccion: {
        fontFamily: 'Helvetica',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '1.4em',
        lineHeight: '1.25',
        paddingBottom: '0.5em'
    },
    textRazonSocial: {
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '1em',
        lineHeight: '1.25',
        color: '#00B2A9',
    },
    spaceBotton: {
        paddingBottom: '0.5em'
    }
  });

const BoxEmpresa = (props) => {
    const { titulo, contenidoDireccionEmpresa, contenidoRazonSocialForm, contenidoRutEmpresa, step } = props
    const classes = useStyles()
    const dispatch = useDispatch();
    return (<div>
                <div>
                    <div className={classes.tituloConteiner}>
                        <Typography color="textSecondary" gutterBottom className={classes.tituloText}>
                            {titulo}
                            <EditIcon style={{cursor : "pointer"}} onClick={() => dispatch(handleSetStep(step))} />
                        </Typography>

                    </div>
                    <div className={classes.contentConteiner}>
                        {contenidoDireccionEmpresa.map((item,index) => {
                            return <div id={index} className={Format.formatizar(classes.textDireccion)}>{item}</div>
                        })}
                        {contenidoRazonSocialForm.map((item,index) => {
                            return <div id={index} className={Format.formatizar(classes.textRazonSocial)}>{item}</div>
                        })}
                        {contenidoRutEmpresa.map((item,index) => {
                            return <div id={index} className={Format.formatizar(classes.textRazonSocial)}>{item}</div>
                        })}
                    </div>

                </div>
            </div>
    );
}
export default BoxEmpresa;