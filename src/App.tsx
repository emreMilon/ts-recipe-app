import React, {useState, useEffect} from 'react';
import {Navbar, Banner} from "./components"
import './App.css';
import { useAppSelector } from './store/typedHooks';



function App() {


  const recipes = useAppSelector((state) => state.recipe.data)

  console.log(`recipes`, recipes)
  


  return (
    <div className="App">
      <Navbar />
      <Banner/>
     
      
    </div>
  );
}

export default App;
