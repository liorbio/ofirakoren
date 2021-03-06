import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import TheWorkflow from './components/the-workflow/TheWorkflow';
import TopBar from './components/top-bar/TopBar';
import GalleryPage from './pages/GalleryPage';
import WorkflowPage from './pages/WorkflowPage';

function App() {
  return (
    <div className="App">
      <TopBar />
       
      <Routes>
        {/*
        <Route path="/about" element={} />*/}
        <Route path="/workflow" element={<WorkflowPage />} />
        {/*
        <Route path="/contact" element={} />
        */}
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="*" element={<Navigate replace to='/gallery' />} />
      </Routes>
      
    </div>
  );
}

export default App;

