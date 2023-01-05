import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onSaveNewExpense(expenseData);
        stopEditHandler()
    }
    
    const [isEditing, setIsEditing] = useState(false);

    const editHandler = () => {
        setIsEditing(true);
    }
    const stopEditHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className='new-expense'>
            
            {!isEditing && <button onClick={editHandler}>Add new expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData ={saveExpenseDataHandler} onCloseTab = {stopEditHandler}/>}
           
        </div>
    );

} 

export default NewExpense;