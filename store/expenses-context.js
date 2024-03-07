import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  adexpenses: { description, amount, date },
  deleteExpenses: id,
  updateExpenses: (id, { description, amount, date }),
});
function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD" :
        const id = new Date().toString()+Math.toString();
        return [{...action.payload , id:id , ...state}]
    case "DELETE":
    case "UPDATE":
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer);

  function addExpenses(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }
  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>;
}
export default ExpensesContextProvider();
