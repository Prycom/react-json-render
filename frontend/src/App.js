import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Component from './components/Component';
import RedactorComponent from './components/RedactorComponent';


function App() {
  return (
    <div className="App">
      <RedactorComponent />
    </div>
  );
}

export default App;
