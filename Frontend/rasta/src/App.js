import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mapcomponent from '../src/components/Mapcomponent';

// import Header from './components/Header';
import Sidebar from './Component/Sidebar';
// import Sidebar from './components/Sidebarcomponent';

export default function App() {
  return (
    <div className="App">
      <Sidebar />  
      <Mapcomponent/>
      
      
    </div>
  );
}

