import React,{useState} from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { getComunStyle } from "../../css/comun";
import { makeStyles } from "@material-ui/core/styles";
import IdentificationCompany from './identificationCompany';
import RazonSocial from './RazonSocial';

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
            <Box p={1}>
                <Typography>{children}</Typography>
            </Box>
            )}
        </div>
        );
    }

    const classesComun = getComunStyle();

    const getUseStyles = makeStyles({
        root: {
          height: " 20px !important"
        },
      });
    
    const useStyles = getUseStyles();
      
    return (
      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="#E18F68"
          useStyles = {{
              root: useStyles.root
          }}
        >
          <Tab  className=
            {value ===0 ? classesComun.default_tabStyle :classesComun.active_tab}
            label="Razon Social"/>
          <Tab 
          className={value===1 ? classesComun.default_tabStyle :classesComun.active_tab}
          label="Rut"/>
          
        </Tabs>

        <TabPanel value={value} index={0}>
            <Typography
                variant="p"
                component="p"
                className={[classesComun.tituloTextbox]}
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
  