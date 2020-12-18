import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getComunStyle } from "../../css/comun";
import { getWelcomeStyle } from "../../css/welcomeStyle";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { logout } from "../../redux/actions/microsoft.action";
import image from './../../img/letterACHS.svg'

const Header = (props) => {
  const { userMsal } = props;
  const { iniciales, displayName } = userMsal;
  const { addmissionForm: { step } } = useSelector((state) => state, shallowEqual);

  const dispatch = useDispatch();

  const comunClass = getComunStyle();
  const welcomeStyle = getWelcomeStyle();

  return (
    <div className={comunClass.header}>
      <div className="container" style={{display:"flex", width: "100%"}}>
        <img 
          alt="logo" 
          src={image}
          style={{width: "64px", height: "64px", margin:"auto 10%"}}   //marginLeft:"25%"
        />
        <div className={comunClass.containerHeader}>
          <div className={welcomeStyle.avatarContainer}>
            <Avatar className={welcomeStyle.avatarHeader}>
              {iniciales}
            </Avatar>
            <Grid className={comunClass.tituloCerrarSesion}>
              {displayName}
            </Grid>
            {(step === 1 || step === 1.1 || step === 40 || step === 1001) && 
              <Grid
                className={comunClass.tituloCerrarSesion}
                style={{ cursor: 'pointer'}}
                onClick={()=> dispatch(logout())}
              > 
                Cerrar sesión
              </Grid> }
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
