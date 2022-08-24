import React from "react";
import "bulma/css/bulma.min.css";
import "./App.css";
// WE IMPORT OUR COMPONENTS
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}
export default App;
