import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import {getWelcomeStyle} from '../../css/welcomeStyle'
import {getComunStyle} from '../../css/comun'
import {getSpaceStyle} from '../../css/spaceStyle'
import '../../css/catamaranFont.css'
import '../../css/sfUiDisplayCufonfonts.css'
import { handleSetStep } from '../../redux/actions/AdmissionAction'

const Session = (props) => {

    const { dispatch, addmissionForm} = props
    const welcomeStyle = getWelcomeStyle()  
    const comunStyle = getComunStyle()  
    const spaceStyle = getSpaceStyle()

    return (
            <div className={comunStyle.root}>
                <div className={comunStyle.bottomElement}>
                <Button
                            className={comunStyle.buttonAchs}
                            variant="contained"
                            onClick={()=> dispatch(handleSetStep(++addmissionForm.step))}>
                            Empecemos
                        </Button>
                </div>
            </div>   
    );
}

function mapStateToProps({ addmissionForm}) {
    return {
        addmissionForm : addmissionForm
    }
}
export default connect(mapStateToProps)(Session)