import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import React, {useState, useEffect} from 'react';

import {  BrowserRouter,  Route, Routes } from 'react-router-dom';

import Home from './views/Home';
import Favoritos from './views/Favoritos';
import NotFound from './views/NotFound';

import  Context  from "./context";

function App() {

  const storedFavorites = localStorage.getItem('favorites');
  const [favorites, setFavorites] = useState(storedFavorites ? JSON.parse(storedFavorites) : []); 
  
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);
  
  console.log(favorites)
  
  return (
    <div>
      <BrowserRouter>
        <Context.Provider value={{ favorites, setFavorites }}>
          <Routes>
            <Route path="/" element={<Home/>} />      
            <Route path="/favoritos" element={<Favoritos/>} />
            <Route path="*" element={<NotFound />} />                    
          </Routes>
        </Context.Provider>      
      </BrowserRouter>    
    </div>   
  );  
}

export default App;
