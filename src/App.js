import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/ExpensesForm";
import Container from "./components/UI/Container";
function App() {
  const [expenses, setExpenses] = useState([]);
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Form setExpenses={setExpenses} />
      </Container>
    </React.Fragment>
  );
}

export default App;
