import { Avatar, Box, Typography } from "@mui/material";

const DashViewAdminBox = (props) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', columnGap: '20px' ,margin:'3px'}}>
            <Box><Avatar sx={{ bgcolor: props.color, width: '50px', height: '50px' }} src="/broken-image.jpg" /></Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', background: 'white', padding: '10px', borderRadius: '10px', columnGap: '20px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box><Typography>User Name</Typography></Box>
                    <Box><Typography>Work Location</Typography></Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box><Typography sx={{ color: '#8e918f' }}>John Doe</Typography></Box>
                    <Box><Typography sx={{ color: '#8e918f' }}>Colombo</Typography></Box>
                </Box>
            </Box>


        </Box>
    )
}
export default DashViewAdminBox;