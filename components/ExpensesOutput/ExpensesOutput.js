import { View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

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
    date: new Date("2020 - 12-19"),
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
    date: new Date("2024 - 12-19"),
  },
  {
    id: "e10",
    description: "A pair of Wireless Devices",
    amount: 59.99,
    date: new Date("2020 - 12-19"),
  },
  {
    id: "e11",
    description: "A pair of NeckBands",
    amount: 99.99,
    date: new Date("2020 - 12-19"),
  },
  {
    id: "e12",
    description: "A pair Item Of Bucket List",
    amount: 99.99,
    date: new Date("2024 - 12-19"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={style.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:24,
    paddingTop:24,
    paddingBottom:0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
