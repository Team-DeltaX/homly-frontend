
// import '../App.css';
// import PageTop from '../components/PageTop'
// import React, { useEffect, useState } from 'react'
// import SideNavbar from '../components/SideNavbar'

// import Box from '@mui/material/Box';
// import { Button, Grid, ThemeProvider,Container } from '@mui/material';
// import theme from '../Homlytheme';
// import BlacklistedUsersList from '../components/BlacklistedUsersList';
// import Search from '../components/Search';
// import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
// import BlacklistedUsersCardNew from '../components/BlacklistedUsersCardNew';
// import ViewPopupManage from '../components/ViewPopupManage';

// const ManageBlacklistedUsers = () => {

//     const [popup,setpopup]=useState(false)
//     const [selecteduser,setSelecteduser]=useState({})

//     const handlepopup=()=>{
//         setpopup(!popup)
//     }




//     const data = [
//         { Service_number: 1, Nic_number: 27, User_name: 'Lonnie Antonioni', date: '1/31/2023', image: 'http://dummyimage.com/130x100.png/cc0000/ffffff' },
//         { Service_number: 2, Nic_number: 1014, User_name: 'Carlita Cominello', date: '9/13/2023', image: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff' },
//         { Service_number: 3, Nic_number: 929, User_name: 'Rosene Loweth', date: '7/18/2023', image: 'http://dummyimage.com/187x100.png/dddddd/000000' },
//         { Service_number: 4, Nic_number: 32, User_name: 'Brittan Furby', date: '8/25/2023', image: 'http://dummyimage.com/122x100.png/5fa2dd/ffffff' },
//         { Service_number: 5, Nic_number: 9910, User_name: 'Zebulon Pinson', date: '9/25/2023', image: 'http://dummyimage.com/130x100.png/5fa2dd/ffffff' },
//         { Service_number: 6, Nic_number: 56905, User_name: 'Ara Tembey', date: '11/26/2023', image: 'http://dummyimage.com/157x100.png/5fa2dd/ffffff' },
//         { Service_number: 7, Nic_number: 9742, User_name: 'Alleyn Melliard', date: '8/8/2023', image: 'http://dummyimage.com/156x100.png/dddddd/000000' },
//         { Service_number: 8, Nic_number: 6, User_name: 'Wilfrid Grinyer', date: '5/9/2023', image: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff' },
//         { Service_number: 9, Nic_number: 948, User_name: 'Yvon Inchbald', date: '7/17/2023', image: 'http://dummyimage.com/172x100.png/5fa2dd/ffffff' },
//         { Service_number: 10, Nic_number: 4, User_name: 'Torrie White', date: '6/10/2023', image: 'http://dummyimage.com/162x100.png/5fa2dd/ffffff' }
//     ];
//     const [blacklistedusers, setBlacklistedusers] = useState([]);

//     useEffect(() => {
//         setBlacklistedusers(data)

//     }, [])

//     const [showNav,setShowNav] = useState('nav_grid_deactive')


//     return (
//         <ThemeProvider theme={theme}>
//             <Box className="main_continer" sx={{ width: "100%", backgroundColor: 'primary.main', height: "100vh", overflow: "hidden" }}>
//             {/* {popup && <ViewPopupManage handlepopup={handlepopup} selecteduser={selecteduser}/>} */}

//                 <Container maxWidth="xl" style={{padding:"0px"}}>
//                     <Grid container maxWidth="xl" style={{padding:"0px"}} >
//                         <Grid className={showNav} xs={3} sx={{ backgroundColor: "primary.main", height: "100vh" }}>
//                             <SideNavbar setShowNav={setShowNav}></SideNavbar>
//                         </Grid>
//                         <Grid className='container_grid' xs={9} sx={{ backgroundColor: 'white', borderTopLeftRadius: '20px', padding: '0 20px' }}>
//                            <Box sx={{display:"flex",flexDirection:"column",marginTop:{sm:'20px'}}}>
//                            <Box><PageTop setShowNav={setShowNav} heading={"Blacklist User Manage"} /></Box>
//                             {/* <BlacklistedUsersList/> */}
//                             {/* <Box><Search /></Box> */}
//                             <Box sx={{ marginTop: '2%', maxHeight:'470px', overflow:'scroll',padding:"3%" }}>
//                                 {blacklistedusers.map((data) => {
//                                     return (
//                                         <BlacklistedUsersCardNew handlepopup={handlepopup} data={data} setSelecteduser={setSelecteduser}/>
                    
