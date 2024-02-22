import { useState } from "react";
import { IconButton, Snackbar } from "@mui/material";

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
const Copy = (props) => {
//   const [open, setOpen] = useState(false);

  const handleClick = () => {
    // setOpen(true);
    navigator.clipboard.writeText(props.text);
  };

  return (
    <>
      <IconButton onClick={handleClick} size="small" sx={{color:'#dddddd'}}>
        <ContentCopyIcon/>
      </IconButton>
      {/* <Snackbar
        message="Copied to clibboard"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        open={open}
      /> */}
    </>
  );
};

export default Copy;
