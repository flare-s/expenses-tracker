import React, { createContext, useState } from "react";

const ExpensesContext = createContext({
  expenses: {},
  filteredExp: {},
  year: 0,
  changeYear: (year) => {},
  addExpense: (exp) => {},
  total: 0,
});

export const ExpensesProvider = (props) => {
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
    <ExpensesContext.Provider
      value={{
        expenses,
        year,
        filteredExp,
        total,
        addExpense,
        changeYear,
      }}
    >
      {props.children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContext;
