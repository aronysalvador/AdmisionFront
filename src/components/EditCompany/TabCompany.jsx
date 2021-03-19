import { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { getComunStyle } from "../../css/comun";
import { makeStyles } from "@material-ui/core/styles";
import IdentificationCompany from "./identificationCompany";
import RazonSocial from "./RazonSocial";
import TabPanel from "./TabPanel";

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
    width: 155
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
    width: 155
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
    width: 155
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
    verticalAlign: "midle"
  }
});

const TabCompany = () => {
  const [ value, setValue ] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const comunClass = getComunStyle();
  const classes = useStyles();

  return (
    <div className={comunClass.containerTextBox}>
      <Tabs value={value} onChange={handleChange} indicatorColor='#E18F68'
centered
      >
        <Tab
          id={"TabCompany-Tab0"}
          classes={ value === 0 ? { root: classes.root2 } : { root: classes.root4 } }
          label='Razón Social'
          style={{textTransform: 'none'}}
        />
        <Tab
          id={"TabCompany-Tab1"}
          classes={ value === 1 ? { root: classes.root3 } : { root: classes.root } }
          label='RUT'
        />
      </Tabs>

      <TabPanel value={value} index={0} style={{padding: "0"}}>
        <Typography className={comunClass.tituloTextBox} style={{marginBottom: '8px'}}>
          Razón Social
        </Typography>
        <div>
          <RazonSocial />
        </div>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Typography className={comunClass.tituloTextBox}>
          RUT
        </Typography>
        <div>
          <IdentificationCompany />
        </div>
      </TabPanel>

    </div>
  );
};

export default TabCompany;
