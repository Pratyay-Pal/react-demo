import './Card.css'

function Card(props){
    
    const newClass = 'card '+props.className;

    return <div className={newClass}>{props.children}</div>
}

export default Card