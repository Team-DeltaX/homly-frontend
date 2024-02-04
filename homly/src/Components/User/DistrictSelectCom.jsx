import React from 'react'
import { ThemeProvider } from '@mui/material'

import Select from 'react-select'

import theme from '../../HomlyTheme'


const districts = [
    "Colombo",
    "Gampaha",
    "Kalutara",
    "Kandy",
    "Matale",
    "Nuwara Eliya",
    "Galle",
    "Matara",
    "Hambantota",
    "Jaffna",
    "Mannar",
    "Vavuniya",
    "Mullaitivu",
    "Kilinochchi",
    "Batticaloa",
    "Ampara",
    "Trincomalee",
    "Kurunegala",
    "Puttalam",
    "Anuradhapura",
    "Polonnaruwa",
    "Badulla",
    "Monaragala",
    "Ratnapura",
    "Kegalle",
];


export default function DistrictSelectCom(props) {
    return (
        <ThemeProvider theme={theme}>
            <Select
                className="basic-single"
                classNamePrefix="select"
                isSearchable={true}
                name="color"
                options={districts.map((district) => {
                    return { value: district, label: district }
                })
                }
            />
        </ThemeProvider>
    )
}
