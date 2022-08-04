import React from "react";
import styles from "./ExpensesForm.module.css";
const Form = () => {
  return (
    <form className={styles.form}>
      <div className={styles["form-group"]}>
        <label id="exp-name">Expense name</label>
        <input type="text" htmlFor="exp-name" name="exp-name" />
      </div>
      <div className={styles["form-group"]}>
        <label id="exp-value">Expense value</label>
        <input type="number" min="0" htmlFor="exp-value" name="exp-value" />
      </div>
      <div className={styles["form-group"]}>
        <label id="exp-date">Expense date</label>
        <input type="date" htmlFor="exp-date" name="exp-date" />
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
