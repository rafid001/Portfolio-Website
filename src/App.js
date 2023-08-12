import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Resume from './components/Resume';
import Landing from './components/Landing';


function App() {
  return (
   /* <BrowserRouter>
      <Routes>
        <Route path="/resume" Component={Resume}/>
        <Route path="/" Component={Landing}/>
      </Routes>
    </BrowserRouter>*/

    <BrowserRouter>

    <Routes>
      <Route path="/resume" element={<Resume/>} />
      <Route path="/" element={<Landing/>} /> 
    </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
