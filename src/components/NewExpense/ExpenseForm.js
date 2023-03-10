import { useState } from 'react'
import './ExpenseForm.css'


const ExpenseForm = (props) => {
    // We save enteredTitle so that no matter if we rerun the module the vakue is stored
    // useState('') because we don´t wanna save anyting at the beggining.
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    }
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    }
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        onChange={titleChangeHandler}
                        //We enter the value so that we can set it to 0 when submit (two way binding)
                        value={enteredTitle} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        onChange={amountChangeHandler}
                        value={enteredAmount} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        onChange={dateChangeHandler}
                        value={enteredDate} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCloseTab}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );

}

export default ExpenseForm;