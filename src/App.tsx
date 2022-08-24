import React, {useEffect, useState} from 'react';
import { allpokemons } from './Api';
import Header from './components/Header';
import './App.module.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './pages/home';
import { convertLength } from '@mui/material/styles/cssUtils';
import Pokedex from './pages/pokedex';


function App() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    const result = await allpokemons();
    setPokemons(result);
  };

  useEffect(() => {
    fetchPokemons();
    console.log(pokemons);
  }, []);

  return (
    <main>
      <Router>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Home />}/>
            <Route path='pokedex' element={<Pokedex />}/>
          </Route>
        </Routes>
      
      </Router>
      </main>
    );

}

export default App;
