import React from 'react';
import './App.css';
import SignInOutContainer from './containers';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Header from './components/Header'
import Features from './components/Features';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/kia.jpg"})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

function App() {
  return (
    <div className="App">
      <SignInOutContainer />
    </div>
  );
}

export default App;