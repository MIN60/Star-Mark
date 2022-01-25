import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { Intro } from './Intro/Intro.js';
import { Bookmark } from './bookmark/bookmark.js';
import { TransitionGroup, CSSTransition } from "react-transition-group";


function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <TransitionGroup>
            <CSSTransition
              key={window.location.key}
              classNames="next"
              timeout={700}
            >

              <Routes>
                <Route exact path='/' element={<Intro />}></Route>
                <Route exact path='/mypage/:id' element={<Bookmark />}></Route>
              </Routes>

            </CSSTransition>
          </TransitionGroup>  
        </Router>
      </div>
    </div>    
  );
}

export default App;