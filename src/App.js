import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './AppRouter';

import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Nav/>
          <AppRouter/>
        </BrowserRouter>
    </div>
  );
}

export default App;
