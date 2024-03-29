import React, { useContext } from "react";
import Container from "../../UI/Container";
import ExpensesDetails from "../ExpensesDetails";
import ExpensesContext from "../../../context/expenses-context";

const TotalExpenses = () => {
  const { filteredExp } = useContext(ExpensesContext);
  const total = filteredExp.reduce((a, b) => a + b.value, 0);
  return (
    <section>
      <Container>
        <h2>Expenses Details</h2>
        <p style={{ textAlign: "center", fontSize: "calc(22rem/16)" }}>
          Total expenses:{" "}
          <span
            style={{
              display: "inline-block",
              padding: "5px",
              marginLeft: "5px",
              backgroundColor: "var(--primary-color)",
              borderRadius: "5px",
            }}
          >
            ${total}
          </span>
        </p>
        <ExpensesDetails total={total} />
      </Container>
    </section>
  );
};

export default TotalExpenses;
