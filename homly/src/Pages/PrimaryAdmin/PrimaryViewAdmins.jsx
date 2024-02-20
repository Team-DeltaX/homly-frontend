// // import '../App.css';
// import PageTopnb from '../../Components/PrimaryAdmin/PageTopnb'
import React, {  useContext, useState } from "react";
import SideNavbar from "../../Components/PrimaryAdmin/SideNavbar";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Box from "@mui/material/Box";
import { CustomTabContext } from "../../Contexts/primryadmin/CustomTabContext";
import {
  Button,
  Container,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import theme from "../../HomlyTheme";
import { Link } from "react-router-dom";
import PageTop from "../../Components/PrimaryAdmin/PageTop";
import CustomTabPanel from '../../Components/PrimaryAdmin/CustomTabPanel'
const PrimaryViewAdmins = () => {
  // const data = [
  //   {
  //     Service_number: 1,
  //     Nic_number: 27,
  //     User_name: "Lonnie Antonioni",
  //     date: "1/31/2023",
  //     image: "http://dummyimage.com/130x100.png/cc0000/ffffff",
  //   },
  //   {
  //     Service_number: 2,
  //     Nic_number: 1014,
  //     User_name: "Carlita Cominello",
  //     date: "9/13/2023",
  //     image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  //   },
  //   {
  //     Service_number: 3,
  //     Nic_number: 929,
  //     User_name: "Rosene Loweth",
  //     date: "7/18/2023",
  //     image: "http://dummyimage.com/187x100.png/dddddd/000000",
  //   },
  //   {
  //     Service_number: 4,
  //     Nic_number: 32,
  //     User_name: "Brittan Furby",
  //     date: "8/25/2023",
  //     image: "http://dummyimage.com/122x100.png/5fa2dd/ffffff",
  //   },
  //   {
  //     Service_number: 5,
  //     Nic_number: 9910,
  //     User_name: "Zebulon Pinson",
  //     date: "9/25/2023",
  //     image: "http://dummyimage.com/130x100.png/5fa2dd/ffffff",
  //   },
  //   {
  //     Service_number: 6,
  //     Nic_number: 56905,
  //     User_name: "Ara Tembey",
  //     date: "11/26/2023",
  //     image: "http://dummyimage.com/157x100.png/5fa2dd/ffffff",
  //   },
  //   {
  //     Service_number: 7,
  //     Nic_number: 9742,
  //     User_name: "Alleyn Melliard",
  //     date: "8/8/2023",
  //     image: "http://dummyimage.com/156x100.png/dddddd/000000",
  //   },
  //   {
  //     Service_number: 8,
  //     Nic_number: 6,
  //     User_name: "Wilfrid Grinyer",
  //     date: "5/9/2023",
  //     image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  //   },
  //   {
  //     Service_number: 9,
  //     Nic_number: 948,
  //     User_name: "Yvon Inchbald",
  //     date: "7/17/2023",
  //     image: "http://dummyimage.com/172x100.png/5fa2dd/ffffff",
  //   },
  //   {
  //     Service_number: 10,
  //     Nic_number: 4,
  //     User_name: "Torrie White",
  //     date: "6/10/2023",
  //     image: "http://dummyimage.com/162x100.png/5fa2dd/ffffff",
  //   },
  // ];
  // const [blacklistedusers, setBlacklistedusers] = useState([]);

  // useEffect(() => {
  //   setBlacklistedusers(data);
  // }, []);

  const [showNav, setShowNav] = useState("nav_grid_deactive");
  
  const{ load,SetLoad}=useContext(CustomTabContext)

  return (
    <ThemeProvider theme={theme}>
      <Box
        className="main_continer"
        sx={{
          width: "100%",
          backgroundColor: "primary.main",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl" style={{ padding: "0px" }}>
          <Grid container sx={{ position: "relative" }}>
            <Grid
            item
              className={showNav}
              xs={3}
              sx={{ backgroundColor: "primary.main", height: "100vh" }}
            >
              <SideNavbar setShowNav={showNav}></SideNavbar>
            </Grid>
            <Grid
              className="container_grid"
              xs={9}
              sx={{
                backgroundColor: "white",
                borderTopLeftRadius: "20px",
                padding: "0 20px",
              }}
            >
              <Box>
                <PageTop setShowNav={setShowNav} heading={"View Admins"} />
              </Box>
             
              {/* <Box
                sx={{ marginTop: "2%", maxHeight: "530px", overflow: "scroll" }}
              >
                {blacklistedusers.map((item) => {
                  return (
                    <ViewAdminCard2 data={item} key={item.Service_number} />
                  );
                })}
              </Box> */}
              
              
            
              <Box >
              <CustomTabPanel />

              </Box>

             
              
              <Box>
               {!load && <Box><Link to="/primaryadmin/addadmin">
                <Button
                    sx={{
                      marginLeft: { md: "75%", xs: "10%" },
                      width: "170px",
                      marginTop: { xs: "8%", md: "1%" },
                    }}
                    component="label"
                    variant="contained"
                    startIcon={<AddCircleIcon />}
                  >
                    <Typography>Add Admin</Typography>
                  </Button>
                </Link></Box>}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default PrimaryViewAdmins;
