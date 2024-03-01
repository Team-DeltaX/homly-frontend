import React, { useEffect, useState } from 'react'
import { Box, Typography, TextField, Grid } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditCaretakerDetails = () => {

    const [value, setValue] = useState({
        caretakerName: '', caretakerContactNo: '', caretakerStatus: '', caretakerAddress: '', caretakerDescription: '',
    })

    const [valueSecond, setValueSecond] = useState({
        caretakerName: '', caretakerContactNo: '', caretakerStatus: '', caretakerAddress: '', caretakerDescription: '',
    })


    const { homeId } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:3002/admin/auth/locationadmin/holidayhome/${homeId}`)
            .then((res) => {
                if (Response) {
                    const caretakerDetails = res.data.caretaker;


                    setValue({
                        caretakerName: caretakerDetails[0].Name, caretakerContactNo: caretakerDetails[0].ContactNo, caretakerStatus: caretakerDetails[0].Status, caretakerAddress: caretakerDetails[0].Address, caretakerDescription: caretakerDetails[0].Description,
                    })

                    if (caretakerDetails[1]) {
                        setValueSecond({
                            caretakerName: caretakerDetails[1].Name || "", caretakerContactNo: caretakerDetails[1].ContactNo || "", caretakerStatus: caretakerDetails[1].Status || "", caretakerAddress: caretakerDetails[1].Address || "", caretakerDescription: caretakerDetails[1].Description || "",
                        })

                    }

                } else {
                    console.log("No data found");
                }
            })
        console.log(value.caretakerName);
    }, [])


    console.log(value.caretakerName);


    const [error, setError] = useState({
        ctName: false, ctAddress: false, ctDescription: false, ctContactNo: false
    });

    const handleNameChange = (e) => {
        setValue({ ...value, caretakerName: e.target.value });
        const name_regex = /^[a-zA-Z]+$/;

        if (e.target.value.length > 0) {
            if (!name_regex.test(e.target.value)) {
                setError({ ...error, ctname: true });
            } else {
                setError({ ...error, ctname: false });
            }
        }
    }


    const handleAddressChange = (e) => {
        setValue({ ...value, caretakerAddress: e.target.value });
    }


    const handleDescriptionChange = (e) => {
        setValue({ ...value, caretakerDescription: e.target.value });
    }

    const handleContactNoChange = (e) => {
        setValue({ ...value, caretakerContactNo: e.target.value });
        const phone_regex = /^\d{10}$/;
        if (e.target.value.length > 0) {
            if (!phone_regex.test(e.target.value)) {
                setError({ ...error, ctContactNo: true });
            } else {
                setError({ ...error, ctContactNo: false });
            }
        }
    }


    const handlestatusChange = (e) => {
        setValue({ ...value, caretakerStatus: e.target.value });
    }

    const handleNameChangeSecond = (e) => {
        setValueSecond({ ...valueSecond, caretakerName: e.target.value });
        const name_regex = /^[a-zA-Z]+$/;

        if (e.target.value.length > 0) {
            if (!name_regex.test(e.target.value)) {
                setError({ ...error, ctname: true });
            } else {
                setError({ ...error, ctname: false });
            }
        }
    }

    const handleAddressChangeSecond = (e) => {
        setValueSecond({ ...valueSecond, caretakerAddress: e.target.value });
    }

    const handleDescriptionChangeSecond = (e) => {
        setValueSecond({ ...valueSecond, caretakerDescription: e.target.value });
    }

    const handleContactNoChangeSecond = (e) => {
        setValueSecond({ ...valueSecond, caretakerContactNo: e.target.value });
        const phone_regex = /^\d{10}$/;
        if (e.target.value.length > 0) {
            if (!phone_regex.test(e.target.value)) {
                setError({ ...error, ctContactNo: true });
            } else {
                setError({ ...error, ctContactNo: false });
            }
        }
    }

    const handlestatusChangeSecond = (e) => {
        setValueSecond({ ...valueSecond, caretakerStatus: e.target.value });
    }



    return (
        <Box>

            <fieldset className="edit_container" style={{ borderRadius: '16px', color: 'grey', overflow: 'hidden', paddingBottom: '20px' }}>
                <legend>Caretaker Details</legend>
                <Grid Container style={{ display: 'flex', gap: "3em" }} >
                    <Grid item md={6} sm={12} xs={12} >
                        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                            <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                <Typography variant='p' sx={{ color: 'black' }}>Name</Typography>
                            </Box>
                            <TextField error={error.ctName} required id="outlined-required" label="Enter Name" placeholder='Enter Name' fullWidth size='small' onChange={handleNameChange} helperText={error.ctName ? "Invalid Input" : ''} value={value.caretakerName} />
                        </Box>
                        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                            <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                <Typography variant='p' sx={{ color: 'black' }}>Contact No</Typography>
                            </Box>
                            <TextField required id="outlined-required" label="Enter Contact No" placeholder='Enter Contact No' fullWidth size='small' onChange={handleContactNoChange} value={value.caretakerContactNo} />
                        </Box>
                        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                            <Box sx={{ minWidth: '100px', maxWidth: '100px' }} className="label_container">
                                <Typography variant='p' sx={{ color: 'black' }}>Status</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: "100%", alignItems: 'center' }}>
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={value.caretakerStatus}
                                    onChange={handlestatusChange}

                                >
                                    <FormControlLabel value="Active" control={<Radio />} label="Active" />
                                    <FormControlLabel value="Inactive" control={<Radio />} label="Inactive" />
                                </RadioGroup>
                            </Box>
                        </Box>

                        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                            <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                <Typography variant='p' sx={{ color: 'black' }}>Address</Typography>
                            </Box>
                            <TextField multiline id="outlined-required" label="Enter Address" placeholder='Enter Address' fullWidth size='small' required onChange={handleAddressChange} value={value.caretakerAddress} />
                        </Box>
                        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                            <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                <Typography variant='p' sx={{ color: 'black' }}>Description</Typography>
                            </Box>
                            <TextField id="outlined-required" label="Enter Description" placeholder='Enter Description' fullWidth size='small' onChange={handleDescriptionChange} value={value.caretakerDescription} />
                        </Box>
                        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '1em', marginBottom: '12px' }}>
                            <Box sx={{ minWidth: '100px', maxWidth: '100px' }} className="label_container">
                                <Typography variant='p' sx={{ color: 'black' }}>Image</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>

                                <input type="file" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                            <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                <Typography variant='p' sx={{ color: 'black' }}>Name</Typography>
                            </Box>
                            <TextField error={error.ctName} required id="outlined-required" label="Enter Name" placeholder='Enter Name' fullWidth size='small' onChange={handleNameChangeSecond} helperText={error.ctName ? "Invalid Input" : ''} value={valueSecond.caretakerName} />
                        </Box>
                        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                            <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                <Typography variant='p' sx={{ color: 'black' }}>Contact No</Typography>
                            </Box>
                            <TextField required id="outlined-required" label="Enter Contact No" placeholder='Enter Contact No' fullWidth size='small' onChange={handleContactNoChangeSecond} value={valueSecond.caretakerContactNo} />
                        </Box>
                        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                            <Box sx={{ minWidth: '100px', maxWidth: '100px' }} className="label_container">
                                <Typography variant='p' sx={{ color: 'black' }}>Status</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: "100%", alignItems: 'center' }}>
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={valueSecond.caretakerStatus}
                                    onChange={handlestatusChangeSecond}

                                >
                                    <FormControlLabel value="Active" control={<Radio />} label="Active" />
                                    <FormControlLabel value="Inactive" control={<Radio />} label="Inactive" />
                                </RadioGroup>
                            </Box>
                        </Box>

                        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                            <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                <Typography variant='p' sx={{ color: 'black' }}>Address</Typography>
                            </Box>
                            <TextField multiline id="outlined-required" label="Enter Address" placeholder='Enter Address' fullWidth size='small' required onChange={handleAddressChangeSecond} value={valueSecond.caretakerAddress} />
                        </Box>
                        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                            <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                <Typography variant='p' sx={{ color: 'black' }}>Description</Typography>
                            </Box>
                            <TextField id="outlined-required" label="Enter Description" placeholder='Enter Description' fullWidth size='small' onChange={handleDescriptionChangeSecond} value={valueSecond.caretakerDescription} />
                        </Box>
                        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '1em', marginBottom: '12px' }}>
                            <Box sx={{ minWidth: '100px', maxWidth: '100px' }} className="label_container">
                                <Typography variant='p' sx={{ color: 'black' }}>Image</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>

                                <input type="file" />
                            </Box>
                        </Box>
                    </Grid>

                </Grid>



            </fieldset>

        </Box>
    )
}

export default EditCaretakerDetails