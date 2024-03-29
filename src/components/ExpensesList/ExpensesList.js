import React, { useContext } from "react";
import Container from "../UI/Container";
import styles from "./ExpensesList.module.scss";
import ExpensesContext from "../../context/expenses-context";

const ExpensesList = () => {
  const { filteredExp } = useContext(ExpensesContext);
  return (
    <section>
      <Container>
        <h2>Current Expenses</h2>
        <ul className={styles["expenses-list"]}>
          {filteredExp.map((exp) => (
            <li key={exp.id} className={styles["expense-item"]}>
              <time dateTime={exp.date} className={styles["expense-date"]}>
                {new Date(exp.date).toDateString()}
              </time>
              <span className={styles["expense-name"]}>{exp.name}</span>
              <span className={styles["expense-value"]}>{`$${exp.value}`}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default ExpensesList;
