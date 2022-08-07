import React, { useState } from "react";
import "./App.css";
import Header from "./components/Hedaer/Header";
import Form from "./components/ExpensesForm/ExpensesForm";
import Container from "./components/UI/Container";
import ExpensesList from "./components/ExpensesList/ExpensesList";
import FilterByYear from "./components/FilterByYear/FilterByYear";
import TotalExpenses from "./components/ExpensesChart/Total/TotalExpenses";
function App() {
  const expensesState = [
    { name: "College tuition", value: 2500, date: "2022/05/18", id: 1 },
    { name: "TV repair", value: 500, date: "2022/06/08", id: 2 },
    { name: "New closet", value: 600, date: "2022/02/01", id: 3 },
    { name: "Car repair", value: 2500, date: "2020/07/12", id: 4 },
    { name: "Home renovation", value: 8500, date: "2020/11/22", id: 5 },
    { name: "New laptop", value: 4000, date: "2021/09/05", id: 6 },
    { name: "Family vacation", value: 6300, date: "2019/07/01", id: 7 },
  ];

  const [expenses, setExpenses] = useState(expensesState);
  const [year, setYear] = useState(2022);

  const filteredExp = expenses.filter(
    (exp) => new Date(exp.date).getFullYear() === +year
  );

  const total = filteredExp.reduce((a, b) => a + b.value, 0);

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
      <main>
        <Container>
          <Form addExpense={addExpense} />
          <FilterByYear year={year} changeYear={changeYear} />
        </Container>
        {filteredExp.length > 0 && (
          <>
            <TotalExpenses total={total} expenses={filteredExp} />
            <ExpensesList expenses={filteredExp} year={year} />
          </>
        )}
      </main>
    </React.Fragment>
  );
}

export default App;
