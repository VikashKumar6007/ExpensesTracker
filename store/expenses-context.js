import { createContext, useReducer } from "react";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2020 - 12-19"),
  },
  {
    id: "e2",
    description: "A pair of coloth",
    amount: 99.99,
    date: new Date("2020 - 12-19"),
  },
  {
    id: "e3",
    description: "A pair",
    amount: 99.99,
    date: new Date("2024 - 12-19"),
  },
  {
    id: "e4",
    description: "Shirts",
    amount: 59.99,
    date: new Date("2020 - 12-19"),
  },
  {
    id: "e5",
    description: "Bluetoth",
    amount: 99.99,
    date: new Date("2020 - 12-19"),
  },
  {
    id: "e6",
    description: "A Book",
    amount: 99.99,
    date: new Date("2024 - 12-19"),
  },
  {
    id: "e7",
    description: "A pair of Cups",
    amount: 59.99,
    date: new Date("2020 - 12-1"),
  },
  {
    id: "e8",
    description: "A pair of Spects",
    amount: 99.99,
    date: new Date("2020 - 12-19"),
  },
  {
    id: "e9",
    description: "A pair Charger",
    amount: 99.99,
    date: new Date("2024 -07-19"),
  },
  {
    id: "e10",
    description: "A pair of Wireless Devices",
    amount: 59.99,
    date: new Date("2020 -04-19"),
  },
  {
    id: "e11",
    description: "A pair of NeckBands",
    amount: 99.99,
    date: new Date("2024 - 02-19"),
  },
  {
    id: "e12",
    description: "A pair Item Of Bucket List",
    amount: 99.99,
    date: new Date("2024 -02-21"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addexpenses: ({description, amount, date }) =>{},
  deleteExpenses: (id)=>{},
  updateExpenses: (id, {description, amount, date }) =>{},
});
function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIteam = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIteam];
      const updatedItem = { ...updatableExpense , ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIteam] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpenses(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }
  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value ={
    expenses: expensesState,
    addExpenses:addExpenses,
    deleteExpense:deleteExpense,
    updateExpense:updateExpense,
  }

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}
export default ExpensesContextProvider;
