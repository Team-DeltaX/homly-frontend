import React from 'react'
import { ThemeProvider,Paper,Button } from '@mui/material'

import HolidayHomeCard from '../HHCard/HolidayHomeCard'

import theme from '../../../HomlyTheme';
import Carousel from 'react-material-ui-carousel'

export default function HHCarousel() {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        },
    ]



    return (
        <ThemeProvider theme={theme}>
            {/* <HolidayHomeCard /> */}
            <Carousel
                itemsPerScroll={2}
                autoPlay={false}
                navButtonsAlwaysVisible={true}
                animation="slide"
                timeout={500}
                cycleNavigation={true}
                navButtonsProps={{
                    style: {
                        backgroundColor: '#ffffff',
                        color: '#494949',
                        borderRadius: 0,
                        margin: 0,
                        width: 50,
                        height: 50,
                        marginTop: -20
                    }
                }}
            >
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>

        </ThemeProvider>
    )
}

function Item(props)
{
    return (
        <Paper sx={{width:'100px'}}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}
