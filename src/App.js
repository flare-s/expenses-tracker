import React from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/ExpensesForm";
function App() {
  return (
    <React.Fragment>
      <Header />
      <Form />
    </React.Fragment>
  );
}

export default App;
