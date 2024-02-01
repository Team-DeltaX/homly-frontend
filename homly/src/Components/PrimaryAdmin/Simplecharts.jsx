import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box, Typography } from '@mui/material';

export default function SimpleCharts() {
  return (
    <div>
        <BarChart
        title='Last 7 Days'
          xAxis={[
            {
              id: 'barCategories',
              data: ['Admin1', 'Admin2', 'Admin3','Admin4','Admin5','Admin6','Admin7','Admin8','Admin9','Admin10','Admin11','Admin12'],
              scaleType: 'band',
            },
          ]}
          
          series={[
            {
              data: [20000, 52000, 30000,41223,10023,31234,1222,2222,4123,1236,1963,12463],
              color:'#002347'
            },
          ]}
          width={730}
          height={300}
        />
     
    </div>
  );
}