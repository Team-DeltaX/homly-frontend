import { createContext, useState } from 'react';

const CustomTabContext = createContext(null);

export const CustomTabProvider = ({ children }) => {
    const [load,SetLoad]=useState(true)
    
  return (
    <CustomTabContext.Provider value={{ load,SetLoad}}>
      {children}
    </CustomTabContext.Provider>
  );
};
export { CustomTabContext };