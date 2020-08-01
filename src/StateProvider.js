import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext(null);

export const StateProvider = ({ reducer, initState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initState)}>
    {children}
  </StateContext.Provider>
);

// this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);