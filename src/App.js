import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { Intro } from './Intro/Intro.js';


function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Routes>
            <Route exact path='/' element={<Intro />}></Route>
          </Routes>
        </Router>
      </div>
    </div>    
  );
}

export default App;