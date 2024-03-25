import React, { useState, useEffect } from 'react'
import { Box, Button, Typography, TextField, Paper } from '@mui/material'
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
import axios from 'axios';
import { useParams } from 'react-router-dom';
import UnitBreakDown from '../UnitBreakDown';
const EditUnit = ({ roomArray, setRoomArray, unitArray, setUnitArray }) => {

    const { homeId } = useParams();

    const [openUnit, setOpenUnit] = useState(false);
    const [fullWidth, setFullWidth] = useState(true);
    const [maxWidth, setMaxWidth] = useState('sm');

    const [isEditMode, setIsEditMode] = useState(false);
    const [editIndex, setEditIndex] = useState(null);


    useEffect(() => {
        if (isEditMode && editIndex !== null) {
            // Editing an existing room
            const editedUnit = unitArray[editIndex];
            setUnitValues({
                unitCode: editedUnit.unitCode,
                unitAC: editedUnit.unitAc,
                floorLevel: editedUnit.floorLevel,
                unitRemark: editedUnit.unitRemark,
                unitRental: editedUnit.unitRental,
                roomAttached: editedUnit.roomAttached,
                selectedRooms: editedUnit.selectedRooms

            });
        } else {
            // Adding a new room
            setUnitValues({
                roomCode: '',
                roomAc: '',
                RoomType: '',
                NoOfBeds: '',
                NoOfAdults: '',
                NoOfChildren: '',
                roomRemarks: '',
                roomRental: '',
                groupByUnit: false,
            });
        }
    }, [isEditMode, editIndex, roomArray, unitArray]);

    //dropdowns 

    //AC room
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    const handleClickOpenUnit = () => {
        setUnitValues({ unitCode: '', unitAc: '', floorLevel: '', unitRemark: '', unitRental: '', roomAttached: false, });
        setOpenUnit(true);
    };

    const handleCloseUnit = () => {
        setOpenUnit(false);
    };

    const [error, setError] = useState({
        ctName: false, ctAddress: false, ctDescription: false, ctContactNo: false
    });


    const [unitValues, setUnitValues] = useState({
        unitCode: '', unitAc: '', floorLevel: '', unitRemark: '', unitRental: '', roomAttached: false, selectedRooms: []
    })
    const [unitExist, setUnitExist] = useState(false);
    const handleUnitCodeChange = (e) => {
        const unitCodeExists = unitArray.some(unit => unit.unitCode === e.target.value);
        if (unitCodeExists) {
            setUnitExist(true)
        } else {
            setUnitExist(false)
        }
        setUnitValues({ ...unitValues, unitCode: e.target.value });

    }

    const handleUnitAcChange = (e) => {
        setUnitValues({ ...unitValues, unitAc: e.target.value });
    }

    const handleFloorLevelChange = (e) => {
        setUnitValues({ ...unitValues, floorLevel: e.target.value });
    }

    const handleUnitRemarkChange = (e) => {
        setUnitValues({ ...unitValues, unitRemark: e.target.value });
    }

    const handleUnitRentalChange = (e) => {
        setUnitValues({ ...unitValues, unitRental: e.target.value });
    }



    const handleSaveUnit = () => {
        if (unitValues.unitCode === '' || unitValues.unitAc === '' || unitValues.floorLevel === '' || unitValues.unitRemark === '' || unitValues.unitRental === '') {
            setOpenUnitFillAlert(true);
            return;

        }

        // if (unitExist) {
        //     setOpenUnitExistAlert(true);
        //     return;
        // }

        if (isEditMode && editIndex !== null) {
            // Editing an existing room
            const updatedUnitArray = [...unitArray];
            updatedUnitArray[editIndex] = {
                ...updatedUnitArray[editIndex],
                ...unitValues,
                unitRentalArray: [...unitRentalArray], // Copy the rentalArray as well
            };
            setUnitArray(updatedUnitArray);
        } else {
            // Adding a new room
            // const updatedValues = { ...unitValues, unitRentalArray };
            // setUnitArray([...unitArray, updatedValues]);

            const newUnit = {
                ...unitValues,
                selectedRooms: [],
                unitRentalArray
            };
            setUnitArray([...unitArray, newUnit]);

        }

        setUnitRentalArray([]);
        setOpenUnit(false);
        setIsEditMode(false);
        setEditIndex(null);

        console.log(unitArray);
    };

    console.log(unitArray);

    const handleUnitEdit = (index) => {
        const editedUnit = unitArray[index];

        setUnitValues({
            unitCode: editedUnit.unitCode,
            unitAC: editedUnit.unitAc,
            floorLevel: editedUnit.floorLevel,
            unitRemark: editedUnit.unitRemark,
            unitRental: editedUnit.unitRental,
            roomAttached: editedUnit.roomAttached,
            selectedRooms: editedUnit.selectedRooms


        })

        axios.get(`http://localhost:3002/admin/auth/locationadmin/holidayhome/rental/${homeId}/${editedUnit.unitCode}`)
            .then(res => {
                console.log("get")
                const rental = res.data.roomRental;
                console.log(rental)
                for (let i = 0; i < rental.length; i++) {
                    console.log("in")
                    console.log(rental[i].Month);
                    setUnitRental({
                        district: rental[i].Month,
                        weekDays: rental[i].WeekRental,
                        weekEnds: rental[i].WeekEndRental,
                    });

                    console.log("rental", rental);

                    setUnitRentalArray(rental); // Use functional update
                    console.log("rental array", unitRentalArray);
                }




                setOpenUnit(true)
                setEditIndex(index);
                setIsEditMode(true);

            })
            .catch(err => {
                console.log(err);
            });



    }



    const handleUnitDelete = (unitCode, selectedRooms) => {

        setRoomArray((prevRoomArray) => {
            const updatedRoomArray = prevRoomArray.map((room) => {
                if (selectedRooms.some((item) => item.roomCode === room.roomCode)) {
                    return { ...room, groupByUnit: false };
                }
                return room;
            });

            return updatedRoomArray;
        });

        selectedRooms.length = 0;

        setUnitArray((prevUnitArray) => {
            const newUnitArray = prevUnitArray.filter((item) => item.unitCode !== unitCode);
            return newUnitArray;
        });
        return null;
    };



    const [unitRental, setUnitRental] = useState({
        district: '', weekDays: '', weekEnds: ''
    });

    const handleUnitDistrict = (e) => {
        setUnitRental({ ...unitRental, district: e.target.value });
    }

    const handleUnitWeedays = (e) => {
        setUnitRental({ ...unitRental, weekDays: e.target.value });
        setNewUnitWeekDayValue(e.target.value);
    }

    const handleUnitWeekends = (e) => {
        setUnitRental({ ...unitRental, weekEnds: e.target.value });
        setNewUnitWeekendValue(e.target.value);
    }


    const [newUnitWeekDayValue, setNewUnitWeekDayValue] = useState('')
    const [newUnitWeekendValue, setNewUnitWeekendValue] = useState('')



    const [unitRentalArray, setUnitRentalArray] = useState([]);
    const handleUnitAdd = () => {
        if (unitRental.district === '' || unitRental.weekDays === '' || unitRental.weekEnds === '') return;
        setUnitRentalArray([...unitRentalArray, unitRental]);
        setUnitRental({
            district: '',
            weekDays: '',
            weekEnds: '',
        });

        setNewUnitWeekDayValue('');
        setNewUnitWeekendValue('');
    };


    const handleRemoveUnitRentalItem = (no) => {
        const newUnitRentalArray = unitRentalArray.filter((item, index) => index !== no);
        setUnitRentalArray(newUnitRentalArray);
    }

    //unit - all fields should filled warning
    const [openUnitFillAlert, setOpenUnitFillAlert] = useState(false);

    const handleCloseUnitFillAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenUnitFillAlert(false);
    };

    //unit - same unit no exist warning

    const [openUnitExistAlert, setOpenUnitExistAlert] = useState(false);

    const handleCloseUnitExistAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenUnitExistAlert(false);
    };


    //unit - same unit no exist warning

    const [openHallExistAlert, setOpenHallExistAlert] = useState(false);

    const handleCloseHallExistAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenHallExistAlert(false);
    };

    console.log(unitArray);




    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginTop: "12px", marginBottom: "12px" }}>
                <Button size='small' variant='contained' sx={{ backgroundColor: 'primary.main' }} onClick={handleClickOpenUnit}>Add Unit</Button>
            </Box>

            <fieldset style={{ borderRadius: '8px' }}>
                <legend>Units Breakdown</legend>
                {unitArray.length === 0
                    ?
                    <Box sx={{ display: 'flex', padding: "2em", justifyContent: 'center' }}>

                        <Typography variant='p' sx={{ color: 'grey' }}>No Units Added Yet</Typography>
                    </Box>
                    :
                    unitArray.map((item, index) => {
                        item.selectedRooms = [];

                        axios.get(`http://localhost:3002/admin/auth/locationadmin/holidayhome/${homeId}/${item.unitCode}`)
                            .then((res) => {
                                if (Response) {
                                    const srDetails = res.data.selectedRoom;
                                    console.log(srDetails);
                                    for (let i = 0; i < srDetails.length; i++) {
                                        axios.get(`http://localhost:3002/admin/auth/locationadmin/holidayhome/room/${homeId}/${srDetails[i].roomCode}`)
                                            .then((res) => {
                                                const room = res.data;
                                                // Check if 'room' already exists in 'selectedRooms' array
                                                const existingRoomIndex = item.selectedRooms.findIndex(existingRoom => existingRoom.roomCode === room.roomCode);
                                                if (existingRoomIndex === -1) {
                                                    // If not found, push 'room' into 'selectedRooms'
                                                    item.selectedRooms.push(room);
                                                } else {
                                                    // If found, update the existing item with the new data
                                                    item.selectedRooms[existingRoomIndex] = room;
                                                }
                                            })
                                    }
                                } else {
                                    console.log("No data found");
                                }
                            })

                        return (
                            <UnitBreakDown key={index} unitCode={item.unitCode} unitAc={item.unitAc} floorLevel={item.floorLevel} unitNoOfAdults={item.unitNoOfAdults} unitNoOfChildren={item.unitNoOfChildren} unitRemarks={item.unitRemarks} unitRental={item.unitRental} roomArray={roomArray} setRoomArray={setRoomArray} selectedRooms={item.selectedRooms} handleUnitDelete={handleUnitDelete} handleUnitEdit={handleUnitEdit} index={index} />
                        )
                    })}

            </fieldset>


            {/* Add new Unit popup */}
            <React.Fragment>
                <Dialog
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    open={openUnit}
                    onClose={handleCloseUnit}

                >
                    <DialogTitle>Add New Unit</DialogTitle>
                    <form>
                        <DialogContent sx={{ maxHeight: "350px" }}>
                            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '20px' }}>
                                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                    <Typography variant='p' sx={{ color: 'black' }}>Unit No</Typography>
                                </Box>
                                <TextField className='input_field' value={unitValues.unitCode} required id="outlined-required" placeholder='Enter Unit No' fullWidth size='small' onChange={handleUnitCodeChange} helperText={unitExist ? "Already exist" : ''} />
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
                                        value={unitValues.unitAc}
                                        label="Age"
                                        onChange={handleUnitAcChange}
                                    >
                                        <MenuItem value={"AC"}>AC</MenuItem>
                                        <MenuItem value={"Non-AC"}>Non-AC</MenuItem>

                                    </Select>
                                </FormControl>
                            </Box>
                            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                    <Typography variant='p' sx={{ color: 'black' }}>Floor Level</Typography>
                                </Box>
                                <TextField type='number' value={unitValues.floorLevel} error={error.ctName} required id="outlined-required" label="" placeholder='Floor Level' fullWidth size='small' onChange={handleFloorLevelChange} helperText={error.ctName ? "Invalid Input" : ''} />
                            </Box>


                            <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                    <Typography variant='p' sx={{ color: 'black' }}>Remark</Typography>
                                </Box>
                                <TextField error={error.ctName} value={unitValues.unitRemark} required id="outlined-required" label="Remark" placeholder='Enter Remark' fullWidth size='small' onChange={handleUnitRemarkChange} helperText={error.ctName ? "Invalid Input" : ''} />
                            </Box>
                            {/* <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                                <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                    <Typography variant='p' sx={{ color: 'black' }}>Rental</Typography>
                                </Box>
                                <TextField type='number' value={unitValues.unitRental} error={error.ctName} required id="outlined-required" label="Rental" placeholder='Rental' fullWidth size='small' onChange={handleUnitRentalChange} helperText={error.ctName ? "Invalid Input" : ''} />
                            </Box> */}

                            {/* <Box className="rental_container">
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
                                                onChange={handleUnitDistrict}


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
                                        <TextField type='number' id="outlined-required" label="WeekDays" placeholder='WeekDays' size='small' value={newUnitWeekDayValue} onChange={handleUnitWeedays} helperText={error.ctName ? "Invalid Input" : ''} sx={{ width: "150px" }} />
                                        <TextField type='number' id="outlined-required" label="Weekend" placeholder='Weekend' size='small' value={newUnitWeekendValue} onChange={handleUnitWeekends} helperText={error.ctName ? "Invalid Input" : ''} sx={{ width: "150px" }} />
                                        <Button variant='contained' size='small' onClick={handleUnitAdd} >Add</Button>


                                    </Box>
                                </Box>


                                {unitRentalArray.map((item, index) => {
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
                                                <CancelIcon sx={{ cursor: 'pointer' }} onClick={() => handleRemoveUnitRentalItem(index)} />

                                            </Paper>
                                        </Box>
                                    )

                                })}

                            </Box> */}

                        </DialogContent>
                        <DialogActions>
                            <Button variant='contained' onClick={handleSaveUnit}>Save</Button>
                            <Button variant='outlined' onClick={handleCloseUnit}>Close</Button>
                        </DialogActions>

                    </form>
                </Dialog>
            </React.Fragment>





            {/* alert add unit all should fill*/}
            <div>

                <Snackbar open={openUnitFillAlert} autoHideDuration={4000} onClose={handleCloseUnitFillAlert}>
                    <Alert
                        onClose={handleCloseUnitFillAlert}
                        severity="error"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        Can't Save | You must fill all the fields
                    </Alert>
                </Snackbar>
            </div>


            {/* alert same unit exist add room popup*/}
            <div>

                <Snackbar open={openUnitExistAlert} autoHideDuration={4000} onClose={handleCloseUnitExistAlert}>
                    <Alert
                        onClose={handleCloseUnitExistAlert}
                        severity="error"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        Can't Save | Unit No already exist
                    </Alert>
                </Snackbar>
            </div>

        </Box>

    )
}

export default EditUnit