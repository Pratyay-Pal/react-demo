import { useState } from 'react';
import './ExpenseTracker.css'
import Expenses from "./Expenses";
import NewExpenses from './components/NewExpenses/NewExpenses';

const DUMMY_EXPENSES = [
  {
    id:'e1',
    title: "Expense Item 1",
    amount: "100",
    date: new Date(2023, 2, 1),
  },
  {
    id:'e2',
    title: "Expense Item 2",
    amount: "200",
    date: new Date(2022, 2, 2),
  },
  {
    id:'e3',
    title: "Expense Item 3",
    amount: "300",
    date: new Date(2023, 2, 3),
  },
  {
    id:'e4',
    title: "Expense Item 4",
    amount: "400",
    date: new Date(2023, 2, 4),
  }
];  

function ExpenseTracker() {
  
  const[expenses, setExpenses] = useState(DUMMY_EXPENSES)

  function addExpenseHandler(expense){
    console.log(expense)
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  return (    
    <div>
    <NewExpenses onAddExpense={addExpenseHandler}/>
      <Expenses
        items = {expenses}
      ></Expenses>
      </div>
  );
}

export default ExpenseTracker;
