import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker({title, date, setDate}) {
  // const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>

        <DatePicker 
          label={title}
          value={date}
          disablePast={true}
          onChange={(newValue) => setDate(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}


