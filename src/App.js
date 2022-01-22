import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { Home } from './home/index.js';
import Login from './home/Login.js'
import  SignUp  from './home/signUp.js';
import Seats from './pages/Seats.js';


function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route path='/Login' element={<Login />}></Route>
              <Route path='/SignUp' element={<SignUp />}></Route>
              <Route path='/Seats' element={<Seats />}></Route>
          </Routes>
        </Router>
      </div>
    </div>    
  );
}

export default App;