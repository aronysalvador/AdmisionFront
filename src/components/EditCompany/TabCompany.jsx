import React,{useState} from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { getComunStyle } from "../../css/comun";
import { makeStyles } from "@material-ui/core/styles";
import IdentificationCompany from './identificationCompany';
import RazonSocial from './RazonSocial';

const useStyles = makeStyles({
    root: {     
        minHeight:30,
        height: 30,
        background: '#F4F4F4',
        border: '2px solid #007A33',
        boxSizing: 'border-box',
        borderRadius: '4px',

        color: '#007A33',
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '18px',
    },
    root2: {     
        minHeight:30,
        height: 30,
        background: '#007A33',
        borderRadius: 4,
        color: '#F8F9FA',
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16
    }
  });

const TabCompany = (props) => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
 
        return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
  
        >
            {value === index && (
            <Box p={1}
            >
                <Typography>{children}</Typography>
            </Box>
            )}
        </div>
        );
    }

    const classesComun = getComunStyle();
    const classes = useStyles();
      
    return (
      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="#E18F68"
        >
          <Tab
            classes={value ===0 ? {root: classes.root2} : {root: classes.root}} 
            label="Razon Social"/>
          
          <Tab 
          classes={value ===1 ? {root: classes.root2} : {root: classes.root}}  
          label="Rut"/>
          
        </Tabs>

        <TabPanel value={value} index={0}
        >
            <Typography
                variant="p"
                component="p"
                className={classesComun.tituloTextbox}
            >
                Razón Social
            </Typography>
            
            <div>
                <RazonSocial />
            </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Typography
                variant="p"
                component="p"
                className={[classesComun.tituloTextbox]}
            >
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
  