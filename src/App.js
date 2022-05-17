import React, { useState } from "react";
import { auth } from "./utils/firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Login from "./components/Login";
import Create from "./components/Create";
import style from "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";

const App = () => {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <div className="todo-container">
      <button onClick={() => handleLogout()}>
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
      </button>
      <div className="todo-card">{user ? <Create /> : <Login />}</div>
    </div>
  );
  <BrowserRouter>
    <Routes>
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  </BrowserRouter>;
};
export default App;
