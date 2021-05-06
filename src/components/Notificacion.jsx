import { getWelcomeStyle } from "../css/welcomeStyle";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
export default function Notificacion({ color, children, iconColor = '#000' }) {
    const welcomeStyle = getWelcomeStyle();

    return (
        <div className={welcomeStyle.titleContainerNotification} style={{background: color}}>
            <ErrorOutlineIcon style={{color: iconColor}} /> {children}
        </div>
    );
}
