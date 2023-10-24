import { useState } from 'react';
import React from 'react';
import './AddingListingItems.css';
import ItemList from '../../components/ItemList/ItemList';
import NewItem from '../../components/NewItem/NewItem';

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

function AddingListingItems() {
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
    <React.Fragment>
      <div>
        <NewItem addItem={addItemHandler}/>
      </div>
      <div>
        <ItemList items={items} deleteItem={deleteItemHandler}/>        
      </div>
    </React.Fragment>
  );
}

export default AddingListingItems;
