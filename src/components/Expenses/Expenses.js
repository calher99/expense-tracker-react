import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState('2020');

    const expensesFilterChangeHandler = (yearFilter) => {
        setSelectedYear(yearFilter)
    }
    const itemsFiltered = props.items.filter(item => item.date.getFullYear() === parseInt(selectedYear));

    // create a variable to store a logic outcome and print it in the component
    let expensesContent = <p>No expenses found.</p>
    if(itemsFiltered.length > 0 ){
        expensesContent = itemsFiltered.map(expense =>{
            return (
            <ExpenseItem 
                key={expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date}
            />)
        })
    }
    return (
        <Card className='expenses'>
            <ExpensesFilter 
            selected={selectedYear} 
            onExpensesFilterChange={expensesFilterChangeHandler} />
            {expensesContent}
        </Card>
    );
}

export default Expenses