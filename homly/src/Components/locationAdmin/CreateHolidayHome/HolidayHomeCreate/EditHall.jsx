import React, { useState, useEffect } from 'react'
import { Box, Button, TextField, Typography, Paper } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import HallBreakDown from '../HallBreakDown';

const EditHall = ({ hallArray, setHallArray }) => {

    const [open, setOpen] = useState(false);
    const [openHall, setOpenHall] = useState(false);
    const [fullWidth, setFullWidth] = useState(true);
    const [maxWidth, setMaxWidth] = useState('sm');

    const [isEditMode, setIsEditMode] = useState(false);
    const [editIndex, setEditIndex] = useState(null);


    useEffect(() => {
        if (isEditMode && editIndex !== null) {

            const editedHall = hallArray[editIndex];
            setHallValues({
                hallCode: editedHall.hallCode,
                hallAc: editedHall.hallAc,
                floorLevel: editedHall.floorLevel,
                hallNoOfAdults: editedHall.hallNoOfAdults,
                hallNoOfChildren: editedHall.hallNoOfChildren,
                hallRemark: editedHall.hallRemark,
                hallRental: editedHall.hallRental,
            });
        } else {

            setHallValues({
                hallCode: '', hallAc: '', floorLevel: '', hallRemark: '', hallRental: '', hallNoOfAdults: '', hallNoOfChildren: '',
            });
        }
    }, [isEditMode, editIndex, hallArray]);


    const handleClickOpen = () => {
        setOpen(true);
    };



    const handleClose = () => {
        setOpen(false);
    };


    const handleClickOpenHall = () => {
        setHallValues({
            hallCode: '', hallAc: '', floorLevel: '', hallRemark: '', hallRental: '', hallNoOfAdults: '', hallNoOfChildren: '',
        });
        setOpenHall(true);
    };


    const handleCloseHall = () => {
        setOpenHall(false);
    };





    //hall -all fields should filled warning
    const [openHallFillAlert, setOpenHallFillAlert] = useState(false);

    const handleCloseHallFillAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenHallFillAlert(false);
    };


    //hall - same hall no exist warning

    const [openHallExistAlert, setOpenHallExistAlert] = useState(false);

    const handleCloseHallExistAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenHallExistAlert(false);
    };

    const [error, setError] = useState({
        ctName: false, ctAddress: false, ctDescription: false, ctContactNo: false
    });



    const [hallValues, setHallValues] = useState({
        hallCode: '', hallAc: '', floorLevel: '', hallRemark: '', hallRental: '', hallNoOfAdults: '', hallNoOfChildren: '',
    })
    const [hallExist, setHallExist] = useState(false);


    const handleHallCodeChange = (e) => {
        const hallCodeExists = hallArray.some(hall => hall.hallCode === e.target.value);
        if (hallCodeExists) {
            setHallExist(true);
        }
        else {
            setHallExist(false);
        }
        setHallValues({ ...hallValues, hallCode: e.target.value });

    }

    const handleHallAcChange = (e) => {
        setHallValues({ ...hallValues, hallAc: e.target.value });
    }

    const handleHallFloorChange = (e) => {
        setHallValues({ ...hallValues, floorLevel: e.target.value });
    }

    const handleHallRemarksChange = (e) => {
        setHallValues({ ...hallValues, hallRemark: e.target.value });
    }

    const handleHallRentalChange = (e) => {
        setHallValues({ ...hallValues, hallRental: e.target.value });
    }

    const handleHallNoOfAdultsChange = (e) => {
        setHallValues({ ...hallValues, hallNoOfAdults: e.target.value });
    }

    const handleHallNoOfChildrenChange = (e) => {
        setHallValues({ ...hallValues, hallNoOfChildren: e.target.value });
    }





    const handleSaveHall = () => {
        if (hallValues.hallCode === '' || hallValues.hallAc === '' || hallValues.floorLevel === '' || hallValues.hallRemark === '' || hallValues.hallRental === '') {
            setOpenHallFillAlert(true);
            return;
        }
        if (hallExist) {
            setOpenHallExistAlert(true);
            return;
        }

        if (isEditMode && editIndex !== null) {
            // Editing an existing room
            const updatedHallArray = [...hallArray];
            updatedHallArray[editIndex] = {
                ...updatedHallArray[editIndex],
                ...hallValues,
                hallRentalArray: [...hallRentalArray], // Copy the rentalArray as well
            };
            setHallArray(updatedHallArray);
        } else {
            // Adding a new room
            const updatedValues = { ...hallValues, hallRentalArray };
            setHallArray([...hallArray, updatedValues]);
            // setRoomArray([...roomArray, values]);
        }




        setHallRentalArray([]);

        // Close the dialog and reset state

        setOpenHall(false);
        setIsEditMode(false);
        setEditIndex(null);
    };

    const handleHallDelete = (hallCode) => { //for room hallbreakdown component


        const newHallArray = hallArray.filter((item) => item.hallCode !== hallCode);
        setHallArray(newHallArray);

    }


    const handleHallEdit = (index) => {

        const editedHall = hallArray[index];
        console.log(editedHall);

        setHallValues({
            hallCode: editedHall.hallCode,
            hallAc: editedHall.hallAc,
            floorLevel: editedHall.floorLevel,
            hallNoOfAdults: editedHall.hallNoOfAdults,
            hallNoOfChildren: editedHall.hallNoOfChildren,
            hallRemark: editedHall.hallRemark,
            hallRental: editedHall.hallRental,

        });


        setHallRentalArray(editedHall.hallRentalArray);


        setOpenHall(true);
        setEditIndex(index);
        setIsEditMode(true);


    }




    const [hallRental, setHallRental] = useState({
        district: '', weekDays: '', weekEnds: ''
    });

    const handleHallDistrict = (e) => {
        setHallRental({ ...hallRental, district: e.target.value });
    }

    const handleHallWeekdays = (e) => {
        setHallRental({ ...hallRental, weekDays: e.target.value });
    }

    const handleHallWeekends = (e) => {
        setHallRental({ ...hallRental, weekEnds: e.target.value });
    }

    const [hallRentalArray, setHallRentalArray] = useState([]);
    const handleHallAdd = () => {
        if (hallRental.district === '' || hallRental.weekDays === '' || hallRental.weekEnds === '') return;
        setHallRentalArray([...hallRentalArray, hallRental]);

    };

    const handleRemoveRentalItem = (no) => {
        const newRentalArray = hallRentalArray.filter((item, index) => index !== no);
        setHallRentalArray(newRentalArray);
    }


    //dropdowns 

    //AC room
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginTop: "12px", marginBottom: "12px" }}>
                <Button size='small' variant='contained' sx={{ backgroundColor: 'primary.main' }} onClick={handleClickOpenHall}>Add Hall</Button>
            </Box>

            <fieldset style={{ borderRadius: '8px' }}>
                <legend>Rooms Breakdown</legend>

                {hallArray.length === 0
                    ?
                    <Box sx={{ display: 'flex', padding: "2em", justifyContent: 'center' }}>

                        <Typography variant='p' sx={{ color: 'grey' }}>No Halls Added Yet</Typography>
                    </Box>
                    :
                    hallArray.map((item, index) => {
                        return (

                            <HallBreakDown key={index} hallCode={item.hallCode} hallAc={item.hallAc} floorLevel={item.floorLevel} hallNoOfAdults={item.hallNoOfAdults} hallNoOfChildren={item.hallNoOfChildren} hallRemarks={item.hallRemarks} hallRental={item.hallRental} handleHallDelete={handleHallDelete} handleHallEdit={handleHallEdit} index={index} />
                        )
                    })}

            </fieldset>


            {/* Add new Hall popup */}
            <React.Fragment>
                <Dialog
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    open={openHall}
                    onClose={handleClose}

                >
                    <DialogTitle>Add New Hall</DialogTitle>
                    <form>
                        <DialogContent sx={{ maxHeight: "350px" }}>
                            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '20px' }}>
                                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                    <Typography variant='p' sx={{ color: 'black' }}>Hall Code</Typography>
                                </Box>
                                <TextField className="input_field" error={error.ctName} required id="outlined-required" label="Hall Name" placeholder='Hall Name/Code' fullWidth size='small' onChange={handleHallCodeChange} helperText={hallExist ? "Already exist" : ''} value={hallValues.hallCode} />
                            </Box>
                            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                    <Typography variant='p' sx={{ color: 'black' }}>AC/Non-AC</Typography>
                                </Box>

                                <FormControl sx={{ width: '100%', }}>
                                    <InputLabel id="demo-simple-select-label">select</InputLabel>
                                    <Select
                                        required
                                        xs={{ width: "5%" }}
                                        size='small'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={hallValues.hallAc}
                                        label="Age"
                                        onChange={handleHallAcChange}
                                    >
                                        <MenuItem value={"AC"}>AC</MenuItem>
                                        <MenuItem value={"Non-Ac"}>Non-AC</MenuItem>

                                    </Select>
                                </FormControl>
                            </Box>

                            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                    <Typography variant='p' sx={{ color: 'black' }}>Floor Level</Typography>
                                </Box>
                                <TextField type='number' error={error.ctName} required id="outlined-required" label="" placeholder='Floor Level' fullWidth size='small' onChange={handleHallFloorChange} helperText={error.ctName ? "Invalid Input" : ''} value={hallValues.floorLevel} />
                            </Box>
                            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                    <Typography variant='p' sx={{ color: 'black' }}>Number Of Adults</Typography>
                                </Box>
                                <TextField type='number' error={error.ctName} required id="outlined-required" label="" placeholder='No of Adults' fullWidth size='small' onChange={handleHallNoOfAdultsChange} helperText={error.ctName ? "Invalid Input" : ''} value={hallValues.hallNoOfAdults} />
                            </Box>
                            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                    <Typography variant='p' sx={{ color: 'black' }}>Number Of Children</Typography>
                                </Box>
                                <TextField type='number' error={error.ctName} required id="outlined-required" label="" placeholder='No of Children' fullWidth size='small' onChange={handleHallNoOfChildrenChange} helperText={error.ctName ? "Invalid Input" : ''} value={hallValues.hallNoOfChildren} />
                            </Box>

                            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                    <Typography variant='p' sx={{ color: 'black' }}>Remark</Typography>
                                </Box>
                                <TextField error={error.ctName} required id="outlined-required" label="Remark" placeholder='Enter Remark' fullWidth size='small' onChange={handleHallRemarksChange} helperText={error.ctName ? "Invalid Input" : ''} value={hallValues.hallRemark} />
                            </Box>
                            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                    <Typography variant='p' sx={{ color: 'black' }}>Rental</Typography>
                                </Box>
                                <TextField type='number' error={error.ctName} required id="outlined-required" label="Rental" placeholder='Rental' fullWidth size='small' onChange={handleHallRentalChange} helperText={error.ctName ? "Invalid Input" : ''} value={hallValues.hallRental} />
                            </Box>
                            <Box className="rental_container">
                                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                    <Typography variant='p' sx={{ color: 'black' }}>Add Rental</Typography>
                                </Box>

                                <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                                    <Box sx={{ width: "100%", display: 'flex', justifyContent: 'space-around', marginTop: '20px' }} >
                                        <FormControl sx={{}}>
                                            <InputLabel id="demo-simple-select-label">Month</InputLabel>
                                            <Select
                                                required

                                                size='small'
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={value.district}
                                                label="Age"
                                                sx={{ width: "150px" }}
                                                onChange={handleHallDistrict}


                                            >
                                                <MenuItem value={"January"}>January</MenuItem>
                                                <MenuItem value={"February"}>February</MenuItem>
                                                <MenuItem value={"March"}>March</MenuItem>
                                                <MenuItem value={"April"}>April</MenuItem>
                                                <MenuItem value={"May"}>May</MenuItem>
                                                <MenuItem value={"June"}>June</MenuItem>
                                                <MenuItem value={"July"}>July</MenuItem>
                                                <MenuItem value={"August"}>August</MenuItem>
                                                <MenuItem value={"September"}>September</MenuItem>
                                                <MenuItem value={"October"}>October</MenuItem>
                                                <MenuItem value={"November"}>November</MenuItem>
                                                <MenuItem value={"December"}>December</MenuItem>

                                            </Select>
                                        </FormControl>
                                        <TextField type='number' id="outlined-required" label="WeekDays" placeholder='WeekDays' size='small' onChange={handleHallWeekdays} helperText={error.ctName ? "Invalid Input" : ''} sx={{ width: "150px" }} />
                                        <TextField type='number' id="outlined-required" label="Weekend" placeholder='Weekend' size='small' onChange={handleHallWeekends} helperText={error.ctName ? "Invalid Input" : ''} sx={{ width: "150px" }} />
                                        <Button variant='contained' size='small' onClick={handleHallAdd} >Add</Button>


                                    </Box>
                                </Box>


                                {hallRentalArray.map((item, index) => {
                                    return (
                                        <Box>
                                            <Paper sx={{ display: 'flex', padding: "1.2em 2em", justifyContent: 'space-between', marginBottom: "1em" }}>
                                                <Box>
                                                    <Typography variant='p' sx={{ color: 'black', marginRight: '0.6em', fontWeight: "bold" }}>Month</Typography>
                                                    <Typography variant='p' sx={{ color: 'grey', fontWeight: '500' }}>{item.district}</Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant='p' sx={{ color: 'black', marginRight: '0.6em', fontWeight: "bold" }}>WeekDays</Typography>
                                                    <Typography variant='p' sx={{ color: 'grey', fontWeight: '500' }}>{item.weekDays}</Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant='p' sx={{ color: 'black', marginRight: '0.6em', fontWeight: 'bold' }}>WeekEnd</Typography>
                                                    <Typography variant='p' sx={{ color: 'grey', fontWeight: '500' }}>{item.weekEnds}</Typography>
                                                </Box>
                                                <CancelIcon sx={{ cursor: 'pointer' }} onClick={() => handleRemoveRentalItem(index)} />

                                            </Paper>
                                        </Box>
                                    )

                                })}

                            </Box>

                        </DialogContent>
                        <DialogActions>
                            <Button variant='contained' onClick={handleSaveHall}>Save</Button>
                            <Button variant='outlined' onClick={handleCloseHall}>Close</Button>
                        </DialogActions>

                    </form>
                </Dialog>
            </React.Fragment>


            {/* alert add hall all should fill*/}
            <div>

                <Snackbar open={openHallFillAlert} autoHideDuration={4000} onClose={handleCloseHallFillAlert}>
                    <Alert
                        onClose={handleCloseHallFillAlert}
                        severity="error"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        Can't Save | You must fill all the fields
                    </Alert>
                </Snackbar>
            </div>


            {/* alert same hall exist add hall popup*/}
            <div>

                <Snackbar open={openHallExistAlert} autoHideDuration={4000} onClose={handleCloseHallExistAlert}>
                    <Alert
                        onClose={handleCloseHallExistAlert}
                        severity="error"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        Can't Save | Hall No already exist
                    </Alert>
                </Snackbar>
            </div>

        </Box>

    )
}

export default EditHall