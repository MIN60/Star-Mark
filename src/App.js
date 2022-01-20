import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { Review } from './review/index.js';
import { Home } from './home/index.js';
import { SignUp } from './signUp/index.js';
import { Profile } from './profile/index.js';
import { WriteReview } from './review/index.js';
import { ReviewList } from './review/index.js';
import Seats from './pages/Seats.js';


function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route path='/SignUp' element={<SignUp />}></Route>
              <Route path='/MyPage/:nickName' element={<Profile />}></Route>
              <Route path='/ReviewList/:theaterId/:theaterRow/:theaterColumn' element={<ReviewList />}></Route>
              <Route path='/ReadReview/:reviewNo' element={<Review />}></Route>
              <Route path='/WriteReview/:theaterId/:theaterRow/:theaterColumn' element={<WriteReview />}></Route>
              <Route path='/Seats' element={<Seats />}></Route>
          </Routes>
        </Router>
      </div>
    </div>    
  );
}

export default App;