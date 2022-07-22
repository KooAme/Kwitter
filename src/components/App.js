import React, { useState } from 'react';
import { Router } from 'react-router-dom';
import AppRouter from './Router';
import firebase from '../firebase';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
