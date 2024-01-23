import React from 'react'

import { ThemeProvider } from '@emotion/react'
import theme from '../../HomlyTheme'
const PersonalDetailsCom = () => {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <h1>PersonalDetailsCom</h1>
            </div>

        </ThemeProvider>
        
    )
}

export default PersonalDetailsCom;