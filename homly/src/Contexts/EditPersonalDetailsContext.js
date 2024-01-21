import React from "react";
import { useState, createContext, useEffect } from "react";
import axios from "axios";

const userServiceNo = "214002";
export const EditPersonalDetailsContext = createContext();

const EditPersonalDetailsContextProvider = ({ children }) => {
  const [currentEditId, setCurrentEditId] = useState(null);
  const [APIData, setAPIData] = useState([]);
  const [userPersonalDetails, setUserPersonalDetails] = useState();
  const [ isEnable,setIsEnable] = useState(false);

  useEffect(() => {
    axios
      .get(`https://65ac00f8fcd1c9dcffc76f52.mockapi.io/homly/api/employee`)
      .then((response) => {
        setAPIData(response.data);
      });
      
      
  }, []);
  const userd = APIData.filter((obj) => {
    return obj.serviceNumber === userServiceNo;
  });

  useEffect(() => {
    setUserPersonalDetails(userd[0]);
  },[userd[0]]);

  const handleUpdate = () => {
    console.log("updated");
    setIsEnable(false);
  }

  const handleCancel = () => {
    console.log("cancelled");
    setUserPersonalDetails(userd[0]);
    setIsEnable(false);
  }

  const handleEditId = (id) => {
    setCurrentEditId(id);
    // console.log(id);
  };

  const handlePersonalDetails = (data) => {
    // console.log('user',userd[0] );
    // setUserPersonalDetails(userd[0]);
    setIsEnable(true)
    setUserPersonalDetails({ ...userPersonalDetails, [data[0]]: data[1] });
    // console.log(userPersonalDetails);
    checkEquality();

    // console.log("keu",Object.keys(object),'val',Object.values(object));
  };

  const checkEquality = () => {
    console.log('equal',JSON.stringify(userPersonalDetails)===JSON.stringify(userd[0]))
  }

  return (
    <EditPersonalDetailsContext.Provider
      value={{
        APIData,
        userd,
        currentEditId,
        userPersonalDetails,
        isEnable,
        handleEditId,
        handlePersonalDetails,
        handleUpdate,
        handleCancel,
      }}
    >
      {children}
    </EditPersonalDetailsContext.Provider>
  );
};

export default EditPersonalDetailsContextProvider;
