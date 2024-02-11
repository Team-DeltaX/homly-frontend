import React from "react";
import {
  ThemeProvider,
  Card,
  Stack,
  Box,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import theme from "../../../HomlyTheme";
import "./HolidayHomeCard.css";

export default function HolidayHomeCard(props) {
  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          width: "257px",
          height: "309px",
          position: "relative",
          margin: "0 20px",
          borderRadius: "20px",
          boxShadow:"12px 1px 30px -18px rgba(0,0,0,0.75)"
        }}
      >
        <Box
          component="img"
          src={props.HHImage}
          alt="Holiday Home Image"
          sx={{
            height: "219px",
            width: "100%",
          }}
        />
        <Box sx={{ width: "100%", height: "90px", padding: "0 4%" }}>
          <Stack direction="column">
            <Stack
              direction="row"
              sx={{ justifyContent: "space-between", alignItem: "center" }}
            >
              <Typography
                sx={{ fontSize: { sm: "1.2rem" }, fontWeight: "medium" }}
              >
                {props.HHName}
              </Typography>
              <Stack direction="row" sx={{alignItems:'center'}}>
                <StarIcon sx={{ color: "primary.main" }} />
                <Typography sx={{fontWeight:'medium'}}>{props.HHRating}</Typography>
              </Stack>
            </Stack>
            <Typography>{props.HHLocation}</Typography>
            <Stack direction="row" sx={{alignItems:'baseline'}}>
              <Typography sx={{fontWeight:'medium',color:'primary.main',fontSize:{sm:'1rem'},marginRight:'5px'}}>LKR</Typography>
              <Typography sx={{fontWeight:'bold',color:'primary.main',fontSize:{sm:'1.2rem'}}}>{props.HHPrice}</Typography>
            </Stack>
          </Stack>
        </Box>
        {/* <Box
                    sx={{
                        position: "absolute",
                        bgcolor: "#ffffff94",
                        width: "100%",
                        top: 0,
                        boxShadow: "2",
                    }}
                >
                    <Stack sx={{ height: "35px" }}>
                        <Rating
                            name="half-rating-read"
                            defaultValue={props.HHRating}
                            precision={0.1}
                            readOnly
                            sx={{ color: "primary.main", padding: "2%" }}
                        />
                    </Stack>
                </Box> */}
        {/* <Box
                    sx={{
                        position: "absolute",
                        width: "100%",
                        bottom: 0,
                        bgcolor: "#ffffffc9",
                    }}
                >
                    <Stack direction="column" sx={{ padding: "0 2% 2% 2%", }}>
                        <Typography
                            sx={{
                                color: "primary.main",

                                fontSize: "1rem",
                                fontWeight: "bold",
                            }}
                        >
                            {props.HHName}
                        </Typography>
                        <Stack sx={{ height: "35px", justifyContent: 'space-between', alignItem: 'center', width: '100%',lineHeight:0 }} direction="row">
                            <Typography sx={{ color: "primary.main", fontSize: '0.8rem' }}>
                                {props.HHLocation}
                            </Typography>
                            <Divider orientation="vertical"  flexItem sx={{borderRightWidth: 2,borderColor:'#2c2c2c85'}} />
                            <Stack direction='column' sx={{ justifyContent: 'left', alignItem: 'center', width: '40%',padddingLeft:'10px' }}>
                                <Typography sx={{ color: "primary.main", fontSize: '0.7rem',fontWeight:'medium',lineHeight:1  }}>
                                    LKR
                                </Typography>
                                <Typography sx={{ color: "primary.main",fontWeight:'medium', fontSize: '1.2rem',lineHeight:1  }}>
                                    {props.HHPrice}
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box> */}
      </Card>
    </ThemeProvider>
  );
}
