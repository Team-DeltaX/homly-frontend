import { Box, Button, ThemeProvider, Typography } from "@mui/material";
import theme from "../../HomlyTheme";

const BlacklistedUsersCardNew=(props)=>{
    return <ThemeProvider theme={theme}>
        <Box sx={{
            display:"flex",
            justifyContent:'space-between',
            flexDirection:{md:'row',xs:'column',sm:'row'},
            alignItems:{xs:"center"},
            backgroundColor:'#E9E9E9',
            padding:"20px",
            borderRadius:'15px',
            margin:'10px'
        
        }} key={props.data.Service_number}>
            <Box sx={{
        
                width:{md:'10%'}
                }}>
                <img src={props.data.image} height="50px" width="50px" style={{ borderRadius: '50%' }}></img>
            </Box>
            <Box sx={{
        
                width:{md:'18%'}
                }}>
                <Typography sx={{textAlign:'center'}} >Service Number</Typography>
                <Typography sx={{fontWeight:'light',textAlign:'center'}} >{props.data.Service_number}</Typography>
            </Box>
            <Box sx={{
        
                width:{md:'18%'},
        
                }}>
                <Typography sx={{textAlign:'center'}} >User Name</Typography>
                <Typography sx={{fontWeight:'light',textAlign:'center'}} >{props.data.User_name}</Typography>
            </Box>
            <Box sx={{
        
                width:{md:'18%'},
        
                }}>
                <Typography sx={{textAlign:'center'}} >Nic Number</Typography>
                <Typography sx={{fontWeight:'light',textAlign:'center'}} >{props.data.Nic_number}</Typography>
            </Box>
            <Box sx={{
        
                width:{md:'18%'}
                }}>
                <Typography sx={{textAlign:'center'}} >Blacklisted Date</Typography>
                <Typography sx={{fontWeight:'light',textAlign:'center'}} >{props.data.date}</Typography>
            </Box>
            <Box sx={{
        
                width:{md:'10%'}
                }}>
            <Button variant='contained'  onClick={()=>{
                props.handlepopup()
                props.setSelecteduser(props.data)
        
                }}><Typography>View</Typography></Button>
            </Box>
        
        
        </Box>
    </ThemeProvider>

}
export default BlacklistedUsersCardNew;