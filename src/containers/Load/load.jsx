import { makeStyles } from "@material-ui/core/styles";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import image from './../../img/Loader_1.gif'

const getUseStyles = makeStyles({
  center2: {
    paddingLeft: "7.625em",
    paddingRight: "7.625em",
    padding: "0em"
  },
  img2: {
    width: "7.28125em"
  }
});

const Load = () => {
  const spaceStyle = getSpaceStyle();
  const useStyles = getUseStyles();
  const comunClass = getComunStyle();

  return (
    <div className={comunClass.root}>
      <div className={spaceStyle.space12} />
      <div className={useStyles.center2}>
        <img
          alt='load'
          src={image}
          className={useStyles.img2}
        />
      </div>
    </div>
  );
};

export default Load;
