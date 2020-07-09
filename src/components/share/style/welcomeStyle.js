import { makeStyles } from '@material-ui/core/styles'

export const welcomeStyle = makeStyles((theme) => ({
    root: {
        width: '22.5em',
        height: '40em',
        margin : '0px',
        border: '0px',
        padding: '0px',
    },
    item1: {
        height: '16.6875em',
        borderColor : "#FF00FF",
        border : "0",
        paddingTop:"5.5625em",
        paddingLeft: "7.125em",
    },
    item2: {
        height: '2.875em',
    },  
    item3: {
        height: '0.4375em',
  
    },
    item4: {
        height: '7.5em',
  
    },
    item5: {
        height: '2em',
  
    },
    item6: {
        height: '3.56em',
  
    },
    item7: {
        height: '0.175em',
  
    }, 
    item8: {
        height: '5.31%',
  
    },        
    button: {
        margin: '0.5em',
    },
    bienvenido:{
        fontSize : '2em',
        color: '#373737',
        fontWeight: 'bold',
        fontFamily: 'Catamaran',
        fontStyle:'normal'
    },
    admisionText :{
        fontSize : '1em',
        color: '#373737',
        fontWeight: 'normal',
        fontFamily: 'Catamaran',
        fontStyle:'normal'
    },
    terminos :{
        width:'100%',
        fontFamily:'Catamaran',
        fontSize:'0.87em',
        color: '#373737',
        textAlign: 'center',
    },
    terminosLink:{
        fontFamily:'Catamaran',
        fontSize:'0.87em',
        textDecoration: 'underline',
        color: '#373737',
        textAlign: 'center',
    },
    avatar:{
        width: '6.2em',
        height: '6.2em',
        verticalAlign:'middle',
    }         
  }))