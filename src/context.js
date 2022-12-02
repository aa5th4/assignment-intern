import React, { useContext, useState } from "react";
import useFetch from "./useFetch";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("hacker");
  const { isLoading, isError, movie , page, pageCount,getNextPage ,getPrevPage} = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ query, movie, setQuery, isLoading, isError ,page, pageCount,getNextPage ,getPrevPage}}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };