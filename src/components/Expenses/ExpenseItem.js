import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';
// import React , { useState } from 'react';

const ExpenseItem = (props) => {
  // useState(props.title) only works for the first time
  // Following calls of the function will fetch the value that was passed to setTitle
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () =>{
  //   // Here we make React reevaluat the ExpenseItm function but title= Updated!
  //   setTitle('Updated!');
  // };

  return (
    // Pass className as props to get the class
    // Component class wraps each item and provides some common styles
    <Card className="expense-item"> 
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        {/* <h2>{title}</h2> */}
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change title</button>  */}
    </Card>

  );
}

export default ExpenseItem;
