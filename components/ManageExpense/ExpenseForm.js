import { View, StyleSheet, Text} from "react-native";
import Input from "./Input";
import { GlobalStyles } from "../../constants/styles";
import { useState } from "react";
import Button from "../UI/Button";
function ExpenseForm({ submitLableButton, onCancle, onSubmit }) {
  const [inputValue, setInputValue] = useState({
    amount: "",
    date: "",
    description: "",
  });
  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputValue((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }
  function submitHandler() {}
  return (
    <View>
      <Text style={styles.title}>Your Expenses</Text>
      <Input
        style={styles.rowInput}
        lable="Amount"
        textInputConfig={{
          KeyboardType: "decimal-pad",
          onChangeText: inputChangeHandler.bind(this, "amount"),
          value: inputValue.amount,
        }}
      />

      <Input
        style={styles.rowInput}
        lable="Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: inputChangeHandler.bind(this, "date"),
          value: inputValue.date,
        }}
      />
      <Input
        lable="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputValue.description,
          //autocorrect:false, //default is true
        }}
      />
      <View style={styles.button}>
        <Button style={styles.buttons} mode="flat" onPress={onCancle}>
          Cancel
        </Button>
        <Button style={styles.buttons} onPress={submitHandler}>
          {submitLableButton}
        </Button>
      </View>
    </View>
  );
}
export default ExpenseForm;

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
    marginVertical: 14,
  },
  rowInput: {
    flex: 1,
  },
});
