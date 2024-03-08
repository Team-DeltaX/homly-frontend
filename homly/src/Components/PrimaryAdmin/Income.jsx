import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Box, Typography } from '@mui/material';
const Income=()=> {
  // const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const [xaxisd, setXasisd] = React.useState([]);

const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels =xaxisd
  // const [xaxisd, setXasisd] = React.useState([]);

  // const getLastSevenDays = () => {
  //   const dates = [];
  //   const today = new Date();

  //   for (let i = 6; i >= 0; i--) {
  //     const date = new Date();
  //     date.setDate(today.getDate() - i);
  //     dates.push(date.toISOString().split("T")[0]);
  //   }

  //   return dates;
  // };

  
  // React.useEffect(()=>{

  //   setXasisd(getLastSevenDays());
  // })
  const getLastSevenDays = () => {
    const dates = [];
    const today = new Date();

    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      dates.push(date.toISOString().split("T")[0]);
    }

    return dates;
  };
  React.useEffect(() => {
    setXasisd(getLastSevenDays());
  }, []);

  return (
    // <Box>
    //             <Box textAlign={'center'}><Typography sx={{color:'#002347',fontWeight:'bold'}}>Last 7 Days Income</Typography></Box>

    //     <LineChart
    // xAxis={[{ data: xaxisd }]} 
    //   // xAxis={[{ data: [1.2, 2, 3, 4, 5, 6, 7, 8, 9, 10,11] }]}
    //   series={[
    //     {
    //       data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
    //       // showMark: ({ index }) => index % 2 === 0,
    //     },
    //   ]}
    //   width={330}
    //   height={300}
    // />
    // </Box>

    <LineChart
    width={330}
    height={300}
    series={[
      { data: pData, label: 'Income' },
     
    ]}
    xAxis={[{ scaleType: 'point', data: xLabels }]}
  />

  );
}
export default Income;