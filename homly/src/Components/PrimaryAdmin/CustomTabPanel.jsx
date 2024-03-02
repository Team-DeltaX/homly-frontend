import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CurrentAdminslist from "./CurrentAdminslist";
import DisabledAdminslist from "../../Components/PrimaryAdmin/DisabledAdminslist";
import theme from "../../HomlyTheme";
import { ThemeProvider } from "@emotion/react";


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
  <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Ongoing Admins" {...a11yProps(0)} sx={{fontFamily:'roboto'}}/>
          <Tab label="Disabled Admins" {...a11yProps(1)} sx={{fontFamily:'roboto'}} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <CurrentAdminslist />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <DisabledAdminslist />
      </CustomTabPanel>
    </Box>
  </ThemeProvider>
  );
}
