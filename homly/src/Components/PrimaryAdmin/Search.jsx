import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
const Search = () => {
  return (
    <Grid
      container
      sx={{ width: "90%", marginTop: "2%", height: "50px", marginLeft: "5%" }}
    >
      <Grid item md={6} sm={12} xs={12}>
        <Box
          sx={{
            background: "#E9E9E9",
            width: "40%",
            alignItems: "center",
            height: "70%",
            alignItems: "center",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ marginLeft: { xs: 0, md: "3%" } }}>
            Filter
          </Typography>
          <Select
            sx={{
              borderRadius: "20px",
              background: "white",
              height: "80%",
              width: { xs: "50%", sm: "60%", md: "100%" },
              marginLeft: "2%",
              marginRight: "2%",
              fontFamily: "roboto",
              outline: "none",
            }}
            defaultValue={"Name"}
          >
            <MenuItem value={"Name"}>Name</MenuItem>
            <MenuItem value={"ServiceNumber"}>Service Number</MenuItem>
          </Select>
        </Box>
      </Grid>
      <Grid item md={2} sm={12}>
        <TextField
          id="outlined-basic"
          size="small"
          sx={{
            height: "30px",
            borderRadius: "20px",
            "& fieldset": {
              width: "150px",
              borderRadius: 20,
              borderWidth: "5px",
              fontFamily: "roboto",
            },
          }}
          placeholder="Search here..."
          variant="outlined"
        />
      </Grid>
      <Grid item md={4} sm={12} xs={12}>
        <Box
          display={"flex"}
          sx={{
            paddingTop: { xs: "20px", md: "0" },
            paddingLeft: { md: "10px", xs: "0" },
          }}
        >
          <Button
            sx={{
              fontFamily: "Roboto",
              width: "130px",
              borderRadius: "15px",
              marginLeft: "20px",
            }}
            variant="contained"
          >
            Search
          </Button>
          <Button
            sx={{
              fontFamily: "Roboto",
              width: "130px",
              borderRadius: "15px",
              marginLeft: "15px",
            }}
            variant="outlined"
          >
            Reset
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Search;
