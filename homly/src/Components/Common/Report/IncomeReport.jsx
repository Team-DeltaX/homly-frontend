import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { usePDF } from 'react-to-pdf';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';

import logo from '../../../Assets/images/logo.png';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function IncomeReport() {
  const [age, setAge] = React.useState('');
  const {pdfRef} = React.useRef();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  const CustomizedDialogs = () => {
    const [open, setOpen] = React.useState(false);
    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    function createData(name, protein) {
      return { name, protein };
    }

    const rows = [
      createData('Badulla Lotus by Kaumadi', 0.00),
      createData('Bndarawela Lotus by Dinali', 0.00),

    ];

    return (
      <React.Fragment>
        <Button variant="contained" onClick={handleClickOpen}>
          Preview
        </Button>



       <BootstrapDialog
           onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          ref={targetRef}
        >


        <div>
             
        <div> <img src={logo}  alt="logoOfHomely" style={{ width: '150px', height: 'auto', padding: '5%' }} /> 
        </div>     
            
            <div>
            <DialogTitle sx={{ m: 1, p: 2, textAlign: 'center', padding:'1%' }} id="customized-dialog-title" 
                style={{ fontWeight: 'bold' }}>
            Inova IT Systems - Welfare Department <br/>
            Income Details
            </DialogTitle>
            </div>
            </div>
          
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[400],
            }}
          >
            <CloseIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Item> From Date : 02/16/2024 </Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>To date : 02/17/2024 </Item>
                  </Grid>
                  </Grid>
                  </Box>

          <DialogContent dividers>
               <TableContainer component={Paper}>
              <Table sx={{ minWidth: 400 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: 'bold' }} > Holiday Home </TableCell>
                    <TableCell align="right" style={{ fontWeight: 'bold' }}> Income per Holiday Home(lkr) </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Typography gutterBottom style={{fontSize: '12px'}}>
                   Holiday Home count :   0 
            </Typography>
            <Typography gutterBottom align='right' style={{ fontWeight: 'bold' }}>

                    {/* total price */}
                   Total Income (LKR) : 0
            </Typography>
          </DialogContent>

          
          <DialogActions>
            <Button autoFocus onClick={() => toPDF()}>
              Download
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </React.Fragment>
    );
  };

  return (
    <Box sx={{ width: '70%', align: 'center', flexGrow: 1 }}>
      <Stack spacing={2}>
        <Item>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              
                <FormControl sx={{ m: 3, minWidth: 120 }} size="small">
                  Report Type
                </FormControl>
              
            </Grid>
            <Grid item xs={7}>
              
                <FormControl sx={{ m: 2, minWidth: 200 }} size="small">
                  <InputLabel id="demo-select-small-label1">Select Report Type</InputLabel>
                  <Select
                    labelId="demo-select-small-label1"
                    id="demo-select-small"
                    value={age}
                    label="Select Report type"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Reservation Details</MenuItem>
                    <MenuItem value={2}>Income Details</MenuItem>
                  </Select>
                </FormControl>
            </Grid>
          </Grid>
        </Item>
        <Item>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              
                <FormControl sx={{ m: 3, minWidth: 120 }} size="small">
                  Holiday Home
                </FormControl>
              
            </Grid>
            <Grid item xs={7}>
              
                <FormControl sx={{ m: 2, minWidth: 200 }} size="small">
                  <InputLabel id="demo-select-small-label2">Select Holiday Home</InputLabel>
                  <Select
                    labelId="demo-select-small-label2"
                    id="demo-select-small"
                    value={age}
                    label="Select Holiday Home"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>All</MenuItem>
                    <MenuItem value={2}>Badulla 1</MenuItem>
                    <MenuItem value={3}>Badulla 2</MenuItem>
                    <MenuItem value={4}>Bandarawela</MenuItem>
                    
                    

                  </Select>
                </FormControl>
              
            </Grid>
          </Grid>
        </Item>

        <Item>
          <Grid container spacing={2}>
            <Grid item xs={5}>
             
                <FormControl sx={{ m: 3, minWidth: 120 }} size="small">
                  From Date
                </FormControl>
              
            </Grid>
            <Grid item xs={7}>
              
                <div>
                  <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
                        <MuiDatePicker label="From Date" />
                      </DemoContainer>
                    </LocalizationProvider>
                  </FormControl>
                </div>
              
            </Grid>
          </Grid>
        </Item>

        <Item>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              
                <FormControl sx={{ m: 3, minWidth: 120 }} size="small">
                  To Date
                </FormControl>
              
            </Grid>
            <Grid item xs={7}>
              
                <div>
                  <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
                        <MuiDatePicker label="To Date" />
                      </DemoContainer>
                    </LocalizationProvider>
                  </FormControl>
                </div>
             
            </Grid>
          </Grid>
        </Item>

        <Stack spacing={4} direction="row" justifyContent="center">
          <CustomizedDialogs />
          <Button variant="contained">Download</Button>
          <Button variant="contained">Reset</Button>
        </Stack>
      </Stack>
    </Box>
  );
}
