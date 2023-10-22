import { useState } from 'react';
import './App.css';
import ItemList from './components/ItemList/ItemList';
import NewItem from './components/NewItem/NewItem';

const initial_items=[
  {
    id:'1',
    value:'Item 1'
  },
  {
    id:'2',
    value:'Item 2'
  }
]

function App() {
  const[items, setItems] = useState(initial_items);

  const deleteItemHandler = id => {
    console.log(id)
    setItems(prevItems => {
      const updatedItems = prevItems.filter(item => item.id !== id);
      return updatedItems;
    });
  };

  const addItemHandler = value => {
    console.log(value)
    setItems(prevItems => {
      const newitem = {id:Math.random().toString(), value:value}
      console.log(newitem)
      const updatedItems = [newitem,...prevItems];
      return updatedItems;
    });
  };

  return (
    <div>
      <div>
        <NewItem addItem={addItemHandler}/>
      </div>
      <div>
        <ItemList items={items} deleteItem={deleteItemHandler}/>        
      </div>
    </div>
  );
}

export default App;
