import React from 'react'
import { ThemeProvider } from '@mui/material'

import Select from 'react-select'

import theme from '../../../HomlyTheme'





export default function DistrictSelectCom({ title, data}) {
    // const handleChange = (selectedOption) => {
    //     onChange(selectedOption.value); // Pass the selected value to the parent component
    // };
    return (
        <ThemeProvider theme={theme}>
            <Select
                sx={{ backgroundColor: "white", opacity: "1", zIndex: "1000" }}
                className="basic-single"
                classNamePrefix={title}
                isSearchable={true}
                name="color"
                options={data.map((item) => {
                    return { value: item, label: item }
                })}
                // onChange={handleChange}
            />
        </ThemeProvider>
    )
}
