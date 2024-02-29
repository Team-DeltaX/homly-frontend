import {
  Box,
  Button,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import theme from "../../HomlyTheme";
import "../../Components/PrimaryAdmin/Css/complaintpopup.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CancelIcon from "@mui/icons-material/Cancel";
// import axios from "axios";
import ConfirmPopup from "./ConfirmPopup";
import axios from "axios";

const ViewPopupComplaints = (props) => {
  const [reson, setReson] = useState("");
  const [expand, setExpand] = useState(false);
  // const [opend, setOpend] = useState(false);
  const [Open, setOpen] = useState(false);
  const [disable,Setdisable]=useState(false)


  

  // const data = [
  //   {
  //     Service_number: 1,
  //     Nic_number: 27,
  //     User_name: "Lonnie Antonioni",
  //     date: "1/31/2023",
  //     description:
  //       "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
  //   },
  //   {
  //     Service_number: 2,
  //     Nic_number: 1014,
  //     User_name: "Carlita Cominello",
  //     date: "9/13/2023",
  //     description:
  //       "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
  //   },
  // ];

  //   const fetchcomplaints=()=>{
  //     axios.get('http://localhost:3002/locationadmin/complaints')
  //     .then(res=>{
  //         setPrevcomplaints(res.data)

  //     }).catch(err=>{
  //         console.log(err)
  //     })
  // }
  const check_already_exists=()=>{
    axios.get(`http://localhost:3002/admin/auth/isexist/${props.selecteduser.ServiceNo}`)
    .then((res)=>{
      Setdisable(res.data.exist)
      
    }).catch(err=>{
      console.log(err)
    })

  }
  
  const handleaddtoblacklist=()=>{
    axios.post('http://localhost:3002/admin/auth/blacklist',{
      Reason: reson,
      ServiceNo: props.selecteduser.ServiceNo
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })

    
    setOpen(false)
    props.handlepopup();
    
  }


  useEffect(() => {
    props.fetchprevcomplaints();
    check_already_exists();
  }, [props.popup]);

  const handleclick=()=>{
    console.log('handle')
    setOpen(false);
    

  }

 

  const getonlydate=(date)=>{
    const dateTimeString = props.prevcomplaints[date].created_at;
    const dateObject = new Date(dateTimeString);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getDate()).padStart(2, "0");
  
    const dateOnlyString = `${year}-${month}-${day}`;
    return dateOnlyString



  }
 


  return (
    <ThemeProvider theme={theme}>
      <Box
        className="popup"
        sx={{
          position: "fixed",
          left: "0",
          right: "0",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 100,
        }}
        onClick={(e) => {
          console.log(e.target.className);
          if (e.target.className === "popup MuiBox-root css-4e0c2m") {
            props.handlepopup();
          }
        }}
      >
        <Box>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "20px",
              width: { md: "500px", xs: "350px" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              maxHeight: { md: "100%", xs: "690px" },
              overflow: "auto",
              marginTop: { xs: "15px" },
            }}
          >
            <Button
              sx={{
                position: "absolute",
                right: "0px",
                top: "0px",
                padding: "10px",
                color: "black",
              }}
              onClick={() => {
                props.handlepopup();
              }}
            >
              <CancelIcon />
            </Button>
            <Box
              sx={{
                display: "felx",
                flexDirection: "column",
                // width:'100%',
              }}
            >
              {/* <Box
                sx={{
                  // width:"100%",
                  display: "flex",
                  flexDirection: { md: "row", xs: "column" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: { md: "5px", xs: "199px" },
                }}
              >
                <Box>
                  <Typography h6 sx={{ flex: 1 }} >
                    Service Number
                  </Typography>
                </Box>
                <Box sx={{ flex: 1 }} >
                  <TextField
                    disabled
                    value={props.selecteduser.ServiceNo}
                    size="small"
                    sx={{ width: "85%", margin: "5px" }}
                  ></TextField>
                </Box>
              </Box> */}

              <Box
                sx={{
                  // width:"100%",
                  display: "flex",
                  flexDirection: { md: "row", xs: "column" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "10px",
                  marginTop: { md: "5px", xs: "129px" },
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography h6>Service Number</Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <TextField
                    disabled
                    value={props.selecteduser.ServiceNo}
                    size="small"
                    sx={{ width: "85%", margin: "5px" }}
                  ></TextField>
                </Box>
              </Box>

              <Box
                sx={{
                  // width:"100%",
                  display: "flex",
                  flexDirection: { md: "row", xs: "column" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "10px",
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography h6>Reservation Number</Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <TextField
                    disabled
                    value={props.selecteduser.ReservationNo}
                    size="small"
                    sx={{ width: "85%", margin: "5px" }}
                  ></TextField>
                </Box>
              </Box>

              <Box
                sx={{
                  // width:"100%",
                  display: "flex",
                  flexDirection: { md: "row", xs: "column" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "10px",
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography h6>Date</Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <TextField
                    value={props.selecteduser.created_at}
                    disabled
                    size="small"
                    sx={{ width: "85%", margin: "5px" }}
                  ></TextField>
                </Box>
              </Box>
              <Box
                sx={{
                  // width:"100%",
                  display: "flex",
                  flexDirection: { md: "row", xs: "column" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "10px",
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography h6>Description</Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <TextField
                    multiline
                    maxRows={2}
                    disabled
                    value={props.selecteduser.Reson}
                    size="small"
                    sx={{ width: "85%", margin: "5px" }}
                  ></TextField>
                </Box>
              </Box>

              <Box
                sx={{
                  // width:"100%",
                  display: "flex",
                  flexDirection: { md: "row", xs: "column" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "10px",
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography h6>Blacklist Reson</Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <TextField
                    value={reson}
                    size="small"
                    sx={{ width: "85%", margin: "5px" }}
                    onChange={(e) => {
                      setReson(e.target.value);
                    }}
                  ></TextField>
                </Box>
              </Box>

              <Box
                sx={{
                  // width:"100%",
                  display: "flex",
                  flexDirection: { md: "row", xs: "column" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "10px",
                }}
              >
                {/* {props.complaints.filter(data=>((data.Marked===true)&&(data.ServiceNo===props.selecteduser.ServiceNo))).map(data =>  setPrevcomplaints(prevArray => [...prevArray, data.Reson]))} */}

                <div>
                  {props.prevcomplaints.length >0 ? (
                    <Accordion
                      expanded={!expand}
                      onClick={() => {
                        setExpand(!expand);
                      }}
                      sx={{
                        width: "330px",
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                      >
                        <Typography >
                          
                            <Box>Complaint on</Box>
                            
                          
                          
                        </Typography>
                        <Typography >
                          
                          
                          <Box > {getonlydate(props.prevcomplaints.length-1)}</Box>
                        
                        
                      </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>{props.prevcomplaints[props.prevcomplaints.length-1].Reson}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  ) : (
                    ""
                  )}
                  {props.prevcomplaints.length >=2 ? (
                    <Accordion
                      expanded={expand}
                      onClick={() => {
                        setExpand(!expand);
                      }}
                      sx={{
                        width: "330px",
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                      >
                        <Typography>
                          Complaint on {getonlydate(props.prevcomplaints.length-2)}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>{props.prevcomplaints[props.prevcomplaints.length-2].Reson}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  ) : (
                    ""
                  )}
                </div>
              </Box>

              <Box
                sx={{
                  // width:"100%",
                  display: "flex",
                  flexDirection: { md: "row", sx: "column" },
                  justifyContent: "flex-end",
                  alignItems: "center",
                  margin: "10px",
                }}
              >
                {/* <Box><Typography sx={{fontFamily:'roboto',}} h6>Service Number</Typography></Box>
                            <Box ></Box> */}
                <Button variant="contained" sx={{ marginRight: "3%", }}>
                  <Typography sx={{fontSize:'10px'}}>Send Warning</Typography>
                </Button>
                <ConfirmPopup
            open={Open}
            setOpen={setOpen}
            title={"Black List User Confirmation"}
            text={"Are you sure you want to Blacklist This User?"}
            
            controlfunction={handleaddtoblacklist}
          />

                <Button variant="contained" sx={{ marginRight: "3%" }}
                onClick={()=>{
                 if(reson!==""){
                  setOpen(true)
                 }  
                
                }}
                disabled={disable}
                >
               
                  <Typography sx={{fontSize:'10px'}}>Add To Blacklist</Typography>
                </Button>
                <Button
                
                  variant="outlined"
                  sx={{ marginRight: "5%" }}
                  onClick={() => {
                    setOpen(true)
                    
                    props.handlepopup();
                    
                  }}
                >
                 <Typography sx={{fontSize:'11px'}} > Mark</Typography>
                </Button>
                
              </Box>
              {disable &&<Typography sx={{color:'red',fontSize:'10px'}}>Note:This User Alread Blacklisted!</Typography>}
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default ViewPopupComplaints;
