import { makeStyles } from '@material-ui/core/styles'

export const comun = makeStyles((theme) => ({
    root: {
        width: '22.5em',
        height: '40em',
        margin : '0px',
        border: '0px',
        padding: '0px',
        backgroundColor : "#FFFFFF",
    },
    tituloACHS:{
        fontFamily: 'sfUiDisplayCufonfonts',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '0.75em',
        lineHeight: '0.875em',
    },
    pregunta:{
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '1.25em',
        lineHeight: '1.75em',
        display: 'flex',
        alignItems: 'flex-end',
    },
    boton:{
        width:'100%',
        height: '3em',
        background: '#007A33',
        borderRadius: '0.25',
        border: '0px',
        padding: '0px',
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '1.125em',
        lineHeight: '1.125em',
        color:'#FFFFFF',
        textTransform: 'capitalize',
    } 
  }))