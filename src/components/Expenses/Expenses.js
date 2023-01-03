import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2023');

    const expensesFilterChangeHandler = (yearFilter) => {
        console.log(yearFilter)
        setSelectedYear(yearFilter)
        console.log(selectedYear)
    }
    

    return (
        <Card className='expenses'>
            <ExpensesFilter 
            selected={selectedYear} 
            onExpensesFilterChange={expensesFilterChangeHandler} />

            {props.items.map(expense =>{
                return (
                <ExpenseItem 
                    key={expense.id}
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date}
                />)
            })}
        </Card>
    );
}

export default Expenses