import { IconButton, Snackbar } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
const Copy = (props) => {
  const handleClick = () => {
    navigator.clipboard.writeText(props.text);
  };
  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ color: "#dddddd", borderRadius: "3px" }}
      >
        <ContentCopyIcon />
      </IconButton>
    </>
  );
};

export default Copy;
