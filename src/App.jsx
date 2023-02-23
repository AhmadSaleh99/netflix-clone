import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";

function App() {
  const user = null;
  return (
    <div className="app">
      {!user ? (
        <LoginScreen />
      ) : (
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
