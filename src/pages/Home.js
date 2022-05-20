import React, { useEffect, useState } from "react";
import { auth, db } from "../utils/firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Login from "../components/Login";
import CreateTask from "../components/CreateTask";
import { NavLink } from "react-router-dom";
import List from "../components/List";
import { collection, getDocs } from "firebase/firestore";
import { getTasks } from "../feature/task.slice";
import { useDispatch, useSelector } from "react-redux";

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
