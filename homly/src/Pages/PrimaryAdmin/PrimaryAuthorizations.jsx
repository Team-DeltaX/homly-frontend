

import React,{ useState} from 'react'
import SideNavbar from '../../Components/PrimaryAdmin/SideNavbar'
// import ComplaintCard from '../../Components/PrimaryAdmin/ComplaintCard';
import Box from '@mui/material/Box';
import { Container, Grid,ThemeProvider } from '@mui/material';
import theme from '../../HomlyTheme';
import Pagetop from '../../Components/PrimaryAdmin/PageTop';
// import Search from '../../Components/PrimaryAdmin/Search';
import AuthorizationsCard from '../../Components/PrimaryAdmin/authorizationsCard';
import Model from '../../Components/PrimaryAdmin/Model';
// import { Mode } from '@mui/icons-material';

const PrimaryAuthorizations = () => {
    const [popup,setpopup]=useState(false)
    const data = [
        { Service_number: 1, Nic_number: 27, User_name: 'Lonnie Antonioni', date: '1/31/2023', image: 'http://dummyimage.com/130x100.png/cc0000/ffffff' },
        { Service_number: 2, Nic_number: 1014, User_name: 'Carlita Cominello', date: '9/13/2023', image: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff' },
        { Service_number: 3, Nic_number: 929, User_name: 'Rosene Loweth', date: '7/18/2023', image: 'http://dummyimage.com/187x100.png/dddddd/000000' },
        { Service_number: 4, Nic_number: 32, User_name: 'Brittan Furby', date: '8/25/2023', image: 'http://dummyimage.com/122x100.png/5fa2dd/ffffff' },
        { Service_number: 5, Nic_number: 9910, User_name: 'Zebulon Pinson', date: '9/25/2023', image: 'http://dummyimage.com/130x100.png/5fa2dd/ffffff' },
        { Service_number: 6, Nic_number: 56905, User_name: 'Ara Tembey', date: '11/26/2023', image: 'http://dummyimage.com/157x100.png/5fa2dd/ffffff' },
        { Service_number: 7, Nic_number: 9742, User_name: 'Alleyn Melliard', date: '8/8/2023', image: 'http://dummyimage.com/156x100.png/dddddd/000000' },
        { Service_number: 8, Nic_number: 6, User_name: 'Wilfrid Grinyer', date: '5/9/2023', image: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff' },
        { Service_number: 9, Nic_number: 948, User_name: 'Yvon Inchbald', date: '7/17/2023', image: 'http://dummyimage.com/172x100.png/5fa2dd/ffffff' },
        { Service_number: 10, Nic_number: 4, User_name: 'Torrie White', date: '6/10/2023', image: 'http://dummyimage.com/162x100.png/5fa2dd/ffffff' }
    ];
    
    const [showNav,setShowNav] = useState('nav_grid_deactive')


    return (
    <ThemeProvider theme={theme}>
        <Box className="main_continer" sx={{width:"100%",backgroundColor:'primary.main',height:"100vh",overflow:'hidden'}}>
            {popup && <Model setpopup={setpopup} popup={popup}/>}
            <Container maxWidth="xl" style={{padding:"0px"}} >
                <Grid container  sx={{position:'relative'}}>
                
                    <Grid className={showNav} xs={3} sx={{backgroundColor:"primary.main",height:"100vh"}}>
                        <SideNavbar setShowNav={setShowNav} ></SideNavbar>
                    </Grid>
                    <Grid className='container_grid' xs={9} sx={{backgroundColor:'white',borderTopLeftRadius:'20px',padding:'0 20px'}}>
                    <Pagetop setShowNav={setShowNav} heading={"Authorizations"}/>
                
                    <Box sx={{marginTop:'2%',marginLeft:"2%",maxHeight:"630px",overflow:"scroll",}}>
                       <Box sx={{display:'flex',flexWrap:'wrap'}}>
                
                
                
                              {/* {createPortal(<Model/>,document.body)} */}
                              {data.map((item)=>{
                                return  <AuthorizationsCard setpopup={setpopup} popup={popup} />
                              })}
                
                       </Box>
                
                
                      </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </ThemeProvider>
  )
}

export default PrimaryAuthorizations