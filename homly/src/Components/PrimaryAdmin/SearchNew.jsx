import { Box, Button, InputAdornment, TextField, ThemeProvider } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import theme from '../../HomlyTheme'

const SearchNew=(props)=>{
    const [searchbox,setSearchbox]=useState('')
    return<ThemeProvider theme={theme}>
      <Box sx={{width:'100%',paddingLeft:'20px',paddingBottom:'20px',display:'flex',justifyContent:'flex-end',flexDirection:'row',columnGap:'10px'}}>
          <Box><TextField
           InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon/>
                </InputAdornment>
              ),
            }}
      
          type='text' alignItems="center" sx={{backgroundColor:"white",'& fieldset':{borderRadius:'120px'}}} size="small"  onChange={(e)=>setSearchbox(e.target.value)} value={searchbox}></TextField></Box>
          <Box sx={{display:'flex',flexDirection:'row',paddingRight:'75px'}}><Button variant='contained' sx={{marginRight:'5%'} } onClick={()=>{props.setSearch(searchbox)}} >Search</Button>
          <Button variant='outlined' sx={{marginRight:'5%'}}  onClick={()=>{props.setSearch(''); setSearchbox('')}}>Reset</Button></Box>
      
      </Box>
    </ThemeProvider>

}
export default SearchNew;