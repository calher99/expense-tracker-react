import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onSaveNewExpense(expenseData);
    }
    return (
        <div className='new-expense'>
            {/* we call this prop onBLaBlaBla bc we will pass a function as parameter
            we will use it to perfrom child to parnt communication (bottom-up) */}
            <ExpenseForm onSaveExpenseData ={saveExpenseDataHandler} />
            {/* we just passed a pointer at a function  */}
                
            
        </div>
    );

} 

export default NewExpense;