import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from '../src/components/Home'
// import Header from '../src/components/Header'

function App() {
  return (
  <div>
<Router>
      <>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
      </Routes>
      </>
    </Router>
    </div>
  );
}

export default App;
