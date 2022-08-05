import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/ExpensesForm";
import Container from "./components/UI/Container";
function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prevExp) => [
      ...prevExp,
      {
        ...expense,
        id: expenses.length < 1 ? 1 : expenses[expenses.length - 1].id + 1,
      },
    ]);
  };
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Form addExpense={addExpense} />
      </Container>
    </React.Fragment>
  );
}

export default App;
