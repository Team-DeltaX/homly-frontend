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
              data: ['Colombo', 'Nuwaraeliya', 'kandy','galle','jaffna','B','anuradhapura','kaluthara','colombo2','colombo3','colombo4','colombo5'],
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