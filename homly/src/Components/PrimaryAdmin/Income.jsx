import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { set } from 'date-fns';

const Income = () => {
  const pData = [];
  const [incomes, setIncomes] = React.useState([]);

  const getLastSevenDays = () => {
    const dates = [];
    const today = new Date();

    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(today.getDate() - i);

      dates.push(date.toISOString().split("T")[0]);

      // axios.get('http://localhost:8080/admin/auth/dayincome',{date:date.toISOString().split("T")[0]})
      // .then((res)=>{
      //   pData.push(res.data.sumForDate)

      // })
    }

    return dates;
  };
  const setearning = () => {
    const promises = getLastSevenDays().map((date) => {
      return axios.get(`http://localhost:8080/admin/auth/dayincome/${date}`)
        .then((res) => res.data.sumForDate)
        .catch((err) => {
          console.log(err);
          return null;
        });
    });

    Promise.all(promises)
      .then((results) => {
        const filteredResults = results.filter((result) => result !== null);
        setIncomes(filteredResults);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const [xaxisd, setXasisd] = React.useState(getLastSevenDays());

  React.useEffect(() => {
    const dates = getLastSevenDays();
    setXasisd(dates);
    setearning()

    // console.log(pData.slice(0,7))

    //  


    // console.log(pData)
  }, []);

  const xLabels = xaxisd;

  return (
    <LineChart
      width={330}
      height={300}
      series={[
        { data: incomes, label: `Total Income` },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}

export default Income;
