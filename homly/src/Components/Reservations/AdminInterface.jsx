// import './style.css';
import React,{ useState} from 'react'
import Box from '@mui/material/Box';
import PageTitle from '../locationAdmin/PageTitle';
import BasicTabs from '../locationAdmin/Reservations/LocationAdminBasicTab';
import SearchNew from '../PrimaryAdmin/SearchNew'

const AdminInterface = (props) => {
    const [showNav,setShowNav] = useState(props.showNav);
    const [search, setSearch] = useState(props.search);

    return (
        <Box sx={{height:"100%"}}>
            <PageTitle setShowNav={setShowNav} title={'Reservations'} bell={true}/>
            <SearchNew setSearch={setSearch} search={search} />
            <BasicTabs setSearch={setSearch} search={search} />
        </Box>
  
    );
}

export default AdminInterface;