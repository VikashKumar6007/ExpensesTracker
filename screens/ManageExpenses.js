import { useLayoutEffect } from "react";
import { View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
function ManageExpenses({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);
  function deletExpenseHandler() {}
  return (
    <View>
      {isEditing && (
        <IconButton
          icon="trash"
          color={GlobalStyles.colors.error500}
          size={36}
          onPress={deletExpenseHandler}
        />
      )}
    </View>
  );
}
export default ManageExpenses;
