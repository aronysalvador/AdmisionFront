import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
      border: 0,
      padding: '0px',
      margin: 0
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700]
    },
    bar: {
      borderRadius: 5,
      backgroundColor: "#007A33",
      border: 0,
      padding: '0px',
      margin: 0
    }
  }))(LinearProgress);

  export default BorderLinearProgress;