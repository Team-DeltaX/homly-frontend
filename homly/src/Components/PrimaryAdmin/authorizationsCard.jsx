import { Box, Button, Grid, Stack, ThemeProvider, Typography } from "@mui/material"
import PreviewIcon from '@mui/icons-material/Preview';
import theme from "../../HomlyTheme";
// import { Group } from "@mui/icons-material";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CheckIcon from '@mui/icons-material/Check';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import CloseIcon from '@mui/icons-material/Close';



const AuthorizationsCard=(props)=>{
    return<ThemeProvider theme={theme}>
       <Stack sx={{width:"350px", background:"#E9E9E9",padding:'20px',borderRadius:'20px',margin:"30px"}}>
        <Box>
        {/* <AccountCircleIcon sx={{fontSize:"50px",marginLeft:"40%"}}/> */}
        </Box>
        <Box > <Grid container >
           
           <Grid md={9} xs={12}>
               <Grid md={12}>
               <Grid md={12}><Typography  sx={{fontWeight:'light'}}>Purpose</Typography></Grid>
               <Grid md={12}>Add Holiday Home</Grid>
   
               </Grid>
               
               <Grid md={12} sx={{marginTop:"5%"}}>
               <Grid md={12}><Typography  sx={{fontWeight:'light'}}>Work Location</Typography></Grid>
               <Grid md={12}>Anuradhapura Malwathuoya</Grid>
              
   
               
   
   
               </Grid>
   
           </Grid>
   
           <Grid md={3} xs={12}>
               <Grid md={12}>
               <Button type='submit' variant='contained' sx={{width:"80px",height:'30px',borderRadius:"15px",display:{xs:'none',md:'flex'}}} startIcon={<PreviewIcon/>}  ><Typography>View</Typography></Button>
   
               </Grid>
               <Grid md={12}>
   
               <Grid md={12} sx={{marginTop:'25px'}}><Typography  sx={{fontWeight:'light'}}>Admin</Typography> </Grid>
               <Grid md={12}>163k</Grid>
               
   
               </Grid>
   
           </Grid>
         
        
           
        
         
   
       </Grid></Box>
        <Box sx={{display:"flex",justifyContent:'center',flexDirection:{md:"row",sm:"row",xs:"column"}}}>
        <Button type='submit' variant='contained' sx={{margin:"10px",width:"100px",height:'30px',borderRadius:"15px",background:"#39e75f",color:"black"}} startIcon={<CheckIcon/>}  ><Typography>Accept</Typography></Button>
        <Button type='submit' variant='outlined' sx={{margin:"10px",width:"100px",height:'30px',borderRadius:"15px",color:"red",borderBlockColor:"red"}} onClick={()=>{props.setpopup(!props.popup)}} startIcon={<CloseIcon/>}  ><Typography>Decline</Typography></Button>
        <Button type='submit' variant='outlined' sx={{margin:"10px",width:"100px",height:'30px',borderRadius:"15px",display:{xs:'flex',md:'none'}}}  startIcon={<PreviewIcon/>}  ><Typography>View</Typography></Button>

        


        </Box>
       </Stack>
    </ThemeProvider>

}
export default AuthorizationsCard