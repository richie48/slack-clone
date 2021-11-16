import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
    <Router>
      <>
        <Routes>
          <Route path="/"><React.Fragment>This is the homepage</React.Fragment></Route>
        </Routes>
      </>
    </Router>
    </div>
  );
}

export default App;
