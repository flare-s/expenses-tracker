import React from "react";
import Container from "../../UI/Container";

const TotalExpenses = (props) => {
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
            ${props.total}
          </span>
        </p>
      </Container>
    </section>
  );
};

export default TotalExpenses;