import React from "react";
import { useContext } from "react";
import Editable from "./Readable";
import Readable from "./Editable";
import { Box } from "@mui/system";

import { EditPersonalDetailsContext } from "../../Contexts/EditPersonalDetailsContext";

const PersonalDetailsGrid = (props) => {
  const { currentEditId } = useContext(EditPersonalDetailsContext);

  return (
    <Box>
      {props.id === currentEditId ? (
        <Editable
          id={props.id}
          lable={props.lable}
          value={props.value}
          editable={props.editable}
        />
      ) : (
        <Readable
          id={props.id}
          lable={props.lable}
          value={props.value}
          editable={props.editable}
        />
      )}
    </Box>
  );
};

export default PersonalDetailsGrid;
