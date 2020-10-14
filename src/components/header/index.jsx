import React from "react";
import { getComunStyle } from "../../css/comun";
import { getWelcomeStyle } from "../../css/welcomeStyle";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
// import { shallowEqual, useSelector } from "react-redux";


const header = (props) => {
  const { dispatch, microsoftReducer  } = props;
  const comunClass = getComunStyle();
  const welcomeStyle = getWelcomeStyle();

//   const {
//     microsoftReducer: { userMsal },
//   } = useSelector((state) => state, shallowEqual);

//  const { iniciales, displayName } = userMsal;


  return (
    <div className={comunClass.header}>
      <img 
        alt="logo" 
        src={"static/letterACHS.svg"}
        // style={step === 0.1 ?  {width: "64px", height: "64px", marginLeft:"47%"}: {width: "64px", height: "64px", marginLeft:"25%"}}
        style={{width: "64px", height: "64px", margin:"auto 85%"}}   
      />
      <div className={welcomeStyle.avatarContainer}>
          <Avatar className={welcomeStyle.avatar}>
            GM
            {/* {microsoftReducer.userMsal.iniciales} */}
          </Avatar>
          <Typography
            variant="p"
            component="p"
            className={[
              comunClass.tituloCerrarSesion,
            ]}
          >
            Gelen
            {/* {microsoftReducer.userMsal.displayName} */}
          </Typography>

          <Typography
            variant="inherit"
            component="p"
            className={comunClass.tituloCerrarSesion}
            onClick={()=> dispatch()}
          > 
            Cerrar sesión
          </Typography>
        </div>
        
    </div>
  );
};
export default header;
