
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import React  from 'react';
function App() {
  return (

    <BrowserRouter>
    <div className="App">
         <Header />
          <Routes>
            <Route path="/" element={<Login />}>
            </Route>
            
          </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;
