import React from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/ExpensesForm";
import Container from "./components/UI/Container";
function App() {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Form />
      </Container>
    </React.Fragment>
  );
}

export default App;
