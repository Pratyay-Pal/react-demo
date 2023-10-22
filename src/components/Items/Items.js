import './Items.css'

function Items(props) {
    const deleteItem = () => {
        props.onDeleteItem(props.id)
    }
  return (
    <li className="items" onClick={deleteItem}>
      {props.value}
    </li>
  );
}

export default Items;
