import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home'

import Header from './components/Header'
import SideBar from './components/SideBar'

import Chat from './components/Chat'

function App() {
  return (
  <div className='app-home'>
    <Router>
      <Header/>
      <SideBar/>
        <div className=''>
        <Chat/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
        </Routes>
        </div>
    </Router>
  </div>
  );
}

export default App;
