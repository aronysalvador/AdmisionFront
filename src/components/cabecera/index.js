import React from 'react'
import {getComunStyle} from '../../css/comun'
import {getSpaceStyle} from '../../css/spaceStyle'
// import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import BorderLinearProgress from '../../components/share/BorderLinearProgress/index'

const Cabecera = (props) => {

    const { dispatch, percentage } = props
    const comunClass = getComunStyle()
    const spaceStyle = getSpaceStyle()

    return (
        <div>
        {/* <div>
            <Typography variant="p" component="p" className={comunClass.tituloACHS}>
            </Typography>
        </div>   */}
                
                <div className={comunClass.displayDesk}>
                    <div className={spaceStyle.space1} />
                </div>
                <div className={comunClass.displayMobile}>
                    <div className={spaceStyle.space1} />
                </div>
                <div className={comunClass.buttonVolverContainerBarra}>
                    <Link style={{cursor: 'pointer'}} onClick={()=> dispatch()}>
                        <div className={comunClass.displayMobile}>
                            <ArrowBackIosIcon style={{ color: "#373737" }} />
                        </div>
                        <div className={comunClass.displayDesk}>
                            <ArrowBackIosIcon style={percentage === -1 ? { color: "#fff" } : { color: "#373737" }}
                                // step === 1.1 
                            />
                        </div>
                    </Link>
                </div> 
                <div className={comunClass.barraContainer}>
                    {(percentage !== -1) ? <BorderLinearProgress variant="determinate" value={percentage} /> : <div />}
                </div> 
                <div className={comunClass.cleanFloat} />

                    {props.noSpace ? null : (
                    <div  className={spaceStyle.space1} />
                    )}
                
                </div>
                )
}
export default Cabecera