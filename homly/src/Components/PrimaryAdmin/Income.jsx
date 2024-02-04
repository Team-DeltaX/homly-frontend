import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Box, Typography } from '@mui/material';
const Income=()=> {
  return (
    <Box>
                <Box textAlign={'center'}><Typography sx={{color:'#002347',fontWeight:'bold'}}>Last 7 Days Income</Typography></Box>

        <LineChart
      xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11] }]}
      series={[
        {
          data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
          showMark: ({ index }) => index % 2 === 0,
        },
      ]}
      width={330}
      height={300}
    />
    </Box>
  );
}
export default Income;