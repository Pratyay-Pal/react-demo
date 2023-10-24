import './NewExpenses.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpenses(props){

    const[newExpenseBlock, setNewExpenseBlock] = useState(<div><button onClick={updateNewExpenseBlock}>Add New Expense</button></div>)

    function saveExpenseDataHandler(enteredExpenseData){
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData)
        setNewExpenseBlock(<div><button onClick={updateNewExpenseBlock}>Add New Expense</button></div>)
    }

    function updateNewExpenseBlock(){
        setNewExpenseBlock(<ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>)
    }

    return(
        <div className='new-expense'>
            {newExpenseBlock}            
        </div>
    );
}

export default NewExpenses