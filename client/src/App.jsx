import { useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';
import  Canvas  from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';

function App() {
  return (
    <div className='app-container'>
      <main className='app transition-all ease-in'>
         <Home />
        <Canvas />
        <Customizer />
      </main>
    </div>
  );
}

export default App;
