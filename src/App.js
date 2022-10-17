import Header from './components/Header';
import MainPageApp from './components/main/MainPageApp';
import './App.css';
import React, { useState } from 'react'

function App() {
  const [state,setState]=useState(false)
  return (
    <div className="App">
  {state? <Header/>:''}
   <MainPageApp  setState={setState}/>
    </div>
  );
}

export default App;
