import React, { useRef } from "react";
import styles from "./ExpensesForm.module.css";
const Form = (props) => {
  const name = useRef();
  const value = useRef();
  const date = useRef();
  const { addExpense } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    const newExp = {
      name: name.current.value,
      value: value.current.value,
      date: date.current.value,
    };
    addExpense(newExp);
    console.log(newExp);
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
        <input required type="date" id="exp-date" name="exp-date" ref={date} />
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
