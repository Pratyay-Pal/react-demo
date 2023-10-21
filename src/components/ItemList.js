import Items from "./Items";
import './ItemList.css'

function ItemList(props) {
  return (
    <ul className="item-list">
        {props.items.map(item => (
            <Items
            key={item.id}
            id={item.id}
            value={item.value}
            onDeleteItem={props.deleteItem}
          />
        ))}
      
    </ul>
  );
}

export default ItemList;
