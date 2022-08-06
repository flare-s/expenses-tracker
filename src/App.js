import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/ExpensesForm";
import Container from "./components/UI/Container";
import ExpensesList from "./components/ExpensesList/ExpensesList";
import FilterByYear from "./components/FilterByYear/FilterByYear";
function App() {
  const expensesState = [
    { name: "College tuition", value: 2500, date: "2022/05/18" },
    { name: "Home renovation", value: 8500, date: "2020/11/22" },
    { name: "New laptop", value: 4000, date: "2021/09/05" },
    { name: "Family vacation", value: 6300, date: "2019/07/01" },
  ];

  const [expenses, setExpenses] = useState(expensesState);
  const [year, setYear] = useState(2022);

  const filteredExp = expenses.filter(
    (exp) => new Date(exp.date).getFullYear() === +year
  );

  const addExpense = (expense) => {
    setExpenses((prevExp) => [
      ...prevExp,
      {
        ...expense,
        id: expenses.length < 1 ? 1 : expenses[expenses.length - 1].id + 1,
      },
    ]);
  };

  const changeYear = (year) => {
    setYear(year);
  };

  return (
    <React.Fragment>
      <Header />
      <Container>
        <Form addExpense={addExpense} />
        <FilterByYear year={year} changeYear={changeYear} />
      </Container>
      {filteredExp.length > 0 && (
        <ExpensesList expenses={filteredExp} year={year} />
      )}
    </React.Fragment>
  );
}

export default App;
