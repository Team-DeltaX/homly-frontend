import {
    ThemeProvider,
    Card,
    Stack,
    Box,
    Typography,
    Rating,
    Divider,
} from "@mui/material";
import React from "react";
import theme from "../../../HomlyTheme";
import "./HolidayHomeCard.css";

export default function HolidayHomeCard(props) {
    return (
        <ThemeProvider theme={theme}>
            <Card sx={{ width: "200px", height: "270px", position: "relative" }}>
                <Box
                    component="img"
                    src={props.HHImage}
                    alt="Holiday Home Image"
                    sx={{
                        height: "100%",
                        width: "100%",
                    }}
                />
                <Box
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
                </Box>
                <Box
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
                </Box>
            </Card>
        </ThemeProvider>
    );
}
