import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box, Typography } from '@mui/material';

export default function SimpleCharts() {
  return (
    <div>
        <Box textAlign={'center'}><Typography>Last 7 Days Income</Typography></Box>
        <BarChart
        title='Last 7 Days'
          xAxis={[
            {
              id: 'barCategories',
              data: ['2/22', '2/23', '2/24','2/25','2/26','2/27','2/28'],
              scaleType: 'band',
            },
          ]}
          series={[
            {
              data: [20000, 52000, 30000,41223,10023,31234,1222],
            },
          ]}
          width={400}
          height={300}
        />
     
    </div>
  );
}