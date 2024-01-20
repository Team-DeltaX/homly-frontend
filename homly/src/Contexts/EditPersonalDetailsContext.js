import React from 'react'
import { useState, createContext } from 'react'

export const EditPersonalDetailsContext = createContext()

const EditPersonalDetailsContextProvider = ({children}) => {

    const [currentEditId, setCurrentEditId] = useState('email');

    return (
        <EditPersonalDetailsContext.Provider value={{currentEditId}}>
            {children}
        </EditPersonalDetailsContext.Provider>
    )


}

export default EditPersonalDetailsContextProvider;

