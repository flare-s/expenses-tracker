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
  const { filteredExp } = useContext(ExpensesContext);

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
            <TotalExpenses />
            <ExpensesList />
          </>
        )}
      </main>
    </React.Fragment>
  );
}

export default App;
