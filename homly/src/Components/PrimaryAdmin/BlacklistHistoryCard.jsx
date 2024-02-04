import { Box, Button, Grid, Stack, ThemeProvider, Typography } from "@mui/material";
import theme from "../../HomlyTheme";
import bul from '../PrimaryAdmin/Css/blacklisteduserslist.css'

const BlacklistHistoryCard=(props)=>{
    console.log(props)
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
        <Box
         sx={{
            
            width:{md:'10%'}
            }}
        
        >
            <img src="http://dummyimage.com/130x100.png/cc0000/ffffff" height="50px" width="50px" style={{ borderRadius: '50%' }}></img>

        </Box>
        <Box
         sx={{
            
            width:{md:'16%'}
            }}
        >
            <Typography sx={{textAlign:'center',textAlign:'center',textAlign:'center'}} >Service Number</Typography>
            <Typography sx={{fontWeight:'light',textAlign:'center',textAlign:'center',textAlign:'center'}} >{props.data.Service_number}</Typography>

        </Box>
        <Box
         sx={{
            
            width:{md:'16%'}
            }}
        >
            <Typography sx={{textAlign:'center',textAlign:'center',textAlign:'center'}} >User Name</Typography>
            <Typography sx={{fontWeight:'light',textAlign:'center',textAlign:'center',textAlign:'center'}} >{props.data.User_name}</Typography>

        </Box>
        <Box
         sx={{
            
            width:{md:'16%'}
            }}
        
        >
            <Typography sx={{textAlign:'center',textAlign:'center',textAlign:'center'}} >Nic Number</Typography>
            <Typography sx={{fontWeight:'light',textAlign:'center',textAlign:'center',textAlign:'center'}} >{props.data.Nic_number}</Typography>

        </Box>
        <Box
         sx={{
            
            width:{md:'16%'}
            }}
        >
            <Typography sx={{textAlign:'center',textAlign:'center'}} >Blacklisted Date</Typography>
            <Typography sx={{fontWeight:'light',textAlign:'center',textAlign:'center'}} >{props.data.date}</Typography>

        </Box>
        <Box
         sx={{
            
            width:{md:'16%'}
            }}
        >

            <Typography sx={{textAlign:'center'}} >Removed Date</Typography>
            <Typography sx={{fontWeight:'light',textAlign:'center'}} >{props.data.date}</Typography>

        </Box>
        <Box 
         sx={{
            
            width:{md:'10%'}
            }}
        >
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
export default BlacklistHistoryCard;