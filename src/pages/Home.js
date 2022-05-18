import React, { useState } from "react";
import { auth } from "../utils/firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Login from "../components/Login";
import CreateTask from "../components/CreateTask";
import style from "../App.css";
import { NavLink } from "react-router-dom";
import List from "../components/List";

const Home = () => {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <div className="todo-container">
      <div className="connect-modal">
        <NavLink to="sign-up">S'inscrire</NavLink>
        <button onClick={() => handleLogout()}>
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </button>
      </div>
      <div className="todo-card">
        {user ? <CreateTask /> : <Login />}
        <div className="list">{user ? <List /> : ""}</div>
      </div>
    </div>
  );
};

export default Home;
