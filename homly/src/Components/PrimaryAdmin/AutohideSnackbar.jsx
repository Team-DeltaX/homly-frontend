import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';

export default function AutohideSnackbar({handleClick,handleClose,open,setopen,snacktext}) {


  return (
    <div>
     
      <Snackbar
      
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={snacktext}
      />
    </div>
  );
}