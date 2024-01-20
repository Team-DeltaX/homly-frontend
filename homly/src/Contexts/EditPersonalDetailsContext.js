import React from "react";
import { useState, createContext } from "react";

export const EditPersonalDetailsContext = createContext();

const EditPersonalDetailsContextProvider = ({ children }) => {
  const [currentEditId, setCurrentEditId] = useState(null);
  const [userPersonalDetails, setUserPersonalDetails] = useState({});

  const handleEditId = (id) => {
    setCurrentEditId(id);
    console.log(id);
  };

const handlePersonalDetails = (data) => {
    setUserPersonalDetails({ ...userPersonalDetails, [data[0]]: data[1] });
    console.log(userPersonalDetails);

    // console.log("keu",Object.keys(object),'val',Object.values(object));
};

  return (
    <EditPersonalDetailsContext.Provider
      value={{ currentEditId, handleEditId, handlePersonalDetails }}
    >
      {children}
    </EditPersonalDetailsContext.Provider>
  );
};

export default EditPersonalDetailsContextProvider;
