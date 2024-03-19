import React, { useEffect, useState } from 'react'
import { Box, TextField, Typography, Grid } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditHolidayHomeDetails = () => {

    const [value, setValue] = useState({
        name: '', address: '', district: '', description: '', contactNo1: '', contactNo2: '', category: '', status: ''
    })

    const [error, setError] = useState({
        name: false, address: false, description: false, contactNo1: false, contactNo2: false
    });


    const { homeId } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3002/locationadmin/holidayhome/${homeId}`)
            .then((res) => {
                if (Response) {
                    const homeDetails = res.data.homeDetails;
                    const contactNo = res.data.contactNo;

                    // Extract relevant data from response and set to 'value' state
                    setValue({
                        name: homeDetails.Name || '',
                        address: homeDetails.Address || '',
                        district: homeDetails.district, // Add the logic to get district if available
                        description: homeDetails.Description || '',
                        contactNo1: (contactNo && contactNo.length > 0) ? contactNo[0].ContactNo : '',
                        contactNo2: (contactNo && contactNo.length > 1) ? contactNo[1].ContactNo : '',
                        category: homeDetails.Category || '',
                        status: homeDetails.Status || ''
                    });


                } else {
                    console.log("No data found");
                }
            })
    }, [])






    const handleNameChange = (e) => {
        setValue({ ...value, name: e.target.value });
        const name_regex = /^[a-zA-Z\s]+$/;
        if (e.target.value.length > 0) {
            if (!name_regex.test(e.target.value)) {
                setError({ ...error, name: true });
            } else {
                setError({ ...error, name: false });
            }
        }
    }


    const handleAddressChange = (e) => {
        setValue({ ...value, address: e.target.value });
    }


    const handleDistrictChange = (e) => {
        setValue({ ...value, district: e.target.value });
    }

    const handleDisriptionChange = (e) => {
        setValue({ ...value, description: e.target.value });
    }

    const handleContactNo1Change = (e) => {
        const newValue = e.target.value.replace(/\D/g, '');

        // Limit to 10 characters
        if (newValue.length <= 10) {

            setValue({ ...value, contactNo1: newValue });
        }
        const phone_regex = /^\d{10}$/;
        if (e.target.value.length > 0) {
            if (!phone_regex.test(e.target.value)) {
                setError({ ...error, contactNo1: true });
            } else {
                setError({ ...error, contactNo1: false });
            }
        }
    }

    const handleContactNo2Change = (e) => {
        setValue({ ...value, contactNo2: e.target.value });
        const phone_regex = /^\d{10}$/;
        if (e.target.value.length > 0) {
            if (!phone_regex.test(e.target.value)) {
                setError({ ...error, contactNo2: true });
            } else {
                setError({ ...error, contactNo2: false });
            }
        }
    }

    const handlestatusChange = (e) => {
        setValue({ ...value, status: e.target.value });
    }

    const handleCategoryChange = (e) => {
        setValue({ ...value, category: e.target.value });
    }



    return (
        <Box>

            <fieldset className='edit_container' style={{ borderRadius: '16px', color: 'grey', overflow: 'hidden', paddingBottom: '20px' }}>
                <legend>Holiday Home Details</legend>
                <Grid container spacing={4} >
                    <Grid item md={6} sm={12} xs={12}>

                        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                            <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                <Typography variant='p' sx={{ color: 'black' }}>Name</Typography>
                            </Box>
                            <TextField error={error.name} className='input_field' required id="outlined-required" label="Enter Name" placeholder='Enter Name' fullWidth size='small' onChange={handleNameChange} helperText={error.name ? "Invalid Input" : ''} value={value.name} />
                        </Box>
                        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                            <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                <Typography variant='p' sx={{ color: 'black' }}>District</Typography>
                            </Box>
                            <Box sx={{ width: "100%" }} >
                                <FormControl sx={{ width: '100%', }}>
                                    <InputLabel required id="demo-simple-select-label">District</InputLabel>
                                    <Select

                                        xs={{ width: "5%" }}
                                        size='small'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={value.district}
                                        label="Age"
                                        onChange={handleDistrictChange}
                                    >
                                        <MenuItem value={"Colombo"}>Colombo</MenuItem>
                                        <MenuItem value={"Gampaha"}>Gampaha</MenuItem>
                                        <MenuItem value={"Kalutara"}>Kalutara</MenuItem>
                                        <MenuItem value={"Kandy"}>Kandy</MenuItem>
                                        <MenuItem value={"Matale"}>Matale</MenuItem>
                                        <MenuItem value={"Nuwara Eliya"}>Nuwara Eliya</MenuItem>
                                        <MenuItem value={"Galle"}>Galle</MenuItem>
                                        <MenuItem value={"Matara"}>Matara</MenuItem>
                                        <MenuItem value={"Hambantota"}>Hambantota</MenuItem>
                                        <MenuItem value={"Jaffna"}>Jaffna</MenuItem>
                                        <MenuItem value={"Kilinochchi"}>Kilinochchi</MenuItem>
                                        <MenuItem value={"Mannar"}>Mannar</MenuItem>
                                        <MenuItem value={"Vavuniya"}>Vavuniya</MenuItem>
                                        <MenuItem value={"Mullaitivu"}>Mullaitivu</MenuItem>
                                        <MenuItem value={"Batticaloa"}>Batticaloa</MenuItem>
                                        <MenuItem value={"Ampara"}>Ampara</MenuItem>
                                        <MenuItem value={"Trincomalee"}>Trincomalee</MenuItem>
                                        <MenuItem value={"Kurunegala"}>Kurunegala</MenuItem>
                                        <MenuItem value={"Puttalam"}>Puttalam</MenuItem>
                                        <MenuItem value={"Anuradhapura"}>Anuradhapura</MenuItem>
                                        <MenuItem value={"Polonnaruwa"}>Polonnaruwa</MenuItem>
                                        <MenuItem value={"Badulla"}>Badulla</MenuItem>
                                        <MenuItem value={"Monaragala"}>Monaragala</MenuItem>
                                        <MenuItem value={"Ratnapura"}>Ratnapura</MenuItem>
                                        <MenuItem value={"Kegalle"}>Kegalle</MenuItem>

                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>
                        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                            <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                <Typography variant='p' sx={{ color: 'black' }}>Contact No 1</Typography>
                            </Box>
                            <TextField error={error.contactNo1} required id="outlined-required" label="Enter Contact No" placeholder='Enter Contact No' fullWidth size='small' onChange={handleContactNo1Change} helperText={error.contactNo1 ? "There should be 10 digits" : ''} value={value.contactNo1} inputProps={{ maxLength: 10 }} />
                        </Box>
                        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                            <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                <Typography variant='p' sx={{ color: 'black' }}>Category</Typography>
                            </Box>
                            <Box sx={{ width: "100%" }} >
                                <FormControl sx={{ width: '100%', }}>
                                    <InputLabel id="demo-simple-select-label">select</InputLabel>
                                    <Select
                                        required
                                        xs={{ width: "5%" }}
                                        size='small'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={value.category}
                                        label="Age"
                                        onChange={handleCategoryChange}
                                    >
                                        <MenuItem value={"exclusive"}>Exclusive</MenuItem>
                                        <MenuItem value={"nonExclusive"}>Non-Exclusive</MenuItem>

                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>
                        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '1em', marginBottom: '12px', marginTop: '22px' }}>
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
                                <Typography variant='p' sx={{ color: 'black' }}>Address</Typography>
                            </Box>
                            <TextField required id="outlined-required" label="Enter Address" placeholder='Enter Address' fullWidth size='small' onChange={handleAddressChange} value={value.address} />
                        </Box>
                        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                            <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                <Typography variant='p' sx={{ color: 'black' }}>Description</Typography>
                            </Box>
                            <TextField required multiline id="outlined-required" label="Enter Description" placeholder='Enter Description' fullWidth size='small' onChange={handleDisriptionChange} value={value.description} />
                        </Box>
                        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                            <Box sx={{ minWidth: '100px', maxWidth: '200px' }} className="label_container" >
                                <Typography variant='p' sx={{ color: 'black' }}>Contact No 2</Typography>
                            </Box>
                            <TextField error={error.contactNo2} id="outlined-required" label="Enter Contact No2" placeholder='Enter Contact No2' fullWidth size='small' onChange={handleContactNo2Change} helperText={error.contactNo2 ? "There should be 10 digits" : ''} value={value.contactNo2} />
                        </Box>
                        <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em', marginBottom: '12px' }}>
                            <Box sx={{ minWidth: '100px', maxWidth: '100px' }} className="label_container">
                                <Typography variant='p' sx={{ color: 'black' }}>Status</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: "100%", alignItems: 'center' }}>
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={value.status}
                                    onChange={handlestatusChange}

                                >
                                    <FormControlLabel value="active" control={<Radio />} label="Active" sx={{ display: "inline-block", width: "fit-content" }} />
                                    <FormControlLabel value="inactive" control={<Radio />} label="Inactive" />
                                </RadioGroup>
                            </Box>
                        </Box>


                    </Grid>
                </Grid>


            </fieldset>

        </Box>

    )
}

export default EditHolidayHomeDetails