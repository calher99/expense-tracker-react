
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const saveNewExpenseHandler = expenseData =>{
    console.log(expenseData)
  }
  
  return (
    <div>
      <NewExpense onSaveNewExpense = {saveNewExpenseHandler}/>
      <Expenses/>
      
    </div>
  );
}

export default App;
