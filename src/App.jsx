import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { Player } from "./components/Player";

function App() {
  return (
    <>
      <div>
        <Header />
        <Login />
      </div>
    </>
  );
}

export default App;
