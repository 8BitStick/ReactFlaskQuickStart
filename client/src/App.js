import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import logo from './logo.svg';

const App = () => {

  const login = async (username, password) => {
    try {
      const response = await axios.post("/login", {
        username,
        password,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  login("admin", "secret");

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React-Py
        </p>
      </header>
    </div>
  );
}

export default App;
