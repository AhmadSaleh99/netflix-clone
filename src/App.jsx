import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import { auth } from "./Firebase";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./pages/ProfileScreen";

function App() {
  const user = useSelector(selectUser, shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    const unSibscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout);
      }
    });
    return unSibscribe;
  });

  return (
    <div className="app">
      {!user ? (
        <LoginScreen />
      ) : (
        <Routes>
          <Route path="/profile" element={<ProfileScreen />} />
          <Route exact path="/" element={<HomeScreen />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
