import { makeStyles } from '@material-ui/core/styles'

export const conditionsStyle = makeStyles(() => ({
    condiciones1Container: {
        margin: '0 auto',
        paddingLeft: '1.125em',
        paddingRight: '1.125em',
        textAlign: 'center'
    },
    condiciones1: {
        width: '20.5em',
        paddingLeft: '1.125',
        textAlign: 'left',
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '0.875em',
        lineHeight: '1em',
        display: 'flex',
        alignItems: 'center'
    },
    condiciones2Container: {
        height: '7em',
        overflow: 'auto'
    },
    condiciones2: {
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '1em',
        lineHeight: '1.5625em'
    }
  }))