import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from './UI/Card';

function ExpenseItem(props) {


  return (
    // Pass className as props to get the class
    // Component class wraps each item and provides some common styles
    <Card className="expense-item"> 
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>

  );
}

export default ExpenseItem;