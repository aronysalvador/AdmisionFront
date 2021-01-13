import React, {useState, useCallback,useEffect} from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import RutPaciente from "./rutPaciente";
import PasaportePaciente from "./pasaportePaciente";
import Grid from '@material-ui/core/Grid';
import { getComunStyle } from "../../css/comun";
import { makeStyles } from "@material-ui/core/styles";
import { getSpaceStyle } from "../../css/spaceStyle";
import Cabecera from "../../components/cabecera/index";
import { CLEAR_STATE } from "../../redux/types/addmissionFormType";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Header from "../../components/header/index";
import image from './../../img/identify.svg'

const useStyles = makeStyles({
  root: {
    minHeight: 30,
    height: 30,
    background: "#F4F4F4",
    border: "2px solid #007A33",
    boxSizing: "border-box",
    borderTopRightRadius: "15px",
    borderBottomRightRadius: "15px",
    color: "#007A33",
    fontFamily: "Catamaran",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "18px",
    minWidth: 155,
    width: 155,
    textTransform: "capitalize"
  },
  root2: {
    minHeight: 30,
    height: 30,
    background: "#007A33",
    borderTopLeftRadius: "15px",
    borderBottomLeftRadius: "15px",
    color: "#F8F9FA",
    fontFamily: "Catamaran",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 16,
    minWidth: 155,
    width: 155,
    textTransform: "capitalize"
  },
  root3: {
    minHeight: 30,
    height: 30,
    background: "#007A33",
    borderTopRightRadius: "15px",
    borderBottomRightRadius: "15px",
    color: "#F8F9FA",
    fontFamily: "Catamaran",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 16,
    minWidth: 155,
    width: 155,
    textTransform: "capitalize"
  },
  root4: {
    minHeight: 30,
    height: 30,
    background: "#F4F4F4",
    border: "2px solid #007A33",
    boxSizing: "border-box",
    borderTopLeftRadius: "15px",
    borderBottomLeftRadius: "15px",
    color: "#007A33",
    fontFamily: "Catamaran",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "18px",
    minWidth: 155,
    width: 155,
    verticalAlign:"midle",
    textTransform: "capitalize"
  },
});

const Identification = () => {
  const {
    addmissionForm: { percentage , tab}, microsoftReducer
  } = useSelector((state) => state, shallowEqual);
  
  const dispatch = useDispatch();

  const initFn = useCallback(() => {
    dispatch({ type: CLEAR_STATE });
    dispatch(handleSetStep(3));
  }, [dispatch]);

  useEffect(() => {
    initFn()
  }, [initFn]);
  
  const comunClass = getComunStyle();
  const classes = useStyles();
  const spaceStyle = getSpaceStyle();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(updateForm("tab", newValue));
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;   
    return (
      <div {...other}>
        {value === index && <div p={3}>{children}</div>}
      </div>
    );
  }

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          id={"Identification-BtnBack"}
          dispatch={() => dispatch(handleSetStep(2))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={`${comunClass.titleBlack} ${comunClass.textPrimaryDesk}`}>
          Ingresa el           
          <Grid component="span"  className={`${comunClass.titleBlue} ${comunClass.titleBlue2}`} style={{display: "contents"}}>
            &nbsp;RUT o documento de identidad
          </Grid>
          &nbsp;del paciente
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="identify" src={image} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.displayMobile}> 
          <div className={spaceStyle.space2} />
        </div>
        <div className={comunClass.containerTextBox}>
            <Tabs value={value} onChange={handleChange} indicatorColor="#E18F68" centered>
              <Tab classes={ value === 0 ? { root: classes.root2 } : { root: classes.root4 }} label="RUT" id={"Identification-Tab0"} />
              <Tab classes={value === 1 ? { root: classes.root3 } : { root: classes.root }} label="Pasaporte" id={"Identification-Tab1"} />
            </Tabs>

            <TabPanel value={tab} index={0}>
              <RutPaciente/>
            </TabPanel>

            <TabPanel value={tab} index={1}>
              <PasaportePaciente/>
            </TabPanel>
          </div>
      </div>
    </div>
  );
};

export default Identification;
