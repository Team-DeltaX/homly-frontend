import React from "react";
import { useContext } from "react";
import Editable from "./Editable";
import Readable from "./Readable";

import { EditPersonalDetailsContext } from "../../Contexts/EditPersonalDetailsContext";

const PersonalDetailsGrid = (props) => {
  const { currentEditId } = useContext(EditPersonalDetailsContext);

  return (
    <div>
      {props.id === currentEditId ? (
        <Readable
          id={props.id}
          lable={props.lable}
          value={props.value}
          editable={props.editable}
        />
      ) : (
        <Editable
          id={props.id}
          lable={props.lable}
          value={props.value}
          editable={props.editable}
        />
      )}
    </div>
  );
};

export default PersonalDetailsGrid;
