import { View, Pressable, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import{getFormatedDate}from '../../util/date'
function ExpensesItem({ description, amount, date }) {
  return (
    <Pressable>
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
    minWidth:80
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
