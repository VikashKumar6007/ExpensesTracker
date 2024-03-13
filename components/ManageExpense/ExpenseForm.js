import { View } from "react-native";
import Input from "./Input";

function ExpenseForm() {

function amountChangehandler(){}

  return (
    <View>
      <Input lable="Amount" textInputConfig={{
        KeyboardType:'decimal-pad',
        onChangeText:amountChangehandler,
      }}  />
      <Input lable="Date" textInputConfig={{
        placeholder:'YYYY-MM-DD',
        maxLength:10,
        onChangeText:()=>{}
      }}/>
      <Input lable="Description" textInputConfig={{
        multiline:true,
        //autocorrect:false, //default is true 
         
      }}/>
    </View>
  );
}
export default ExpenseForm;
