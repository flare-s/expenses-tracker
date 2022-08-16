import React, { useContext } from "react";
import "./App.css";
import Header from "./components/Hedaer/Header";
import Form from "./components/ExpensesForm/ExpensesForm";
import Container from "./components/UI/Container";
import ExpensesList from "./components/ExpensesList/ExpensesList";
import FilterByYear from "./components/FilterByYear/FilterByYear";
import TotalExpenses from "./components/ExpensesChart/Total/TotalExpenses";
import ExpensesContext from "./context/expenses-context";
function App() {
  const { expenses, year } = useContext(ExpensesContext);
  const filteredExp = expenses.filter(
    (exp) => new Date(exp.date).getFullYear() === +year
  );

  return (
    <React.Fragment>
      <Header />
      <main>
        <Container>
          <Form />
          <FilterByYear />
        </Container>
        {filteredExp.length > 0 && (
          <>
            <TotalExpenses expenses={filteredExp} />
            <ExpensesList expenses={filteredExp} />
          </>
        )}
      </main>
    </React.Fragment>
  );
}

export default App;
