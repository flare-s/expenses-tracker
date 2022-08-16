import React, { useRef, useContext } from "react";
import styles from "./ExpensesForm.module.scss";
import ExpensesContext from "../../context/expenses-context";
const Form = () => {
  const name = useRef();
  const value = useRef();
  const date = useRef();
  const { addExpense } = useContext(ExpensesContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newExp = {
      name: name.current.value,
      value: +value.current.value,
      date: date.current.value,
    };
    addExpense(newExp);
    name.current.value = "";
    value.current.value = "";
    date.current.value = "";
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles["form-group"]}>
        <label htmlFor="exp-name">Expense name</label>
        <input required type="text" id="exp-name" name="exp-name" ref={name} />
      </div>
      <div className={styles["form-group"]}>
        <label htmlFor="exp-value">Expense value</label>
        <input
          required
          type="number"
          min="1"
          id="exp-value"
          name="exp-value"
          ref={value}
        />
      </div>
      <div className={styles["form-group"]}>
        <label htmlFor="exp-date">Expense date</label>
        <input
          required
          type="date"
          id="exp-date"
          name="exp-date"
          min="2019-01-01"
          max={`${new Date().getFullYear()}-12-31`}
          ref={date}
        />
      </div>
      <div>
        <button className={styles["form-button"]} type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default Form;
