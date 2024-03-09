import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Box, Typography } from '@mui/material';

const Income = () => {
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];

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

  const [xaxisd, setXasisd] = React.useState(getLastSevenDays());

  React.useEffect(() => {
    const dates = getLastSevenDays();
    setXasisd(dates);
  }, []);

  const xLabels = xaxisd;

  return (
    <LineChart
      width={330}
      height={300}
      series={[
        { data: pData, label: ' Total Income' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}

export default Income;