//                                     )
//                                 })}
                    
//                             </Box>
//                             <Box>
//                             <Button sx={{fontFamily:'Roboto',marginLeft:"5%",marginTop:{xs:'10%',sm:'2px'}}} component="label" variant="contained" startIcon={<PictureAsPdfIcon  />}>
//                               Download Excel
                    
//                             </Button>
//                             </Box>
//                            </Box>
//                         </Grid>
//                     </Grid>
//                 </Container>
//             </Box>
//         </ThemeProvider>
//     )
// }

// export default ManageBlacklistedUsers

// import '../App.css';

// import React,{useEffect, useState} from 'react'
// import SideNavbar from '../components/SideNavbar'

// import Box from '@mui/material/Box';
// import { Container, Grid,ThemeProvider } from '@mui/material';
// import theme from '../Homlytheme';
import Pagetop from '../../Components/PrimaryAdmin/PageTop';





// import '../App.css';
// import PageTop from '../../Components/PrimaryAdmin/PageTop'
import React, { useEffect, useState } from 'react'
import SideNavbar from '../../Components/PrimaryAdmin/SideNavbar'

import Box from '@mui/material/Box';
import { Button, Grid, ThemeProvider, Container } from '@mui/material';
import theme from '../../HomlyTheme';
// import BlacklistedUsersList from '../../Components/PrimaryAdmin/BlacklistedUsersList';
// import Search from '../../Components/PrimaryAdmin/Search';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import BlacklistedUsersCardNew from '../../Components/PrimaryAdmin/BlacklistedUsersCardNew';
import ViewPopupManage from '../../Components/PrimaryAdmin/ViewPopupManage';
import SearchNew from '../../Components/PrimaryAdmin/SearchNew';
import '../../Components/PrimaryAdmin/Css/fontchange.css'










const PrimaryManageBlacklistedUsers = () => {



    const [search,setSearch]=useState('')
    const [popup, setpopup] = useState(false)
    const [selecteduser, setSelecteduser] = useState({})

    const handlepopup = () => {
        setpopup(!popup)
    }




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
    const [blacklistedusers, setBlacklistedusers] = useState([]);

    useEffect(() => {
        setBlacklistedusers(data)

    }, [])









    const [showNav, setShowNav] = useState('nav_grid_deactive')

    return (
        <ThemeProvider theme={theme}>
            <Box className="main_continer" sx={{ width: "100%", backgroundColor: 'primary.main', height: "100vh", overflow: 'hidden' }}>
                {popup && <ViewPopupManage handlepopup={handlepopup} selecteduser={selecteduser} />}
                <Container maxWidth="xl" style={{ padding: "0px" }}>
                    <Grid container sx={{ position: 'relative' }}>
                        <Grid className={showNav} xs={3} sx={{ backgroundColor: "primary.main", height: "100vh" }}>
                            <SideNavbar setShowNav={setShowNav}></SideNavbar>
                        </Grid>

                        <Grid className='container_grid' xs={9} sx={{ backgroundColor: 'white', borderTopLeftRadius: '20px', padding: '0 20px' ,height:'100vh'}}>
                            <Pagetop setShowNav={setShowNav} heading={"Manage Blacklist"} />
                            <SearchNew setSearch={setSearch} search={search}/>
                          


                            <Box sx={{  maxHeight: '470px', overflow: 'scroll', padding: "2%" }}>
                                {blacklistedusers.filter((data)=>{
                                    const serviceNumberString = String(data.Service_number);
                                    return (search.toLowerCase()==='')?data:
                                   ( serviceNumberString.toLowerCase().startsWith(search.toLocaleLowerCase()) ) ||
                                   (data.User_name.toLowerCase().startsWith(search.toLocaleLowerCase()))
                                }).map((data) => {
                                    return (
                                        <BlacklistedUsersCardNew handlepopup={handlepopup} data={data} setSelecteduser={setSelecteduser} />

                                    )
                                })}

                            </Box>
                            <Box>
                                <Button sx={{  marginLeft: "5%", marginTop: { xs: '10%', sm: '1.5%' } }} component="label" variant="contained" startIcon={<PictureAsPdfIcon />}>
                                    Download Excel

                                </Button>
                            </Box>






                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    )
}

export default PrimaryManageBlacklistedUsers