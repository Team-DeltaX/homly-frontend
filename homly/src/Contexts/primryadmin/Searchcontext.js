import { createContext, useState } from 'react';

const SearchContext = createContext(null);

export const SearchProvider = ({ children }) => {
    const [Search,SetSearch]=useState("")
    
  return (
    <SearchContext.Provider value={{ Search,SetSearch}}>
      {children}
    </SearchContext.Provider>
  );
};
export { SearchContext };