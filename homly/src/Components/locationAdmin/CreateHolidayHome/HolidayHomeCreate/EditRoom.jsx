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

import RoomBreakdown from '../RoomBreakdown';

import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditRoom = ({ roomArray, setRoomArray, setAdultsCount, setChildCount }) => {
    // open pop up for add room
    const [open, setOpen] = useState(false);
    const [fullWidth, setFullWidth] = useState(true);
    const [maxWidth, setMaxWidth] = useState('sm');

    const [isEditMode, setIsEditMode] = useState(false);
    const [editIndex, setEditIndex] = useState(null);


    const [values, setValues] = useState({
        roomCode: '', roomAc: '', RoomType: '', floorLevel: 0, NoOfAdults: 0, NoOfChildren: 0, roomRemarks: '', roomRental: 0, groupByUnit: false,
    })


    useEffect(() => {
        if (isEditMode && editIndex !== null) {
            // Editing an existing room
            const editedRoom = roomArray[editIndex];
            setValues({
                roomCode: editedRoom.roomCode,
                roomAc: editedRoom.roomAc,
                RoomType: editedRoom.RoomType,
                floorLevel: editedRoom.floorLevel,
                NoOfAdults: editedRoom.NoOfAdults,
                NoOfChildren: editedRoom.NoOfChildren,
                roomRemarks: editedRoom.roomRemarks,
                roomRental: editedRoom.roomRental,
                groupByUnit: editedRoom.groupByUnit,
            });
        } else {
            // Adding a new room
            setValues({
                roomCode: '',
                roomAc: '',
                RoomType: '',
                floorLevel: 0,
                NoOfAdults: '',
                NoOfChildren: '',
                roomRemarks: '',
                roomRental: '',
                groupByUnit: false,
            });
        }
    }, [isEditMode, editIndex, roomArray]);


    const handleClickOpen = () => {
        setValues({ roomCode: '', roomAc: '', RoomType: '', floorLevel: 0, NoOfAdults: '', NoOfChildren: '', roomRemarks: '', roomRental: '', groupByUnit: false });
        setOpen(true);
    };



    const handleClose = () => {
        setOpen(false);
    };
    //remove room alert
    const [openAlert, setOpenAlert] = useState(false);

    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
    };

    //room - all fields should filled warning
    const [openRoomFillAlert, setOpenRoomFillAlert] = useState(false);

    const handleCloseRoomFillAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenRoomFillAlert(false);
    };

    //room - same room no exist warning

    const [openRoomExistAlert, setOpenRoomExistAlert] = useState(false);

    const handleCloseRoomExistAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenRoomExistAlert(false);
    };





    const handleSaveRoom = () => {
        // if (values.roomCode === '' || values.roomAc === '' || values.RoomType === '' || values.NoOfBeds === '' || values.NoOfAdults === '' || values.NoOfChildren === '' || values.roomRemarks === '' || values.roomRental === '') {
        //     setOpenRoomFillAlert(true);
        //     return;
        // }

        // const updatedValues = { ...values, rentalArray };
        // setRoomArray([...roomArray, updatedValues]);
        // setRentalArray([]);

        // setValues({ roomCode: '', roomAc: '', RoomType: '', NoOfBeds: '', NoOfAdults: '', NoOfChildren: '', roomRemarks: '', roomRental: '', groupByUnit: false })
        // setOpen(false);
        if (values.roomCode === '' || values.roomAc === '' || values.RoomType === '' || values.NoOfBeds === '' || values.NoOfAdults === '' || values.NoOfChildren === '' || values.roomRemarks === '' || values.roomRental === '') {
            setOpenRoomFillAlert(true);
            return;
        }

        if (roomExist) {
            setOpenRoomExistAlert(true);
            return;
        }



        if (isEditMode && editIndex !== null) {
            // Editing an existing room
            const updatedRoomArray = [...roomArray];
            updatedRoomArray[editIndex] = {
                ...updatedRoomArray[editIndex],
                ...values,
                rentalArray: [...rentalArray], // Copy the rentalArray as well
            };
            setRoomArray(updatedRoomArray);
        } else {
            // Adding a new room
            const updatedValues = { ...values, rentalArray };
            setRoomArray([...roomArray, updatedValues]);
            // setRoomArray([...roomArray, values]);
        }

        setRentalArray([]);

        // Close the dialog and reset state
        setOpen(false);
        setIsEditMode(false);
        setEditIndex(null);

        // setAdultsCount(10);

        setAdultsCount(prevCount => prevCount + parseInt(values.NoOfAdults, 10));
        setChildCount(prevCount => prevCount + parseInt(values.NoOfChildren, 10));


    };

    const handleRoomDelete = (roomCode, groupByUnit, noOfAdults, noOfChildren) => { //for room breakdown component
        if (groupByUnit) {
            setOpenAlert(true);
        }
        else {
            const newRoomArray = roomArray.filter((item) => item.roomCode !== roomCode);
            setRoomArray(newRoomArray);
            setAdultsCount(prevCount => prevCount - parseInt(noOfAdults, 10));
            setChildCount(prevCount => prevCount - parseInt(noOfChildren, 10));


        }
    }

    const handleRoomEdit = (index) => {

        const editedRoom = roomArray[index];

        setValues({
            roomCode: editedRoom.roomCode,
            roomAc: editedRoom.roomAc,
            RoomType: editedRoom.RoomType,
            floorLevel: editedRoom.floorLevel,
            NoOfAdults: editedRoom.NoOfAdults,
            NoOfChildren: editedRoom.NoOfChildren,
            roomRemarks: editedRoom.roomRemarks,
            roomRental: editedRoom.roomRental,
            groupByUnit: editedRoom.groupByUnit,

        });

        setRentalArray(editedRoom.rentalArray);


        setOpen(true);
        setEditIndex(index);
        setIsEditMode(true);


    }

    const [error, setError] = useState({
        ctName: false, ctAddress: false, ctDescription: false, ctContactNo: false
    });

    const [roomExist, setRoomExist] = useState(false);

    const handleRoomCodeChange = (e) => {
        const roomCodeExists = roomArray.some(room => room.roomCode === e.target.value);
        if (roomCodeExists) {
            setRoomExist(true);
        }
        else {
            setRoomExist(false);
        }
        setValues({ ...values, roomCode: e.target.value });

    }
    const handleRoomAcChange = (e) => {
        setValues({ ...values, roomAc: e.target.value });
    }

    const handleRoomTypeChange = (e) => {
        setValues({ ...values, RoomType: e.target.value });
    }

    const handleFloorLevelChange = (e) => {
        setValues({ ...values, floorLevel: e.target.value });
    }

    const handleNoOfAdults = (e) => {
        setValues({ ...values, NoOfAdults: e.target.value });
    }

    const handleNoOfChildren = (e) => {
        setValues({ ...values, NoOfChildren: e.target.value });
    }


    const handleRemarksChange = (e) => {
        setValues({ ...values, roomRemarks: e.target.value });
    }

    const handleRentalChange = (e) => {
        setValues({ ...values, roomRental: e.target.value });
    }

    const [rental, setRental] = useState({
        district: '', weekDays: '', weekEnds: ''
    });

    const handleDistrict = (e) => {
        setRental({ ...rental, district: e.target.value });
    }

    const handleWeekdays = (e) => {
        setRental({ ...rental, weekDays: e.target.value });
        setNewRoomWeekDayValue(e.target.value);
    }

    const handleWeekends = (e) => {
        setRental({ ...rental, weekEnds: e.target.value });
        setNewRoomWeekendValue(e.target.value);
    }

    const [newRoomWeekDayValue, setNewRoomWeekDayValue] = useState('')
    const [newRoomWeekendValue, setNewRoomWeekendValue] = useState('')




    const [rentalArray, setRentalArray] = useState([]);
    const handleAdd = () => {
        if (rental.district === '' || rental.weekDays === '' || rental.weekEnds === '') return;
        setRentalArray([...rentalArray, rental]);
        setRental({
            district: '',
            weekDays: '',
            weekEnds: '',
        });

        setNewRoomWeekDayValue('');
        setNewRoomWeekendValue('');

    };


    const handleRemoveRentalItem = (no) => {
        const newRentalArray = rentalArray.filter((item, index) => index !== no);
        setRentalArray(newRentalArray);
    }
    //dropdowns 

    //AC room
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    console.log(roomArray);

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginTop: "12px", marginBottom: '12px' }}>
                <Button size='small' variant='contained' sx={{ backgroundColor: 'primary.main' }} onClick={handleClickOpen}>Add Room</Button>
            </Box>

            <fieldset style={{ borderRadius: '8px' }}>
                <legend>Rooms Breakdown</legend>

                {roomArray.length === 0
                    ?
                    <Box sx={{ display: 'flex', padding: "2em", justifyContent: 'center' }}>

                        <Typography variant='p' sx={{ color: 'grey', textAlign: 'center' }}>No Rooms Added Yet <br></br>Add Rooms to Submit form</Typography>
                    </Box>
                    :
                    roomArray.map((item, index) => {

                        return (
                            <RoomBreakdown key={index} roomCode={item.roomCode} roomAc={item.roomAc} roomType={item.RoomType} floorLevel={item.floorLevel} noOfAdults={item.NoOfAdults} noOfChildren={item.NoOfChildren} roomRemarks={item.roomRemarks} roomRental={item.roomRental} groupByUnit={item.groupByUnit} handleRoomEdit={handleRoomEdit} handleRoomDelete={handleRoomDelete} index={index} />
                        )
                    })}

            </fieldset>

            {/* Add new room popup */}
            <React.Fragment>
                <Dialog
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    open={open}
                    onClose={handleClose}

                >
                    <DialogTitle>Add New Room</DialogTitle>
                    <form>
                        <DialogContent sx={{ maxHeight: "350px" }}>
                            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '20px' }}>
                                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                    <Typography variant='p' sx={{ color: 'black' }}>Room No</Typography>
                                </Box>
                                <TextField className='input_field' required id="outlined-required" label="Enter Room No" placeholder='Enter No' fullWidth size='small' onChange={handleRoomCodeChange} helperText={roomExist ? "Already exist" : ''} value={values.roomCode} />
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
                                        value={values.roomAc}
                                        label="Age"
                                        onChange={handleRoomAcChange}
                                    >
                                        <MenuItem value={"AC"}>AC</MenuItem>
                                        <MenuItem value={"Non-AC"}>Non-AC</MenuItem>

                                    </Select>
                                </FormControl>
                            </Box>
                            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                    <Typography variant='p' sx={{ color: 'black' }}>Room Type</Typography>
                                </Box>

                                <FormControl sx={{ width: '100%', }}>
                                    <InputLabel id="demo-simple-select-label">Select</InputLabel>
                                    <Select
                                        required
                                        xs={{ width: "5%" }}
                                        size='small'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={values.RoomType}
                                        label="Age"
                                        onChange={handleRoomTypeChange}
                                    >
                                        <MenuItem value={"SingleRoom"}>Single Room</MenuItem>
                                        <MenuItem value={"DoubleRoom"}>Double Room</MenuItem>
                                        <MenuItem value={"TripleRoom"}>Triple Room</MenuItem>

                                    </Select>
                                </FormControl>
                            </Box>

                            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                    <Typography variant='p' sx={{ color: 'black' }}>Floor Level</Typography>
                                </Box>
                                <TextField type='number' value={values.floorLevel} error={error.ctName} required id="outlined-required" label="" placeholder='Floor Level' fullWidth size='small' onChange={handleFloorLevelChange} helperText={error.ctName ? "Invalid Input" : ''} />
                            </Box>

                            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                    <Typography variant='p' sx={{ color: 'black' }}>Number Of Adults</Typography>
                                </Box>
                                <TextField disabled type='number' error={error.ctName} required id="outlined-required" label="" placeholder='No of Adults' fullWidth size='small' onChange={handleNoOfAdults} value={values.NoOfAdults} />
                            </Box>
                            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                    <Typography variant='p' sx={{ color: 'black' }}>Number Of Children</Typography>
                                </Box>
                                <TextField disabled type='number' error={error.ctName} required id="outlined-required" label="" placeholder='No of Children' fullWidth size='small' onChange={handleNoOfChildren} value={values.NoOfChildren} />
                            </Box>
                            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                    <Typography variant='p' sx={{ color: 'black' }}>Rental</Typography>
                                </Box>
                                <TextField disabled type='number' error={error.ctName} required id="outlined-required" label="Rental" placeholder='Rental' fullWidth size='small' onChange={handleRentalChange} value={values.roomRental} />
                            </Box>

                            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                    <Typography variant='p' sx={{ color: 'black' }}>Remark</Typography>
                                </Box>
                                <TextField error={error.ctName} required id="outlined-required" label="Remark" placeholder='Enter Remark' fullWidth size='small' onChange={handleRemarksChange} helperText={error.ctName ? "Invalid Input" : ''} value={values.roomRemarks} />
                            </Box>
                            <Box className="rental_container">
                                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                    <Typography variant='p' sx={{ color: 'black' }}>Add Rental</Typography>
                                </Box>

                                <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                                    <Box sx={{ width: "100%", display: 'flex', gap: "1em", justifyContent: 'space-around', marginTop: '20px' }} >
                                        <FormControl sx={{}}>
                                            <InputLabel id="demo-simple-select-label">District</InputLabel>
                                            <Select
                                                required

                                                size='small'
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={value.district}
                                                label="Age"
                                                sx={{ width: "150px" }}
                                                onChange={handleDistrict}


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

                                        <TextField type='number' id="outlined-required" label="WeekDays" placeholder='WeekDays' value={newRoomWeekDayValue} size='small' onChange={handleWeekdays} helperText={error.ctName ? "Invalid Input" : ''} sx={{ width: "200px" }} />
                                        <TextField type='number' id="outlined-required" label="Weekend" placeholder='Weekend' value={newRoomWeekendValue} size='small' onChange={handleWeekends} helperText={error.ctName ? "Invalid Input" : ''} sx={{ width: "200px" }} />
                                        <Button variant='contained' size='small' onClick={handleAdd} >Add</Button>


                                    </Box>
                                </Box>


                                {rentalArray.map((item, index) => {
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
                            <Button variant='contained' onClick={handleSaveRoom}>Save</Button>
                            <Button variant='outlined' onClick={handleClose}>Close</Button>
                        </DialogActions>

                    </form>
                </Dialog>
            </React.Fragment>

            {/* alert remove room */}
            <div>

                <Snackbar open={openAlert} autoHideDuration={4000} onClose={handleCloseAlert}>
                    <Alert
                        onClose={handleCloseAlert}
                        severity="error"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        Can't Remove | This room is grouped by a Unit
                    </Alert>
                </Snackbar>
            </div>

            {/* alert add room all should fill*/}
            <div>

                <Snackbar open={openRoomFillAlert} autoHideDuration={4000} onClose={handleCloseRoomFillAlert}>
                    <Alert
                        onClose={handleCloseRoomFillAlert}
                        severity="error"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        Can't Save | You must fill all the fields
                    </Alert>
                </Snackbar>
            </div>

            {/* alert same room exist add room popup*/}
            <div>

                <Snackbar open={openRoomExistAlert} autoHideDuration={4000} onClose={handleCloseRoomExistAlert}>
                    <Alert
                        onClose={handleCloseRoomExistAlert}
                        severity="error"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        Can't Save | Room No already exist
                    </Alert>
                </Snackbar>
            </div>

        </Box>
    )
}

export default EditRoom