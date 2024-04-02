import { Drawer, Box, Typography } from "@mui/material";
import SerachResultCard from "./SerachResultCard";

export default function SearchResaltDrawer({ open, setOpen, searchedHH }) {
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    console.log(open);

    return (
        <div>
            <Drawer open={open} onClose={toggleDrawer(false)} sx={{ zIndex: 1500 }}>
                <Typography color="initial">Your Search result</Typography>
                <Box
                    sx={{ width: { xs: 275, sm: 400 } }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                >
                    {searchedHH && searchedHH.length > 0  ? (
                        searchedHH.map((hh) => {
                            return <SerachResultCard searchedHH={hh} />;
                        })
                    ) : (
                        <Typography color="initial">No result</Typography>
                    )}
                </Box>
            </Drawer>
        </div>
    );
}

  

