import './App.css'
// import { useEffect, useState } from 'react';
// import HomeComp from './Components/HomeComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComp from './Components/HeaderComp';
import LoginComp from './Components/LoginComp';

function App() {

  return (
    <div className="App">
      <HeaderComp />
      <LoginComp />
    </div>
  );
}

export default App;
