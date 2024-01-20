import React from "react";
import { useState, createContext } from "react";

export const EditPersonalDetailsContext = createContext();

const EditPersonalDetailsContextProvider = ({ children }) => {
  const [currentEditId, setCurrentEditId] = useState(null);
//   const [userPersonalDetails, setUserPersonalDetails] = useState({});

  const handleEditId = (id) => {
    setCurrentEditId(id);
    console.log(id);
  };

  
  return (
    <EditPersonalDetailsContext.Provider
      value={{ currentEditId,  handleEditId }}
    >
      {children}
    </EditPersonalDetailsContext.Provider>
  );
};

export default EditPersonalDetailsContextProvider;
