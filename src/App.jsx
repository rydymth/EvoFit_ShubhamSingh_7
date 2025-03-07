import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
// import Home from './Components/Games';
// import Profile from './Components/Signin';
import Signin from './Components/Signin';
import Signup from './Components/Signup';

function App() {
  return (
    <Router>
   
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Home" element={<Home />} /> */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
