import { Box, Button, TextField, ThemeProvider, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { grey } from "@mui/material/colors";
import theme from '../../HomlyTheme'
import '../../Components/PrimaryAdmin/Css/complaintpopup.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CancelIcon from '@mui/icons-material/Cancel';

const ViewPopupComplaints = (props) => {
    const [reson, setReson] = useState("")
    const [expand, setExpand] = useState(false)



    const data = [
        { Service_number: 1, Nic_number: 27, User_name: 'Lonnie Antonioni', date: '1/31/2023', description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available' },
        { Service_number: 2, Nic_number: 1014, User_name: 'Carlita Cominello', date: '9/13/2023', description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available' },

    ];



    return (
        <ThemeProvider theme={theme}>
            <Box className="popup" sx={
                {
                    position: "fixed",
                    left: '0',
                    right: '0',
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: 'center',
                    backgroundColor: "rgba(0,0,0,0.5)",
                    zIndex: 100

                }
            }
                onClick={(e) => {
                    console.log(e.target.className)
                    if (e.target.className === "popup MuiBox-root css-4e0c2m") {
                        props.handlepopup()
                    }

                }}

            >
                <Box>
                    <Box sx={{
                        backgroundColor: 'white',
                        borderRadius: "10px",
                        padding: '20px',
                        width: { md: '500px',sx:'400px' },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: 'center',
                        position: 'relative',
                        maxHeight:{md:'100%',xs:'690px'},
                        overflow:'auto',
                        marginTop:{xs:'15px'}
                       

                    }}>
 <Button sx={{position:"absolute",right:"0px",top:'0px',padding:"10px",color:'black'}} onClick={()=>{props.handlepopup()}}><CancelIcon/></Button>
                        <Box sx={{
                            display: 'felx',
                            flexDirection: 'column',
                            // width:'100%',


                        }}>
                            <Box sx={{
                                // width:"100%",
                                display: 'flex',
                                flexDirection: { md: 'row', xs: 'column' },
                                justifyContent: "space-between",
                                alignItems: 'center',
                                marginTop:{md:'5px',xs:'199px'}
                            }}>
                                <Box><Typography sx={{ flex: 2 }} h6>Service Number</Typography></Box>
                                <Box ><TextField

                                    disabled value={props.selecteduser.ServiceNo} size="small" sx={{ width: '85%', margin: "5px" }}></TextField></Box>
                            </Box>

                            <Box sx={{
                                // width:"100%",
                                display: 'flex',
                                flexDirection: { md: 'row', xs: 'column' },
                                justifyContent: "space-between",
                                alignItems: 'center',
                                margin: '10px'
                            }}>
                                <Box><Typography h6>Reservation Number</Typography></Box>
                                <Box  ><TextField disabled value={props.selecteduser.ReservationNo} size="small" sx={{ width: '85%', margin: "5px" }}></TextField></Box>
                            </Box>

                            <Box sx={{
                                // width:"100%",
                                display: 'flex',
                                flexDirection: { md: 'row', xs: 'column' },
                                justifyContent: "space-between",
                                alignItems: 'center',
                                margin: '10px'
                            }}>
                                <Box><Typography h6>Date</Typography></Box>
                                <Box ><TextField value={props.selecteduser.created_at} disabled size="small" sx={{ width: '85%', margin: "5px" }}></TextField></Box>
                            </Box>
                            <Box sx={{
                                // width:"100%",
                                display: 'flex',
                                flexDirection: { md: 'row', xs: 'column' },
                                justifyContent: "space-between",
                                alignItems: 'center',
                                margin: '10px'
                            }}>
                                <Box><Typography h6>Description</Typography></Box>
                                <Box  ><TextField multiline maxRows={2} disabled value={props.selecteduser.Reson} size="small" sx={{ width: '85%', margin: "5px", }}></TextField></Box>
                            </Box>



                            <Box sx={{
                                // width:"100%",
                                display: 'flex',
                                flexDirection: { md: 'row', xs: 'column' },
                                justifyContent: "space-between",
                                alignItems: 'center',
                                margin: '10px'
                            }}>
                                <Box><Typography h6>Blacklist Reson</Typography></Box>
                                <Box ><TextField value={reson} size="small" sx={{ width: '85%', margin: "5px", }} onChange={(e) => { setReson(e.target.value) }}></TextField></Box>
                            </Box>

                            <Box sx={{
                                // width:"100%",
                                display: 'flex',
                                flexDirection: { md: 'row', xs: 'column' },
                                justifyContent: "space-between",
                                alignItems: 'center',
                                margin: '10px'
                            }}>
                                <div>
                                    {data.length >= 1 ? <Accordion expanded={!expand} onClick={() => { setExpand(!expand) }} sx={{width:'95%' ,boxShadow:'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}>
                                        <AccordionSummary
                                            expandIcon={<ArrowDropDownIcon />}
                                            aria-controls="panel2-content" 
                                            id="panel2-header"
                                        >
                                            <Typography>Complaint on {data[0].date}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {data[0].description}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion> : ""}
                                    {data.length == 2 ? <Accordion expanded={expand} onClick={() => { setExpand(!expand) }} sx={{width:'95%',boxShadow:'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'}}> 
                                        <AccordionSummary
                                            expandIcon={<ArrowDropDownIcon />}
                                            aria-controls="panel2-content"
                                            id="panel2-header"
                                        >
                                            <Typography>Complaint on {data[1].date}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {data[1].description}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion> : ""}

                                </div>

                            </Box>

                            <Box sx={{
                                // width:"100%",
                                display: 'flex',
                                flexDirection: { md: 'row',sx:'column' },
                                justifyContent: "flex-end",
                                alignItems: 'center',
                                margin: '10px'
                            }}>
                                {/* <Box><Typography sx={{fontFamily:'roboto',}} h6>Service Number</Typography></Box>
                            <Box ></Box> */}
                                <Button variant='contained' sx={{ marginRight: '3%' }}  >Send Warning</Button>

                                <Button variant='contained' sx={{ marginRight: '3%' }}  >Add To Blacklist</Button>
                                <Button variant='outlined' sx={{ marginRight: '5%' }} onClick={() => { props.handlepopup() }} >Mark</Button>

                            </Box>





                        </Box>

                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    )

}
export default ViewPopupComplaints;