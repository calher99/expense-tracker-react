import './Expenses.css';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState('2020');

    const expensesFilterChangeHandler = (yearFilter) => {
        setSelectedYear(yearFilter)
    }
    const itemsFiltered = props.items.filter(item => item.date.getFullYear() === parseInt(selectedYear));

    // create a variable to store a logic outcome and print it in the component
    
    return (
        <Card className='expenses'>
            <ExpensesFilter 
            selected={selectedYear} 
            onExpensesFilterChange={expensesFilterChangeHandler} />
            <ExpensesList itemsFiltered={itemsFiltered}/>
        </Card>
    );
}

export default Expenses