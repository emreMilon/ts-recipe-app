import React from "react";
import { Navbar, Banner } from "./components";
import "./App.css";
import CardList from "./components/CardList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <CardList />
    </div>
  );
}

export default App;
