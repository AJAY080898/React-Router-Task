import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import All from './Components/All';
import Career from './Components/Career';
import CyberSecurity from './Components/CyberSecurity';
import DataScience from './Components/DataScience';
import FullStackDevelopment from './Components/FullStackDevelopment';
import NavigationBar from './Components/NavigationBar';
import './App.css';


const App = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/fullstack" element={<FullStackDevelopment />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
