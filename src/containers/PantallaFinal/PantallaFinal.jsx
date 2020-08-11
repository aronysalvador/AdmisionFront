import React from "react";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import Link from "@material-ui/core/Link";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import Cabecera from "../../components/cabecera/index";

import { getWelcomeStyle } from "../../css/welcomeStyle";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";

const PantallaFinal = (props) => {
  const { dispatch, microsoftReducer } = props;
  const welcomeStyle = getWelcomeStyle();
  const comunStyle = getComunStyle();
  const spaceStyle = getSpaceStyle();
  return (
    <div className={comunStyle.rootBegin}>
      <div className={welcomeStyle.beginContainer}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(1))}
          percentage={-1}
          noSpace={true}
        />
        <div className={spaceStyle.space2}>
          <div className={welcomeStyle.avatarContainerRight}>
            <Avatar className={welcomeStyle.avatarBegin}>
              {microsoftReducer.userMsal.iniciales}
            </Avatar>
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

      <div className={welcomeStyle.beginContainerCard}>
        <div className={welcomeStyle.titleContainer}>
          <div className={welcomeStyle.divRow}>
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

      <div className={welcomeStyle.beginContainer}>
        <Typography
          variant="h5"
          component="h5"
          className={welcomeStyle.subTitleBegin}
        >
          Por ahora ten en cuenta:
        </Typography>

        <div className={welcomeStyle.titleContainerCards}>
          <div className={welcomeStyle.divRowBottom}>
            <svg
              width="26"
              height="20"
              viewBox="0 0 26 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.16667 0H23.8333C24.9708 0 26 1.05556 26 2.22222V17.7778C26 18.9444 24.9708 20 23.8333 20H2.16667C1.02917 20 0 18.9444 0 17.7778V2.22222C0 1.05556 1.02917 0 2.16667 0ZM15.1667 3.33333V4.44444H23.8333V3.33333H15.1667ZM15.1667 5.55556V6.66667H23.8333V5.55556H15.1667ZM15.1667 7.77778V8.88889H22.75V7.77778H15.1667ZM8.66667 12.1222C6.5 12.1222 2.16667 13.3333 2.16667 15.5556V16.6667H15.1667V15.5556C15.1667 13.3333 10.8333 12.1222 8.66667 12.1222ZM8.66667 3.33333C7.80471 3.33333 6.97806 3.68452 6.36857 4.30964C5.75908 4.93477 5.41667 5.78261 5.41667 6.66667C5.41667 7.55072 5.75908 8.39857 6.36857 9.02369C6.97806 9.64881 7.80471 10 8.66667 10C9.52862 10 10.3553 9.64881 10.9648 9.02369C11.5743 8.39857 11.9167 7.55072 11.9167 6.66667C11.9167 5.78261 11.5743 4.93477 10.9648 4.30964C10.3553 3.68452 9.52862 3.33333 8.66667 3.33333Z"
                fill="black"
              />
            </svg>
            <div className={welcomeStyle.itemBegin}>
              <Typography
                variant="p"
                component="p"
                className={welcomeStyle.itemText}
              >
                Identificar al paciente
              </Typography>
              <Typography
                variant="p"
                component="p"
                className={welcomeStyle.pBegin}
              >
                recibirás todo para ser atendido
              </Typography>
            </div>
          </div>

          <div className={welcomeStyle.divRowBottom}>
            <svg
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.75 0.5H3.25C1.87125 0.5 0.75 1.62125 0.75 3V18C0.75 19.3787 1.87125 20.5 3.25 20.5H7.625L12 25.5L16.375 20.5H20.75C22.1287 20.5 23.25 19.3787 23.25 18V3C23.25 1.62125 22.1287 0.5 20.75 0.5ZM8.25 13C7.92161 12.9999 7.59646 12.9352 7.2931 12.8094C6.98974 12.6837 6.71412 12.4994 6.48197 12.2671C6.24983 12.0349 6.0657 11.7592 5.94011 11.4557C5.81452 11.1523 5.74992 10.8271 5.75 10.4987C5.75008 10.1704 5.81484 9.84521 5.94059 9.54185C6.06633 9.23849 6.2506 8.96287 6.48286 8.73072C6.71512 8.49858 6.99083 8.31445 7.29426 8.18886C7.59768 8.06327 7.92286 7.99867 8.25125 7.99875C8.91446 7.99892 9.55044 8.26253 10.0193 8.73161C10.4881 9.20068 10.7514 9.83679 10.7513 10.5C10.7511 11.1632 10.4875 11.7992 10.0184 12.268C9.54932 12.7369 8.91321 13.0002 8.25 13ZM15.75 13C15.4216 12.9999 15.0965 12.9352 14.7931 12.8094C14.4897 12.6837 14.2141 12.4994 13.982 12.2671C13.7498 12.0349 13.5657 11.7592 13.4401 11.4557C13.3145 11.1523 13.2499 10.8271 13.25 10.4987C13.2501 10.1704 13.3148 9.84521 13.4406 9.54185C13.5663 9.23849 13.7506 8.96287 13.9829 8.73072C14.2151 8.49858 14.4908 8.31445 14.7943 8.18886C15.0977 8.06327 15.4229 7.99867 15.7513 7.99875C16.4145 7.99892 17.0504 8.26253 17.5193 8.73161C17.9881 9.20068 18.2514 9.83679 18.2512 10.5C18.2511 11.1632 17.9875 11.7992 17.5184 12.268C17.0493 12.7369 16.4132 13.0002 15.75 13Z"
                fill="black"
              />
            </svg>

            <div className={welcomeStyle.itemBegin}>
              <Typography
                variant="p"
                component="p"
                className={welcomeStyle.itemText}
              >
                Tomar el relato
              </Typography>
              <Typography
                variant="p"
                component="p"
                className={welcomeStyle.pBegin}
              >
                incluso al llegar al centro ACHS
              </Typography>
            </div>
          </div>

          <div className={welcomeStyle.divRow}>
            <svg
              width="26"
              height="25"
              viewBox="0 0 26 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 5.5H18V3C18 1.6125 16.8875 0.5 15.5 0.5H10.5C9.1125 0.5 8 1.6125 8 3V5.5H3C1.6125 5.5 0.5125 6.6125 0.5125 8L0.5 21.75C0.5 23.1375 1.6125 24.25 3 24.25H23C24.3875 24.25 25.5 23.1375 25.5 21.75V8C25.5 6.6125 24.3875 5.5 23 5.5ZM15.5 5.5H10.5V3H15.5V5.5Z"
                fill="black"
              />
            </svg>

            <div className={welcomeStyle.itemBegin}>
              <Typography
                variant="p"
                component="p"
                className={welcomeStyle.itemText}
              >
                Solicitud de datos
              </Typography>
              <Typography
                variant="p"
                component="p"
                className={welcomeStyle.pBegin}
              >
                pero no tendrás que esperar en sala
              </Typography>
            </div>
          </div>
        </div>

        <div className={welcomeStyle.bottomBegin}>
          <Button
            className={comunStyle.buttonAchs}
            variant="contained"
            onClick={() => dispatch(handleSetStep(2))}
          >
            Entendido
          </Button>
        </div>

        <div className={welcomeStyle.beginContainer}>
          <Typography
            variant="p"
            component="p"
            display="block"
            className={[comunStyle.textAchsContent, welcomeStyle.terminos]}
          >
            Al hacer click en empezar,
            <Link
              className={[
                comunStyle.textAchsContent,
                welcomeStyle.terminos,
                welcomeStyle.terminos,
              ]}
              component="button"
              variant="body2"
              onClick={() => dispatch(handleSetStep(4))}
            >
              aceptas nuestros{" "}
              <span style={{ textDecoration: "underline" }}>
                Términos y condiciones
              </span>
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ addmissionForm, microsoftReducer }) {
  return {
    addmissionForm: addmissionForm,
    microsoftReducer: microsoftReducer,
  };
}
export default connect(mapStateToProps)(PantallaFinal);
