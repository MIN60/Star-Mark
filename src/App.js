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
              {/*<Route exact path='/' element={<Home />}></Route>
              <Route path='/Login' element={<Login />}></Route>
              <Route path='/SignUp' element={<SignUp />}></Route>
              <Route path='/Stardot' element={<Stardot />}></Route>*/}
          </Routes>
        </Router>
      </div>
    </div>    
  );
}

export default App;