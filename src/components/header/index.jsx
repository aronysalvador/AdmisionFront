import React from "react";
import { getComunStyle } from "../../css/comun";
import { getWelcomeStyle } from "../../css/welcomeStyle";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const header = (props) => {
  const { dispatch, userMsal } = props;
  const comunClass = getComunStyle();
  const welcomeStyle = getWelcomeStyle();

 const { iniciales, displayName } = userMsal;

  return (
    <div className={comunClass.header}>
      <img 
        alt="logo" 
        src={"static/letterACHS.svg"}
        // style={step === 0.1 ?  {width: "64px", height: "64px", marginLeft:"47%"}: {width: "64px", height: "64px", marginLeft:"25%"}}
        style={{width: "64px", height: "64px", margin:"auto 85%"}}   
      />
      <div className={welcomeStyle.avatarContainer}>
          <Avatar className={welcomeStyle.avatarHeader}>
            {/* GM */}
            {iniciales}
          </Avatar>
          <Typography
            variant="p"
            component="p"
            className={[
              comunClass.tituloCerrarSesion,
            ]}
          >
            {/* Gelen */}
            {displayName}
          </Typography>

          <Typography
            variant="inherit"
            component="p"
            className={comunClass.tituloCerrarSesion}
            style={{ cursor: 'pointer'}}
            onClick={()=> dispatch()}
          > 
            Cerrar sesión
          </Typography>
        </div>
        
    </div>
  );
};
export default header;
