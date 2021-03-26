import React,{createContext, useEffect, useReducer} from 'react';
import {reducer} from './GlobalReducer';

const initialState = {Auth: false,open: false, dark:false,user:{

  
},cart:''};




export const GlobalContext = createContext({});

const Store = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state.user,"User");


  return (
    <GlobalContext.Provider value={{State: state, StateDispatch: dispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Store;
