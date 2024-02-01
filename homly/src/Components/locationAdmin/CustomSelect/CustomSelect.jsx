import React from 'react'
import { ThemeProvider } from '@mui/material'

import Select from 'react-select'

import theme from '../../HomlyTheme'


const data = [
    "holidayhome1",
    "holidayhome2",
    "holidayhome3",
    "holidayhome4",
    "holidayhome5",
    "holidayhome6",
];


export default function DistrictSelectCom(props) {
    return (
        <ThemeProvider theme={theme}>
            <Select
                className="basic-single"
                classNamePrefix="select"
                isSearchable={true}
                name="color"
                options={data.map((item) => {
                    return { value: item, label: item }
                })
                }
            />
        </ThemeProvider>
    )
}
