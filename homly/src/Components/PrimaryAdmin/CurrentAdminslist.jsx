import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import ViewAdminCard2 from "./ViewAdminCard2";
import CurrentAdminCard from "./CurrentAdminCard";
import axios from 'axios'

const CurrentAdminslist=()=>{
    const data = [
        {
          Service_number: 1,
          Nic_number: 27,
          User_name: "Lonnie Antonioni",
          date: "1/31/2023",
          image: "http://dummyimage.com/130x100.png/cc0000/ffffff",
        },
        {
          Service_number: 2,
          Nic_number: 1014,
          User_name: "Carlita Cominello",
          date: "9/13/2023",
          image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
        },
        {
          Service_number: 3,
          Nic_number: 929,
          User_name: "Rosene Loweth",
          date: "7/18/2023",
          image: "http://dummyimage.com/187x100.png/dddddd/000000",
        },
        {
          Service_number: 4,
          Nic_number: 32,
          User_name: "Brittan Furby",
          date: "8/25/2023",
          image: "http://dummyimage.com/122x100.png/5fa2dd/ffffff",
        },
        {
          Service_number: 5,
          Nic_number: 9910,
          User_name: "Zebulon Pinson",
          date: "9/25/2023",
          image: "http://dummyimage.com/130x100.png/5fa2dd/ffffff",
        },
        {
          Service_number: 6,
          Nic_number: 56905,
          User_name: "Ara Tembey",
          date: "11/26/2023",
          image: "http://dummyimage.com/157x100.png/5fa2dd/ffffff",
        },
        {
          Service_number: 7,
          Nic_number: 9742,
          User_name: "Alleyn Melliard",
          date: "8/8/2023",
          image: "http://dummyimage.com/156x100.png/dddddd/000000",
        },
        {
          Service_number: 8,
          Nic_number: 6,
          User_name: "Wilfrid Grinyer",
          date: "5/9/2023",
          image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
        },
        {
          Service_number: 9,
          Nic_number: 948,
          User_name: "Yvon Inchbald",
          date: "7/17/2023",
          image: "http://dummyimage.com/172x100.png/5fa2dd/ffffff",
        },
        {
          Service_number: 10,
          Nic_number: 4,
          User_name: "Torrie White",
          date: "6/10/2023",
          image: "http://dummyimage.com/162x100.png/5fa2dd/ffffff",
        },
      ];

      const [blacklistedusers, setBlacklistedusers] = useState([]);
    
      useEffect(() => {
        axios.get('http://localhost:3002/locationadmin/all')
        .then(res=>{
          console.log(res.data)
          setBlacklistedusers(res.data)
        }).catch(err=>{
          console.log(err)
        })
      }, []);
    
    return(
        <Box
        hello
                sx={{ marginTop: "2%", maxHeight: "450px", overflow: "scroll" }}
              >
                {blacklistedusers.map((item) => {
                  return (
                    <CurrentAdminCard data={item} key={item.AdminNo} />
                  );
                })}
              </Box> 
    )


}
export default CurrentAdminslist;