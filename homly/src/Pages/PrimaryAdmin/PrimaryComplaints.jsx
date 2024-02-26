
// import '../App.css';

import React,{useEffect, useState} from 'react'
import SideNavbar from '../../Components/PrimaryAdmin/SideNavbar'
import ComplaintCard from '../../Components/PrimaryAdmin/ComplaintCard';
import Box from '@mui/material/Box';
import { Container, Grid,ThemeProvider } from '@mui/material';
import theme from '../../HomlyTheme';
import Pagetop from '../../Components/PrimaryAdmin/PageTop';
// import Search from '../../Components/PrimaryAdmin/Search';
import ViewPopupComplaints from '../../Components/PrimaryAdmin/ViewPopupComplints';
import axios from 'axios';

const PrimaryComplaints = () => {

    const [popup,setpopup]=useState(false)
    const [selecteduser,setSelecteduser]=useState({})
    const [complaints, setcomplaints] = useState([]);
    const [prevcomplaints,setPrevcomplaints]=useState([])
   


    const handlepopup=()=>{
        setpopup(!popup)
    }


    




    const fetchprevcomplaints=()=>{
        console.log('start')
        axios.get(`http://localhost:3002/admin/auth/locationadmin/complaint/${selecteduser.ServiceNo}`)
        .then((res)=>{
          setPrevcomplaints(res.data)
          console.log('finish')
          console.log('---------fetch prev complaints--------')
          console.log(res.data)
          // console.log(prevcomplaints[0])
        //   setLen(prevcomplaints.length)
        //   console.log(len)
    
        })
        .catch(err=>{
          console.log(err)
        })
    
    }


    const fetchcomplaints=()=>{
        axios.get('http://localhost:3002/admin/auth/locationadmin/complaints')
        .then(res=>{
            setcomplaints(res.data)
            
            

        }).catch(err=>{
            console.log(err)
        })
    }
   
    useEffect(() => {
       fetchcomplaints();

    }, [])

    const [showNav,setShowNav] = useState('nav_grid_deactive')

  

    return (
    <ThemeProvider theme={theme}>
        <Box className="main_continer" sx={{width:"100%",backgroundColor:'primary.main',height:"100vh",overflow:'hidden'}}>


        {popup && <ViewPopupComplaints handlepopup={handlepopup} selecteduser={selecteduser} complaints={complaints} fetchprevcomplaints={fetchprevcomplaints}  prevcomplaints={prevcomplaints} popup={popup} />}



            <Container maxWidth="xl" style={{padding:"0px"}}>
                <Grid container  sx={{position:'relative'}} >
                    <Grid className={showNav}  xs={3} sx={{backgroundColor:"primary.main",height:"100vh"}}>
                        <SideNavbar setShowNav={setShowNav}></SideNavbar>
                    </Grid>
                    <Grid className='container_grid' xs={9} sx={{backgroundColor:'white',borderTopLeftRadius:'20px',padding:'0 20px'}}>
                    <Pagetop setShowNav={setShowNav} heading={"Complaints"}/>
                
                    <Box sx={{marginTop:'2%',marginLeft:"2%",maxHeight:{md:"510px",xs:'600px'},overflow:"scroll",padding:"3%"}}>
                      {complaints.filter(data => data.Marked === false)
                      .map((data)=>{
                            return(
                               <ComplaintCard  handlepopup={handlepopup} data={data} setSelecteduser={setSelecteduser} />
                            )
                        })}
                      </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </ThemeProvider>
  )
}

export default PrimaryComplaints