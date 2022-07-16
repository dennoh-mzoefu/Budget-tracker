import React, { useReducer, createContext } from "react";
import contentReducer from "./contentReducer";
const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);
export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contentReducer, initialState);
  //Action creators
  // delete
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE__TRANSACTION", payload: id });
  };
  // create
  const addTransaction = (transaction) => {
    dispatch({ type: "ADD__TRANSACTION", payload: transaction });
  };

  return (
    <ExpenseTrackerContext.Provider
      value={{ deleteTransaction, addTransaction }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
