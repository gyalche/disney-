
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import React  from 'react';
import Home from './components/Home';
function App() {
  return (

    <BrowserRouter>
    <div className="App">
         <Header />
          <Routes>
            <Route path="/" element={<Login />}>
            </Route>
            <Route path="/home" element={<Home />}></Route>
          </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;
