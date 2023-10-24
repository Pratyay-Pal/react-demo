import "./Expenses.css";
import Card from "./components/UI/Card";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./components/Expenses/ExpensesList";
import ExpensesChart from "./components/Expenses/ExpenseChart";

function Expenses(props) {

  const[filteredYear, setFilteredYear] = useState('2020')

  function changeYearHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear
  })  

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeYear={changeYearHandler} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList filteredExpenses={filteredExpenses}/>           
    </Card>
  );
}

export default Expenses;
