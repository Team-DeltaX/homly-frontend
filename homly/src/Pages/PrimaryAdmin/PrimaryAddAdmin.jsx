
import React, { useState } from 'react'
import SideNavbar from '../../Components/PrimaryAdmin/SideNavbar'
// import ComplaintCard from '../../Components/PrimaryAdmin/ComplaintCard';
import Box from '@mui/material/Box';
import { Button, Container,  Grid, InputLabel,TextField, ThemeProvider, Typography } from '@mui/material';
import theme from '../../HomlyTheme';
import Pagetop from '../../Components/PrimaryAdmin/PageTop';
// import BlacklistHistoryCard from '../../Components/PrimaryAdmin/BlacklistHistoryCard';
// import Search from '../../Components/PrimaryAdmin/Search';
// import { Label } from '@mui/icons-material';
// import { Form } from 'react-router-dom';


const PrimaryAddAdmin = () => {
    const [serviceno,setServiceno]=useState("")
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [contactno,setContactno]=useState("")
    const [email,SetEmail]=useState("")
    const [worklocation,SetWorklocation]=useState("")
    const [passworderror,setPassworderror]=useState(false)
    const [mobileerror,setMobileerror]=useState(false)

    const validatemobile=(number)=>{
        const pattern =/^(?:\+94|0)?(?:7\d{8}|[1-9]\d{8})$/;
        return pattern.test(number)
    }


    const handlesubmit=()=>{
        console.log("submitted")
    }
    const ValidatePassword=(password)=>{
        if(password.length <= 8){
            setPassworderror(true)

        }else{
            setPassworderror(false)
        }
    }
    const ValidateContact=(contactno)=>{
        if(!validatemobile(contactno)){
            setMobileerror(true)

        }else{
            setMobileerror(false)
        }

    }
    
    const [showNav,setShowNav] = useState('nav_grid_deactive')




    return (
        <ThemeProvider theme={theme}>
            <Box className="main_continer" sx={{ width: "100%", backgroundColor: 'primary.main', height: "100vh", overflow: 'hidden' }}>
                <form onSubmit={handlesubmit}>
                <Container maxWidth="xl" style={{padding:"0px"}} >
                    <Grid container  sx={{position:'relative'}}>
                        <Grid className={showNav} xs={3} sx={{ backgroundColor: "primary.main", height: "100vh" }}>
                            <SideNavbar setShowNav={setShowNav} ></SideNavbar>
                        </Grid>
                        <Grid className='container_grid' xs={9} sx={{ backgroundColor: 'white', borderTopLeftRadius: '20px', padding: '0 20px' }}>
                            <Pagetop setShowNav={setShowNav} heading={"Add Admin"} />
                          <Box sx={{display:"flex",justifyContent:'center',alignItems:'center',marginTop:'10%'}}>
                          <Grid container sx={{background:'#E9E9E9',width:{md:"50%",xs:'100%'},height:"50%",borderRadius:'20px',}}>
                    
                            <Grid item sm={12}>
                                <Grid container width={"60%"} sx={{marginLeft:'15%',alignItems:'center',padding:'10px'}}>
                    
                                    <Grid item  md={6} sm={12} xs={12}>
                                    <InputLabel sx={{fontFamily:'roboto'}}>Service Number</InputLabel>
                                    </Grid>
                                    <Grid item md={6} sm={12} xs={12}>
                                    {/* <TextField
                    
                                    required={true}
                                    value={serviceno}
                                    onChange={e=>{setServiceno(e.target.value)}}
                                     autocomplete="off"
                                     type='text'
                                    size='small'
                                   sx={{marginLeft:'3%',borderRadius:"50px",'& fieldset': { width: "100%",  borderRadius: '20px', borderWidth: '2px', fontFamily: 'roboto' ,}}}
                    
                    
                                   ></TextField> */}
                                   <TextField value={serviceno}
                                   required={true}
                                   onChange={e=>{setServiceno(e.target.value)}}
                                    alignItems="center"
                                    fullWidth
                    
                                    type='text'
                                    size="small"
                                    sx={{background:"white",marginLeft:'3%',borderRadius:"15px",
                                    '& fieldset': {  borderRadius: '10px', borderWidth: '2px', fontFamily: 'roboto' }}}></TextField>
                    
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sm={12}>
                                <Grid container width={"60%"} sx={{marginLeft:'15%',alignItems:'center',padding:'10px'}}>
                                    <Grid item  md={6} sm={12} xs={12}>
                                    <InputLabel  sx={{fontFamily:'roboto'}}>User Name</InputLabel>
                                    </Grid>
                                    <Grid item md={6} sm={12} xs={12}>
                                    <TextField value={username}
                                   required={true}
                                   onChange={e=>{setUsername(e.target.value)}}
                                   error={mobileerror}
                                    alignItems="center"
                                    type='text'
                                    size="small"
                                    sx={{background:"white",marginLeft:'3%',borderRadius:"15px",
                                    '& fieldset': {  borderRadius: '10px', borderWidth: '2px', fontFamily: 'roboto' ,},width:"100%"}}></TextField>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sm={12}>
                                <Grid container width={"60%"} sx={{marginLeft:'15%',alignItems:'center',padding:'10px'}}>
                                    <Grid item  md={6} sm={12} xs={12}>
                                    <InputLabel  sx={{fontFamily:'roboto'}}>Password</InputLabel>
                                    </Grid>
                                    <Grid item md={6} sm={12} xs={12}>
                                    <TextField value={password}
                                   required={true}
                                   onChange={e=>{setPassword(e.target.value)
                                    ValidatePassword(e.target.value)
                                }}
                                  error={passworderror}
                                   type='password'
                                    alignItems="center"
                                    size="small"
                                    sx={{background:"white",marginLeft:'3%',borderRadius:"15px",
                                    '& fieldset': {  borderRadius: '10px', borderWidth: '2px', fontFamily: 'roboto' ,},width:"100%"}}></TextField>
                                    {passworderror && <Typography sx={{fontSize:"10px",fontFamily:"roboto",color:"red"}}>password length should be greater than 8 characters</Typography>
                     }
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sm={12}>
                                <Grid container width={"60%"} sx={{marginLeft:'15%',alignItems:'center',padding:'10px'}}>
                                    <Grid item  md={6} sm={12} xs={12}>
                                    <InputLabel  sx={{fontFamily:'roboto'}}>Contact Number</InputLabel>
                                    </Grid>
                                    <Grid item md={6} sm={12} xs={12}>
                                    <TextField value={contactno}
                                   required={true}
                                   onChange={e=>{setContactno(e.target.value)
                                    ValidateContact(e.target.value)
                                }}
                                   type='text'
                                    alignItems="center"
                                    size="small"
                                    sx={{background:"white",marginLeft:'3%',borderRadius:"15px",
                                    '& fieldset': {  borderRadius: '10px', borderWidth: '2px', fontFamily: 'roboto' ,},width:"100%"}}></TextField>
                                    {mobileerror && <Typography sx={{fontSize:"10px",fontFamily:"roboto",color:"red"}}>enter valid contact number</Typography>}
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sm={12}>
                                <Grid container width={"60%"} sx={{marginLeft:'15%',alignItems:'center',padding:'10px'}}>
                                    <Grid item  md={6} sm={12} xs={12}>
                                    <InputLabel  sx={{fontFamily:'roboto'}}>Email</InputLabel>
                                    </Grid>
                                    <Grid item md={6} sm={12} xs={12}>
                                    <TextField value={email}
                                    type='email'
                                   required={true}
                                   onChange={e=>{SetEmail(e.target.value)}}
                                    alignItems="center"
                                    size="small"
                                    sx={{background:"white",marginLeft:'3%',borderRadius:"15px",
                                    '& fieldset': {  borderRadius: '10px', borderWidth: '2px', fontFamily: 'roboto' ,},width:"100%"}}></TextField>
                                    </Grid>
                                </Grid>
                            </Grid>
                    
                            <Grid item sm={12}>
                                <Grid container width={"60%"} sx={{marginLeft:'15%',alignItems:'center',padding:'10px'}}>
                                    <Grid item  md={6} sm={12} xs={12}>
                                    <InputLabel  sx={{fontFamily:'roboto'}}>Work Location</InputLabel>
                                    </Grid>
                    
                                    <Grid item md={6} sm={12} xs={12}>
                                    <TextField value={worklocation}
                                    type='text'
                                   required={true}
                                   onChange={e=>{SetWorklocation(e.target.value)}}
                                    alignItems="center"
                                    size="small"
                                    sx={{background:"white",marginLeft:'3%',borderRadius:"15px",
                                    '& fieldset': {  borderRadius: '10px', borderWidth: '2px', fontFamily: 'roboto' ,},width:"100%"}}></TextField>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sm={12} sx={{marginLeft:{md:"60%",xs:'20%'},marginBottom:"2%"}}>
                                <Button type='submit' variant='contained' sx={{fontFamily:'roboto'}} disabled={(mobileerror || passworderror)?true:false} >Add</Button>
                            </Grid>
                    
                    
                    
                    
                    
                            </Grid>
                          </Box>
                    
                        </Grid>
                    </Grid>
                </Container>
                </form>
            </Box>
        </ThemeProvider>
    )
}

export default PrimaryAddAdmin