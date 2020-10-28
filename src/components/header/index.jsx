import React from "react";
import { useDispatch } from "react-redux";
import { getComunStyle } from "../../css/comun";
import { getWelcomeStyle } from "../../css/welcomeStyle";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { logout } from "../../redux/actions/microsoft.action";

const Header = (props) => {
  const { userMsal } = props;
  const comunClass = getComunStyle();
  const welcomeStyle = getWelcomeStyle();
  const dispatch = useDispatch();

  const { iniciales, displayName } = userMsal;

  return (
    <div className={comunClass.header}>
      <div class="container" style={{display:"flex", width: "100%"}}>
        <img 
          alt="logo" 
          src={"static/letterACHS.svg"}
          // style={step === 0.1 ?  {width: "64px", height: "64px", marginLeft:"47%"}: {width: "64px", height: "64px", marginLeft:"25%"}}
          style={{width: "64px", height: "64px", margin:"auto 10%"}}   //marginLeft:"25%"
        />
        <div className={comunClass.containerHeader}>
          <div className={welcomeStyle.avatarContainer}>
            <Avatar className={welcomeStyle.avatarHeader}>
              {iniciales}
            </Avatar>
            <Typography
              variant="p"
              component="p"
              className={[
                comunClass.tituloCerrarSesion,
              ]}
            >
              {displayName}
            </Typography>
            {/* <div style={step > 1 && { display: "none" }}> */}
              <Typography
                variant="inherit"
                component="p"
                className={comunClass.tituloCerrarSesion}
                style={{ cursor: 'pointer'}}
                onClick={()=> dispatch(logout())}
              > 
                Cerrar sesión
              </Typography>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
