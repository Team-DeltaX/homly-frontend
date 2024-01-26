import { Box, Button, Grid, TextField } from "@mui/material";
import css from './Css/viewadmin.css'

import EditIcon from '@mui/icons-material/EditCalendar';
import SaveIcon from '@mui/icons-material/Save';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const ViewAdminsCard=()=>{
    return (<Box>

        <Grid container sx={{backgroundColor:'#E9E9E9',padding:"10px",width:"90%",marginLeft:"5%",borderRadius:'15px',margin:'20px',display:'flex',justifyContent:"center"}} >
            <Grid md={1.5}xs={12} sx={{marginTop:'3%'}}><AccountCircleIcon sx={{color:"Black",fontSize:"70px"}}/></Grid>
            <Grid md={3} xs={12}>
                <Grid >Service Number</Grid>
                <Grid ><TextField type='text'value={"Ak12345"} alignItems="center" size="small" sx={{alignItems:"center",background:"white",borderRadius:'15px',
                '& fieldset': {alignItems:'center',borderRadius:'15px',width:'140px'},width:'158px'}}></TextField></Grid>
                <Grid>User Name</Grid>
                <Grid><TextField type="text" value={"Ak12345"} alignItems="center" size="small" sx={{alignItems:"center",background:"white",borderRadius:'15px',
                '& fieldset': {alignItems:'center',borderRadius:'15px',width:'140px'},width:'158px'}}></TextField></Grid>
            </Grid>
            <Grid md={3} xs={12}>
                <Grid>Password</Grid>
                <Grid><TextField type="password" value={"Ak12345"} alignItems="center" size="small" sx={{alignItems:"center",background:"white",borderRadius:'15px',
                '& fieldset': {alignItems:'center',borderRadius:'15px',width:'140px'},width:'158px'}}></TextField></Grid>
                <Grid>Contact Number</Grid>
                <Grid><TextField type="text" value={"Ak12345"} alignItems="center" size="small" sx={{alignItems:"center",background:"white",borderRadius:'15px',
                '& fieldset': {alignItems:'center',borderRadius:'15px',width:'140px'},width:'158px'}}></TextField></Grid>
            </Grid>
            <Grid md={3} xs={12}>
                <Grid>Email</Grid>
                <Grid><TextField type="email"  value={"abc@gmail.com"} alignItems="center" size="small" sx={{alignItems:"center",background:"white",borderRadius:'15px',
                '& fieldset': {alignItems:'center',borderRadius:'15px',width:'140px'},width:'158px'}}></TextField></Grid>
                <Grid>Work Location</Grid>
                <Grid><TextField type="text" value={"Ak12345"} alignItems="center" size="small" sx={{alignItems:"center",background:"white",borderRadius:'15px',
                '& fieldset': {alignItems:'center',borderRadius:'15px',width:'140px'},width:'158px'}}></TextField></Grid>
            </Grid>
            <Grid md={1.5} xs={12}  >
                <Grid sx={{marginTop:'20%'}}><Button startIcon={<EditIcon/>}  sx={{ fontFamily: 'Roboto', width: "90px", borderRadius: "15px",height:"30px"}} variant="contained">Edit</Button>
                </Grid>
            
                <Grid  sx={{marginTop:'20%'}}><Button startIcon={<SaveIcon/>} sx={{ fontFamily: 'Roboto', width: "90px",height:"30px", borderRadius: "15px",}} variant="contained">Save</Button>

                </Grid>
                
            </Grid>
        </Grid>
    </Box>)

}
export default ViewAdminsCard;