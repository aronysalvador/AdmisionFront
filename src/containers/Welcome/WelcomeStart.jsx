import React from 'react';
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

import { getWelcomeStyle } from "../../css/welcomeStyle";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";

const Start = (props) =>{
    const { dispatch,microsoftReducer } = props;
    const welcomeStyle = getWelcomeStyle();
    const comunStyle = getComunStyle();
    const spaceStyle = getSpaceStyle();
    return(
        <div className={comunStyle.rootBegin}>

            <div className={welcomeStyle.beginContainer}>
                <div className={spaceStyle.space2} >
                    <div className={welcomeStyle.avatarContainerRight}>
                        <Avatar className={welcomeStyle.avatar}>{microsoftReducer.userMsal.iniciales}</Avatar>
                    </div>
                </div>
            </div>            

            <div className={welcomeStyle.TextContainer}>
                <Typography
                variant="h1"
                component="h1"
                className={welcomeStyle.txtBegin}
                >
                    ¡Empecemos!
                </Typography>
            </div>

            <div className={welcomeStyle.beginContainer}>
                <div className={welcomeStyle.titleContainer}>
                    <ThumbUpIcon />   
                    <Typography
                    variant="p"
                    component="p"
                    className={welcomeStyle.titleBegin}
                    >
                        Mantén una actitud positiva
                    </Typography>
                </div>
            </div>

        </div>
    )
}

function mapStateToProps({ addmissionForm, microsoftReducer}) {
    return {
        addmissionForm : addmissionForm,
        microsoftReducer: microsoftReducer
    }
}
export default connect(mapStateToProps)(Start)