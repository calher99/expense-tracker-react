import './Card.css'
// Reusable wrapper
const Card = (props) => {
    const classApplied = 'card ' + props.className;
    return <div className={classApplied}>{props.children}</div>
}

export default Card;