import { getWelcomeStyle } from "../../css/welcomeStyle";
import { getComunStyle } from "../../css/comun";
import Typography from "@material-ui/core/Typography";

const IndiciacionesPacientes = ({ indicaciones }) => {
  const welcomeStyle = getWelcomeStyle();
  const comunStyle = getComunStyle();

  return (
    <div className={[ welcomeStyle.titleContainerCards ].join(' ')}>
      <div className={comunStyle.displayDeskFlexFinal}>
      {indicaciones.map(({ icono, textoPrimario, textoSecundario, clase, style }, i) => (
        <div key={i} className={clase} style={style}>
          <div className={welcomeStyle.iconAlignIndicaciones}>
            <img src={`${icono}`} alt={`${icono}`} />
          </div>
          <div className={welcomeStyle.itemBegin}>
            <Typography
              variant='inherit'
              component='p'
              className={welcomeStyle.itemText}
            >
              {textoPrimario}
            </Typography>
            <Typography
              variant='inherit'
              component='p'
              className={welcomeStyle.pBegin}
            >
              {textoSecundario}
            </Typography>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default IndiciacionesPacientes;
