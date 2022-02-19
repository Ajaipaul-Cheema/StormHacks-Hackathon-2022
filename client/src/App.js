import './App.css';
import React from 'react';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Header from './components/Header'
import Features from './components/Features'
import SignInOutContainer from './containers/SignInOutContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/kia.jpg"})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className = {classes.root}>
      <CssBaseline/>
      <Header />
      <Features />
    </div>
  );
}

export default App;