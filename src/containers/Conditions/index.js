import React from 'react'
import { connect } from 'react-redux'
import { handleSetStep } from '../../redux/actions/AdmissionAction'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import {conditionsStyle} from '../../components/share/style/conditionsStyle'
import Button from "@material-ui/core/Button"
import Box from '@material-ui/core/Box'
import {comun} from '../../components/share/style/comun'


const Conditions = (props) => {

    const { dispatch } = props
    const classes = conditionsStyle();  
    const comunClass = comun();  

    return (<Box component="div" m={1} className={classes.root}>
                <Box component="div" m={1} className={classes.item1}>
                    <Typography variant="p" component="p" className={comunClass.tituloACHS}>
                            ACHS
                    </Typography>
                </Box>
                <Box component="div" m={1} className={classes.item2} />
                <Box component="div" m={1} className={classes.item3}>
                    <Link href="#" onClick={()=> dispatch(handleSetStep(1))}>
                        <ArrowBackIosIcon style={{ color: "#373737" }} />
                    </Link>
                </Box>
                <Box component="div" m={1} className={classes.item4} />
                <Box component="div" m={1} className={classes.item5}>
                    <Typography variant="p" component="p" className={comunClass.pregunta}>
                        Términos y condiciones
                    </Typography>
                </Box>
                <Box component="div" m={1} className={classes.item6} />
                <Box component="div" m={1} className={classes.item7}>
                    <Typography variant="p" component="p" className={classes.condiciones1} >
                        - Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /><br />
                        - Cras turpis amet lorem lorem. In id nisl, vulputate lacus, libero hendrerit.<br /><br />
                        - Diam elementum ut magna donec viverra cras sed elementum odio.<br /><br />
                        - Tristique tristique non tincidunt sit ultrices vel libero, nam placerat.
                    </Typography>                    
                </Box>
                <Box component="div" m={1} className={classes.item8} />
                <Box component="div" m={1} className={classes.item9}>
                    <Typography variant="p" component="p" className={classes.condiciones2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras turpis amet lorem lorem. In id nisl, vulputate lacus, libero hendrerit. In sed sed est, egestas ultrices sed egestas. Diam elementum ut magna donec viverra cras sed elementum odio. Tristique tristique non tincidunt sit ultrices vel libero, nam placerat. Ut adipiscing felis nec pretium turpis orci et morbi ut. Eleifend amet nunc amet mi curabitur nam faucibus. Odio nunc commodo in enim tempus. Enim etiam vehicula nisl urna suspendisse. Aliquam nulla egestas tincidunt id gravida. Nisl tempor pretium elementum, eget sodales auctor turpis gravida. Sit lectus sit risus adipiscing nunc arcu sit. Aenean consectetur egestas ac turpis leo commodo, est, eros imperdiet. Sapien, aliquet lacus, nulla iaculis elementum odio a in. Ornare lorem at mauris, venenatis aliquet. Posuere leo purus dictumst eget. Nulla curabitur tincidunt nunc, nulla aliquam maecenas. Volutpat vitae posuere pulvinar nulla nunc a amet tellus. Amet varius proin ut in vel senectus nunc pretium. Tortor pharetra blandit ultrices enim et donec condimentum. Id pellentesque mauris et enim vitae. Egestas diam sit integer dis sit felis felis et. Tellus lorem a integer vitae tellus euismod. Ut enim quis quam sit. Egestas enim eu ipsum ipsum cursus nunc. Vitae elementum commodo id magna sed malesuada luctus vel.
                    </Typography>
                </Box>
                <Box component="div" m={1} className={classes.item10}>
                    <Button className={comunClass.boton} variant="contained" onClick={()=> dispatch(handleSetStep(2))} >
                        Aceptar
                    </Button>
                </Box>
            </Box>);
}

function mapStateToProps({ addmissionForm }) {
    return {
        addmissionForm : addmissionForm
    }
}
export default connect(mapStateToProps)(Conditions);
/*
<Grid container spacing={3}>
        <Grid item xs={12} container alignItems="center" justify="center">
            <Grid item xs={1}>
                <Link href="#" onClick={()=> dispatch(handleSetStep(1))}>
                    <ArrowBackIosIcon style={{ color: "#007A33" }} />
                </Link> 
            </Grid>
            <Grid item xs={11}>
            </Grid>
        </Grid>
        <Grid item xs={12} className={classes.contentZone}>
            <Typography variant="h6" component="h6">
                <strong>Términos y condiciones</strong>
            </Typography>  
        </Grid>
        <Grid item xs={12} container className={classes.conditionsZone1}>
            <Typography variant="subtitle2" component="subtitle2" >
                - Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                - Cras turpis amet lorem lorem. In id nisl, vulputate lacus, libero hendrerit.<br />
                - Diam elementum ut magna donec viverra cras sed elementum odio.<br />
                - Tristique tristique non tincidunt sit ultrices vel libero, nam placerat.<br />
            </Typography>
        </Grid>  
        <Grid item xs={12} container className={classes.conditionsZone2}>
            <Typography variant="body1" component="body1" className={classes.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras turpis amet lorem lorem. In id nisl, vulputate lacus, libero hendrerit. In sed sed est, egestas ultrices sed egestas. Diam elementum ut magna donec viverra cras sed elementum odio. Tristique tristique non tincidunt sit ultrices vel libero, nam placerat. Ut adipiscing felis nec pretium turpis orci et morbi ut. Eleifend amet nunc amet mi curabitur nam faucibus. Odio nunc commodo in enim tempus. Enim etiam vehicula nisl urna suspendisse. Aliquam nulla egestas tincidunt id gravida. Nisl tempor pretium elementum, eget sodales auctor turpis gravida. Sit lectus sit risus adipiscing nunc arcu sit. Aenean consectetur egestas ac turpis leo commodo, est, eros imperdiet. Sapien, aliquet lacus, nulla iaculis elementum odio a in. Ornare lorem at mauris, venenatis aliquet. Posuere leo purus dictumst eget. Nulla curabitur tincidunt nunc, nulla aliquam maecenas. Volutpat vitae posuere pulvinar nulla nunc a amet tellus. Amet varius proin ut in vel senectus nunc pretium. Tortor pharetra blandit ultrices enim et donec condimentum. Id pellentesque mauris et enim vitae. Egestas diam sit integer dis sit felis felis et. Tellus lorem a integer vitae tellus euismod. Ut enim quis quam sit. Egestas enim eu ipsum ipsum cursus nunc. Vitae elementum commodo id magna sed malesuada luctus vel.
            </Typography>
        </Grid>
        <Grid item xs={12} container alignItems="center" justify="center">
            <Button style={buttonACHS} variant="contained" onClick={()=> dispatch(handleSetStep(2))}>
                Aceptar
            </Button>
        </Grid>               
    </Grid>
*/
