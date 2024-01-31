import React, { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'

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

import UnitBreakDown from '../UnitBreakDown';
const EditUnit = ({ roomArray, setRoomArray }) => {
    const [openUnit, setOpenUnit] = useState(false);

    const handleClickOpenUnit = () => {
        setOpenUnit(true);
    };

    const handleCloseUnit = () => {
        setOpenUnit(false);
    };


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

    const [unitArray, setUnitArray] = useState([]);


    const handleSaveUnit = () => {
        if (unitValues.unitCode === '' || unitValues.unitAc === '' || unitValues.floorLevel === '' || unitValues.unitRemark === '' || unitValues.unitRental === '') {
            setOpenUnitFillAlert(true);
            return;

        }

        if (unitExist) {
            setOpenUnitExistAlert(true);
            return;
        }

        const newUnit = {
            ...unitValues,
            selectedRooms: [],
        };
        setUnitArray([...unitArray, newUnit]);
        setUnitValues({ unitCode: '', unitAc: '', floorLevel: '', unitRemark: '', unitRental: '', roomAttached: false, })
        setOpenUnit(false);
    };



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




    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: "12px", marginBottom: "12px" }}>
                <Button size='small' variant='contained' sx={{ backgroundColor: 'primary.main' }} onClick={handleClickOpenUnit}>Add Unit</Button>
            </Box>
            {unitArray.length === 0
                ?
                <Box sx={{ display: 'flex', padding: "2em", justifyContent: 'center' }}>

                    <Typography variant='p' sx={{ color: 'grey' }}>No Units Added Yet</Typography>
                </Box>
                :
                unitArray.map((item, index) => {
                    return (
                        <UnitBreakDown key={index} unitCode={item.unitCode} unitAc={item.unitAc} floorLevel={item.floorLevel} unitNoOfAdults={item.unitNoOfAdults} unitNoOfChildren={item.unitNoOfChildren} unitRemarks={item.unitRemarks} unitRental={item.unitRental} roomArray={roomArray} setRoomArray={setRoomArray} selectedRooms={item.selectedRooms} handleUnitDelete={handleUnitDelete} />
                    )
                })}




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