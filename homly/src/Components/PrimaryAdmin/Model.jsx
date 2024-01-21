import { Box, Button, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";



const Model=(props)=>{
    
    return(
        <Box  sx={
            {
                position:"fixed",
                left:'0',
                right:'0',
                width:"100%",
                height:"100%",
                display:"flex",
                alignItems:"center",
                justifyContent:'center',
                backgroundColor:"rgba(0,0,0,0.5)",
                zIndex:'1000'
                

            }

        }
        onClick={()=>{props.setpopup(!props.popup)}}
        >
            <Box>
                <Box sx={{
                    backgroundColor:"white",
                    borderRadius:"10px",
                   height:"200px",
                    width:'400px',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:"center",
                    alignItems:'center',
                    position:'relative'
                }}>
                   <Button sx={{position:"absolute",right:"0px",top:'0px',padding:"10px",borderRadius:'50%',color:'black'}} onClick={()=>{props.setpopup(!props.popup)}}>X</Button>
                <Box >
                <Typography variant="h6" sx={{fontFamily:"roboto"}}>Are You sure You Want to Decline?</Typography>
                

                </Box>
                <Box>
                <Button variant='contained' sx={{fontFamily:'roboto',background:'#39e75f',margin:"10px"}}  >Yes</Button>
                <Button variant='outlined' sx={{fontFamily:'roboto',margin:"10px"}} onClick={()=>{props.setpopup(!props.popup)}} >No</Button>

                </Box>

                </Box>
            </Box>
        </Box>
    )

}
export default Model;