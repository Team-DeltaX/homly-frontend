import { Box, Button, Grid, Stack, ThemeProvider, Typography } from "@mui/material";
import theme from "../../HomlyTheme";
import bul from '../PrimaryAdmin/Css/blacklisteduserslist.css'

const ComplaintCard=(props)=>{
    return(
        <ThemeProvider theme={theme}>
      <Box sx={{
        display:"flex",
        justifyContent:'space-between',
        flexDirection:{md:'row',xs:'column',sm:'row'},
        alignItems:{xs:"center"},
        backgroundColor:'#E9E9E9',
        padding:"20px",
        borderRadius:'15px',
        margin:'10px'
        

    }}>
        <Box>
            <img src="http://dummyimage.com/130x100.png/cc0000/ffffff" height="50px" width="50px" style={{ borderRadius: '50%' }}></img>

        </Box>
        <Box>
            <Typography sx={{textAlign:'center'}} >Admin Number</Typography>
            <Typography sx={{fontWeight:'light',textAlign:'center'}} >{props.data.Service_number}</Typography>

        </Box>
        <Box>
            <Typography sx={{textAlign:'center'}} >Employee Number</Typography>
            <Typography sx={{fontWeight:'light',textAlign:'center'}} >{props.data.Nic_number}</Typography>

        </Box>
    
        <Box>
            <Typography sx={{textAlign:'center'}} >Complained Date</Typography>
            <Typography sx={{fontWeight:'light',textAlign:'center'}} >{props.data.date}</Typography>

        </Box>
        <Box>
        <Button variant='contained'
         onClick={()=>{
            props.handlepopup()
            props.setSelecteduser(props.data)
            
            }}
        ><Typography>View</Typography></Button>


        </Box>
       
      
    </Box>
    </ThemeProvider>
    )

}
export default ComplaintCard;