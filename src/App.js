import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import {  BrowserRouter,  Route, Routes } from 'react-router-dom';

import Home from './views/Home';
import Favoritos from './views/Favoritos';
import NotFound from './views/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />      
          <Route path="/favoritos" element={<Favoritos/>} />
          <Route path="*" element={<NotFound />} />          
        </Routes>      
      </BrowserRouter>    
    </div>   
  );
}

export default App;
