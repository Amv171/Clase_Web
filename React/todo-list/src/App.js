import './App.css';
import Logo from './components/Logo';
import Utad from './images/logo.webpg';
import ListToDo from './components/ListToDo';
import { useState, useRef, useEffect } from 'react';
function App() {
  return (
    <div className="App">
      <Logo
      url={Utad}
      alternative={"Logo U-Tad"}
      />
      <div className="List-to-do">
        <h1>Mis Tareas</h1>
      <ListToDo/>
      </div>
    </div>
  );
}

export default App;
