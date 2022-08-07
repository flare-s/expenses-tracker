import React from "react";
import styles from "./ExpensesDetails.module.css";
const ExpensesDetails = (props) => {
  const data = [
    { month: "Jan", value: 0 },
    { month: "Feb", value: 0 },
    { month: "Mar", value: 0 },
    { month: "Apr", value: 0 },
    { month: "May", value: 0 },
    { month: "Jun", value: 0 },
    { month: "Jul", value: 0 },
    { month: "Aug", value: 0 },
    { month: "Sep", value: 0 },
    { month: "Oct", value: 0 },
    { month: "Nov", value: 0 },
    { month: "Dec", value: 0 },
  ];

  // Add the value of each exp to the total value of the month that they occured on
  props.expenses.forEach((exp) => {
    data[new Date(exp.date).getMonth()].value += exp.value;
  });

  return (
    <ul className={styles["details-list"]}>
      {data.map(
        (el) =>
          // Only show the items with value greater than 0
          el.value > 0 && (
            <li key={el.month} className={styles["details-item"]}>
              <p className={styles["details-month"]}>{el.month}</p>
              <p>${el.value}</p>
              <p>
                Expenses of this month:
                <span className={styles["details-percentage"]}>
                  {/* Get the percentage of the total expenses of the month against the total of the year */}
                  {Math.round((el.value / props.total) * 100)}%
                </span>
              </p>
            </li>
          )
      )}
    </ul>
  );
};

export default ExpensesDetails;
