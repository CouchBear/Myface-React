import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Posts from './Component/Posts';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <Router>
      <h1>This part is on every page!</h1>
      <Routes>
        <Route path='/posts'
          element={<Posts />}>

        </Route>
      </Routes>
    </Router>


  )
}

export default App
