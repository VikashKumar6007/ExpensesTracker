import { View, Pressable, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { getFormatedDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

function ExpensesItem({ id, description, amount, date }) {
  const navigation = useNavigation();
  function expensesPressHandler() {
    navigation.navigate("ManageExpenses", {
      expenseId: id,
    });
  }
  return (
    <Pressable
      onPress={expensesPressHandler}
      style={({ pressed }) => pressed && style.pressed}
    >
      <View style={style.expensesItem}>
        <View>
          <Text style={[style.textBase, style.description]}>
            {description}{" "}
          </Text>
          <Text sty={style.textBase}>{getFormatedDate(date)}</Text>
        </View>
        <View style={style.amountContainer}>
          <Text style={style.amount}> {amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}
export default ExpensesItem;

const style = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expensesItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 4,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 80,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
