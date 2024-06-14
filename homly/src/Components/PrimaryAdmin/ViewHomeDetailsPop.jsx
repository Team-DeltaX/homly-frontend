import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { DialogContent } from '@mui/material';


const ViewHomeDetailsPop=(props)=>{
    const { onClose, selectedValue, open ,selectedtoview} = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

    return(
        <div>
            <Dialog onClose={handleClose} open={open}  maxWidth="lg" 
            
        fullWidth>
      <DialogTitle>Set backup account</DialogTitle>
      <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            
          }}
        >
          <CloseIcon />
        </IconButton>
      <DialogContent>
        {selectedtoview.Name}
       
      </DialogContent>
     
      
    </Dialog>



        </div>
    )
}
export default ViewHomeDetailsPop;