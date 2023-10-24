import ExpenseItems from "./ExpenseItems";
import "./ExpensesList.css";

function ExpensesList(props) {
  const filteredExpenses = props.filteredExpenses;

  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  }

  if (filteredExpenses.length > 0) {
    return (
      <ul className="expenses-list">
        {filteredExpenses.map((expense) => (
          <ExpenseItems
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    );
  }
}

export default ExpensesList;
