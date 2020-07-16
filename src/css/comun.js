import { makeStyles } from '@material-ui/core/styles'

export const getComunStyle = makeStyles((theme) => ({
    root: {
        width: '22.5em',
        height: '40em',
        backgroundColor : "#FFFFFF",
    },
    textAchsContent:{
        fontFamily: 'Catamaran',
        fontStyle:'normal',
        color: '#373737',
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
    buttonAchs:{
        width:'100%',
        background: '#007A33',
        borderRadius: '0.25',
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '1.125em',
        lineHeight: '1.125em',
        color:'#FFFFFF',
        textTransform: 'capitalize',
        height: '3.5em',
    },
    buttonAchs2:{
        width:'100%',
        background: '#FFFFFF',
        border: '2px solid #007A33',
        boxSizing: 'border-box',
        borderRadius: '4px',
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '1.125em',
        lineHeight: '1.125em',
        color:'#007A33',
        textTransform: 'capitalize',
        height: '3.5em',
    },
    buttonAchsRight:{
        width:'46%',
        background: '#007A33',
        borderRadius: '0.25',
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '1.125em',
        lineHeight: '1.125em',
        color:'#FFFFFF',
        textTransform: 'capitalize',
        height: '3.5em',
        float: 'right'
    },
    buttonAchsLeft:{
        width:'46%',
        background: '#007A33',
        borderRadius: '0.25',
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '1.125em',
        lineHeight: '1.125em',
        color:'#FFFFFF',
        textTransform: 'capitalize',
        height: '3.5em',
        float: 'left'
    },
    buttonVolverContainer:{
        width:'20%',
        float:'left',
    },
    buttonVolverContainerBarra:{
        width:'20%',
        float:'left',
    },
    barraContainer:{
        paddingTop: '0.5em',
        width:'17.75em',
        float:'left',
    },
    buttonVolverColor:{
        color: '#373737'
    },
    cleanFloat:{
        float:'none',
        clear:'both',
    },
    linePrevisionLeft: {
        border: '1px solid #000000',
        transform: 'rotate(-180deg)',
        width: '45%',
        float: 'left'
    },
    linePrevisionCenter: {
        width: '5%',
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '12px',
        lineHeight: '14px',

    },
    linePrevisionRight: {
        border: '1px solid #000000',
        transform: 'rotate(-180deg)',
        width: '45%',
        float: 'right'
    }

  }))