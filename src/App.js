import './App.css';
import React, { useState } from 'react';
import ListOfGifs from './componentes/ListSearh';
import { Route } from 'wouter';
import Search from './componentes/search';
import Inicio from './componentes/inicio';
import useGifs from './hooks/useGifs';


export default function App() {
  return (
    <main >
    <div className='App-header'>
      <header>
        <Search></Search>
      </header>
      <section>
        <h1>Trending</h1>
          <div id='container'> 
            <Route component={Inicio} path="/"></Route>
            <Route component={ListOfGifs} path="/gif/:keyword"></Route>
          </div>
      </section>  
    </div>
    
    <footer>
      <p>Powered by: <a id='aFooter' href='https://giphy.com/' target={'_blank'}>Giphy</a></p>
    </footer>
    </main>
  )};
