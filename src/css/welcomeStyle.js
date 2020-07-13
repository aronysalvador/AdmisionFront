import { makeStyles } from '@material-ui/core/styles'

export const getWelcomeStyle = makeStyles((theme) => ({
    avatarContainer: {
        borderColor : "#FF00FF",
        paddingLeft: "8em",
    },     
    bienvenido:{
        fontSize : '2em',
        fontWeight: 'bold',
    },
    admisionText :{
        fontSize : '1em',
        fontWeight: 'normal',
    },
    terminos :{
        fontSize:'0.87em',
        textAlign: 'center',
    },
    avatar:{
        width: '6.2em',
        verticalAlign:'middle',
    }         
  }))